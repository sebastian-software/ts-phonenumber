/**
 * Converts libphonenumber JavaScript tests to Vitest TypeScript tests.
 *
 * This script:
 * 1. Parses the upstream phonenumberutil_test.js
 * 2. Converts JSUnit assertions to Vitest expects
 * 3. Adapts PhoneNumber creation to test fixture format
 * 4. Makes tests async where our API requires it
 * 5. Outputs TypeScript test files
 *
 * Run: npx tsx scripts/convert-tests.ts
 */

import * as fs from "fs"
import * as path from "path"

const UPSTREAM_TEST_FILE = "upstream/javascript/i18n/phonenumbers/phonenumberutil_test.js"
const OUTPUT_DIR = "src/__tests__/legacy"

interface TestFunction {
  name: string
  body: string
  lineNumber: number
}

interface PhoneNumberFixture {
  varName: string
  countryCode: number
  nationalNumber: bigint
  italianLeadingZero?: boolean
  rawInput?: string
}

/**
 * Extract test functions from the source code
 */
function extractTestFunctions(source: string): TestFunction[] {
  const tests: TestFunction[] = []
  const lines = source.split("\n")

  let inFunction = false
  let currentTest: TestFunction | null = null
  let braceCount = 0
  let bodyLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Look for function testXxx() {
    const funcMatch = line.match(/^function (test\w+)\(\)\s*\{/)
    if (funcMatch && !inFunction) {
      inFunction = true
      currentTest = {
        name: funcMatch[1],
        body: "",
        lineNumber: i + 1
      }
      braceCount = 1
      bodyLines = []
      continue
    }

    if (inFunction) {
      // Count braces
      for (const char of line) {
        if (char === "{") braceCount++
        if (char === "}") braceCount--
      }

      if (braceCount === 0) {
        // End of function
        if (currentTest) {
          currentTest.body = bodyLines.join("\n")
          tests.push(currentTest)
        }
        inFunction = false
        currentTest = null
      } else {
        bodyLines.push(line)
      }
    }
  }

  return tests
}

/**
 * Extract phone number fixtures from the source
 */
function extractPhoneNumberFixtures(source: string): PhoneNumberFixture[] {
  const fixtures: PhoneNumberFixture[] = []
  const lines = source.split("\n")

  let currentVarName = ""
  let currentCountryCode = 0
  let currentNationalNumber = 0n
  let currentItalianZero = false
  let currentRawInput = ""

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Match: var ALPHA_NUMERIC_NUMBER = new i18n.phonenumbers.PhoneNumber();
    const varMatch = line.match(/^var (\w+) = new i18n\.phonenumbers\.PhoneNumber\(\);/)
    if (varMatch) {
      if (currentVarName && currentCountryCode > 0) {
        fixtures.push({
          varName: currentVarName,
          countryCode: currentCountryCode,
          nationalNumber: currentNationalNumber,
          italianLeadingZero: currentItalianZero || undefined,
          rawInput: currentRawInput || undefined
        })
      }
      currentVarName = varMatch[1]
      currentCountryCode = 0
      currentNationalNumber = 0n
      currentItalianZero = false
      currentRawInput = ""
      continue
    }

    // Match setCountryCode
    const ccMatch = line.match(/(\w+)\.setCountryCode\((\d+)\);/)
    if (ccMatch && ccMatch[1] === currentVarName) {
      currentCountryCode = parseInt(ccMatch[2], 10)
    }

    // Match setNationalNumber
    const nnMatch = line.match(/(\w+)\.setNationalNumber\((\d+)\);/)
    if (nnMatch && nnMatch[1] === currentVarName) {
      currentNationalNumber = BigInt(nnMatch[2])
    }

    // Match setItalianLeadingZero
    const izMatch = line.match(/(\w+)\.setItalianLeadingZero\((true|false)\);/)
    if (izMatch && izMatch[1] === currentVarName) {
      currentItalianZero = izMatch[2] === "true"
    }

    // Match setRawInput
    const riMatch = line.match(/(\w+)\.setRawInput\('([^']+)'\);/)
    if (riMatch && riMatch[1] === currentVarName) {
      currentRawInput = riMatch[2]
    }
  }

  // Push last fixture
  if (currentVarName && currentCountryCode > 0) {
    fixtures.push({
      varName: currentVarName,
      countryCode: currentCountryCode,
      nationalNumber: currentNationalNumber,
      italianLeadingZero: currentItalianZero || undefined,
      rawInput: currentRawInput || undefined
    })
  }

  return fixtures
}

/**
 * Find the matching closing parenthesis
 */
function findMatchingParen(str: string, startIndex: number): number {
  let depth = 1
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === "(") depth++
    if (str[i] === ")") {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

/**
 * Extract function argument accounting for nested parens
 */
function extractArg(str: string, startIndex: number): { arg: string; endIndex: number } {
  let depth = 0
  let i = startIndex

  // Skip leading whitespace
  while (i < str.length && /\s/.test(str[i])) i++

  const start = i

  while (i < str.length) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") depth++
    if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      if (depth === 0) break
      depth--
    }
    if (str[i] === "," && depth === 0) break
    i++
  }

  return { arg: str.slice(start, i).trim(), endIndex: i }
}

/**
 * Convert assertion to Vitest expect
 */
function convertAssertion(line: string): string {
  let result = line

  // Handle assertEquals(expected, actual)
  const assertEqualsMatch = result.match(/assertEquals\(/)
  if (assertEqualsMatch) {
    const startIdx = result.indexOf("assertEquals(") + "assertEquals(".length
    const firstArg = extractArg(result, startIdx)
    const commaIdx = firstArg.endIndex + 1 // Skip comma
    const secondArg = extractArg(result, commaIdx)
    const closeParen = secondArg.endIndex

    const before = result.slice(0, result.indexOf("assertEquals("))
    const after = result.slice(closeParen + 1)

    result = `${before}expect(${secondArg.arg}).toBe(${firstArg.arg})${after}`
  }

  // Handle assertTrue(x)
  const assertTrueMatch = result.match(/assertTrue\(/)
  if (assertTrueMatch && !result.includes("expect(")) {
    const startIdx = result.indexOf("assertTrue(") + "assertTrue(".length
    const arg = extractArg(result, startIdx)
    const before = result.slice(0, result.indexOf("assertTrue("))
    const after = result.slice(arg.endIndex + 1)
    result = `${before}expect(${arg.arg}).toBe(true)${after}`
  }

  // Handle assertFalse(x)
  const assertFalseMatch = result.match(/assertFalse\(/)
  if (assertFalseMatch && !result.includes("expect(")) {
    const startIdx = result.indexOf("assertFalse(") + "assertFalse(".length
    const arg = extractArg(result, startIdx)
    const before = result.slice(0, result.indexOf("assertFalse("))
    const after = result.slice(arg.endIndex + 1)
    result = `${before}expect(${arg.arg}).toBe(false)${after}`
  }

  // Handle assertNull(x)
  const assertNullMatch = result.match(/assertNull\(/)
  if (assertNullMatch && !result.includes("expect(")) {
    const startIdx = result.indexOf("assertNull(") + "assertNull(".length
    const arg = extractArg(result, startIdx)
    const before = result.slice(0, result.indexOf("assertNull("))
    const after = result.slice(arg.endIndex + 1)
    result = `${before}expect(${arg.arg}).toBeNull()${after}`
  }

  // fail(msg) -> throw new Error(msg)
  result = result.replace(/\bfail\(([^)]+)\)/g, "throw new Error($1)")

  return result
}

/**
 * Convert PhoneNumber method calls to our API
 */
function convertPhoneNumberCalls(line: string): string {
  let result = line

  // phoneUtil.parse('xxx', RegionCode.YY) -> await parse('xxx', { defaultRegion: 'YY' })
  result = result.replace(
    /phoneUtil\.parse\(([^,]+),\s*RegionCode\.(\w+)\)/g,
    "await parse($1, { defaultRegion: '$2' })"
  )

  // phoneUtil.format(NUMBER, PNF.FORMAT) -> await format(NUMBER, PhoneNumberFormat.FORMAT)
  result = result.replace(
    /phoneUtil\.format\(([^,]+),\s*PNF\.(\w+)\)/g,
    "await formatNumber($1, PhoneNumberFormat.$2)"
  )

  // phoneUtil.isValidNumber(x) -> await isValidNumber(x)
  result = result.replace(/phoneUtil\.isValidNumber\(([^)]+)\)/g, "(await validate($1)).isValid")

  // phoneUtil.isValidNumberForRegion(num, RegionCode.XX) -> await isValidForRegion(num, 'XX')
  result = result.replace(
    /phoneUtil\.isValidNumberForRegion\(([^,]+),\s*RegionCode\.(\w+)\)/g,
    "await isValidForRegion($1, '$2')"
  )

  // phoneUtil.getNumberType(x) -> await getType(x)
  result = result.replace(/phoneUtil\.getNumberType\(([^)]+)\)/g, "await getType($1)")

  return result
}

/**
 * Convert a test body to Vitest format
 */
function convertTestBody(body: string, fixtures: PhoneNumberFixture[]): string {
  const lines = body.split("\n")
  const convertedLines: string[] = []

  for (const line of lines) {
    let converted = line

    // Skip JSDoc comments
    if (converted.trim().startsWith("/**") || converted.trim().startsWith("*")) {
      continue
    }

    // Skip goog.require statements
    if (converted.includes("goog.require") || converted.includes("goog.string")) {
      continue
    }

    // Convert assertions
    converted = convertAssertion(converted)

    // Convert phoneUtil calls
    converted = convertPhoneNumberCalls(converted)

    // Replace PhoneNumber type references
    converted = converted.replace(
      /i18n\.phonenumbers\.PhoneNumberType\.(\w+)/g,
      "PhoneNumberType.$1"
    )

    // Replace PhoneNumberFormat type references
    converted = converted.replace(
      /i18n\.phonenumbers\.PhoneNumberFormat\.(\w+)/g,
      "PhoneNumberFormat.$1"
    )

    // Replace RegionCode references
    converted = converted.replace(/RegionCode\.(\w+)/g, "'$1'")

    // Replace Error references
    converted = converted.replace(/i18n\.phonenumbers\.Error\.(\w+)/g, "ParseError.$1")

    // Handle inline PhoneNumber creation
    converted = converted.replace(/new i18n\.phonenumbers\.PhoneNumber\(\)/g, "createPhoneNumber()")

    // Handle .equals() calls on PhoneNumber
    converted = converted.replace(/(\w+)\.equals\(([^)]+)\)/g, "phoneNumberEquals($1, $2)")

    // Handle getter methods
    converted = converted.replace(/\.getCountryCode\(\)/g, ".countryCode")
    converted = converted.replace(/\.getNationalNumber\(\)/g, ".nationalNumber")
    converted = converted.replace(/\.getRawInput\(\)/g, ".rawInput")
    converted = converted.replace(/\.getItalianLeadingZero\(\)/g, ".italianLeadingZero")

    convertedLines.push(converted)
  }

  return convertedLines.join("\n")
}

/**
 * Convert test name from testCamelCase to readable format
 */
function convertTestName(name: string): string {
  // Remove 'test' prefix
  let result = name.replace(/^test/, "")

  // Split on capital letters and join with spaces
  result = result.replace(/([A-Z])/g, " $1").trim()

  // Lowercase first letter
  result = result.charAt(0).toLowerCase() + result.slice(1)

  return result
}

/**
 * Group tests by category
 */
function groupTests(tests: TestFunction[]): Map<string, TestFunction[]> {
  const groups = new Map<string, TestFunction[]>()

  for (const test of tests) {
    let category = "general"

    if (test.name.includes("Parse")) {
      category = "parse"
    } else if (test.name.includes("Format")) {
      category = "format"
    } else if (test.name.includes("Valid")) {
      category = "validate"
    } else if (test.name.includes("Type")) {
      category = "type"
    } else if (test.name.includes("Metadata")) {
      category = "metadata"
    } else if (test.name.includes("Region") || test.name.includes("Country")) {
      category = "region"
    }

    if (!groups.has(category)) {
      groups.set(category, [])
    }
    groups.get(category)!.push(test)
  }

  return groups
}

/**
 * Generate fixtures file
 */
function generateFixturesFile(fixtures: PhoneNumberFixture[]): string {
  const lines = [
    "/**",
    " * Phone number test fixtures.",
    " * Auto-generated from libphonenumber test data.",
    " * Do not edit manually.",
    " */",
    "",
    'import type { PhoneNumberFixture } from "./test-utils.js";',
    ""
  ]

  for (const fixture of fixtures) {
    const props = [
      `countryCode: ${fixture.countryCode}`,
      `nationalNumber: "${fixture.nationalNumber}"`
    ]
    if (fixture.italianLeadingZero) {
      props.push(`italianLeadingZero: true`)
    }
    if (fixture.rawInput) {
      props.push(`rawInput: "${fixture.rawInput}"`)
    }

    lines.push(`export const ${fixture.varName}: PhoneNumberFixture = { ${props.join(", ")} };`)
    lines.push("")
  }

  return lines.join("\n")
}

/**
 * Generate test utilities file
 */
function generateTestUtilsFile(): string {
  return `/**
 * Test utilities for legacy test compatibility.
 * Provides helpers to bridge between libphonenumber test patterns and our API.
 */

import { parse, validate, format, getType } from "../../index.js";
import type { ParsedPhoneNumber, ValidationResult } from "../../types.js";
import { PhoneNumberType, PhoneNumberFormat } from "../../types.js";

/**
 * A phone number fixture for testing.
 */
export interface PhoneNumberFixture {
  countryCode: number;
  nationalNumber: string;
  italianLeadingZero?: boolean;
  rawInput?: string;
  extension?: string;
}

/**
 * Mutable phone number for test construction.
 */
export class MutablePhoneNumber implements PhoneNumberFixture {
  countryCode: number = 0;
  nationalNumber: string = "";
  italianLeadingZero?: boolean;
  rawInput?: string;
  extension?: string;

  setCountryCode(cc: number): void {
    this.countryCode = cc;
  }

  setNationalNumber(nn: number | bigint): void {
    this.nationalNumber = String(nn);
  }

  setItalianLeadingZero(value: boolean): void {
    this.italianLeadingZero = value;
  }

  setRawInput(input: string): void {
    this.rawInput = input;
  }

  setExtension(ext: string): void {
    this.extension = ext;
  }

  /**
   * Convert to E.164 string for parsing
   */
  toE164(): string {
    let result = \`+\${this.countryCode}\`;
    if (this.italianLeadingZero) {
      result += "0";
    }
    result += this.nationalNumber;
    return result;
  }

  /**
   * Check equality with another phone number
   */
  equals(other: PhoneNumberFixture | ParsedPhoneNumber): boolean {
    const otherNational = "nationalNumber" in other
      ? String(other.nationalNumber)
      : "";
    return (
      this.countryCode === other.countryCode &&
      this.nationalNumber === otherNational
    );
  }
}

/**
 * Create a new mutable phone number for testing
 */
export function createPhoneNumber(): MutablePhoneNumber {
  return new MutablePhoneNumber();
}

/**
 * Check equality between two phone numbers
 */
export function phoneNumberEquals(
  a: PhoneNumberFixture | ParsedPhoneNumber,
  b: PhoneNumberFixture | ParsedPhoneNumber
): boolean {
  const aNational = String(a.nationalNumber);
  const bNational = String(b.nationalNumber);
  return a.countryCode === b.countryCode && aNational === bNational;
}

/**
 * Format a phone number fixture
 */
export async function formatNumber(
  number: PhoneNumberFixture | ParsedPhoneNumber,
  fmt: PhoneNumberFormat
): Promise<string> {
  if ("toE164" in number && typeof number.toE164 === "function") {
    return format(number.toE164(), fmt);
  }
  return format(\`+\${number.countryCode}\${number.nationalNumber}\`, fmt);
}

/**
 * Check if a number is valid for a specific region
 */
export async function isValidForRegion(
  number: PhoneNumberFixture | ParsedPhoneNumber | string,
  region: string
): Promise<boolean> {
  let phoneString: string;
  if (typeof number === "string") {
    phoneString = number;
  } else if ("toE164" in number && typeof number.toE164 === "function") {
    phoneString = number.toE164();
  } else {
    phoneString = \`+\${number.countryCode}\${number.nationalNumber}\`;
  }

  const result = await parse(phoneString, { defaultRegion: region });
  return result.isValid && result.regionCode === region;
}

// Re-export commonly used items
export { parse, validate, format, getType, PhoneNumberType, PhoneNumberFormat };

/**
 * Parse error types (compatible with libphonenumber)
 */
export const ParseError = {
  INVALID_COUNTRY_CODE: "INVALID_COUNTRY_CODE",
  NOT_A_NUMBER: "NOT_A_NUMBER",
  TOO_SHORT_AFTER_IDD: "TOO_SHORT_AFTER_IDD",
  TOO_SHORT_NSN: "TOO_SHORT_NSN",
  TOO_LONG: "TOO_LONG",
} as const;
`
}

/**
 * Generate a test file for a category
 */
function generateTestFile(
  category: string,
  tests: TestFunction[],
  fixtures: PhoneNumberFixture[]
): string {
  const lines = [
    "/**",
    ` * Legacy ${category} tests from libphonenumber.`,
    " * Auto-converted to Vitest format.",
    " * Based on phonenumberutil_test.js from google/libphonenumber v9.0.21",
    " */",
    "",
    'import { describe, it, expect, beforeEach } from "vitest";',
    "import {",
    "  parse,",
    "  validate,",
    "  format,",
    "  getType,",
    "  createPhoneNumber,",
    "  phoneNumberEquals,",
    "  formatNumber,",
    "  isValidForRegion,",
    "  PhoneNumberType,",
    "  PhoneNumberFormat,",
    "  ParseError,",
    '} from "./test-utils.js";',
    "import {",
    fixtures.map((f) => `  ${f.varName},`).join("\n"),
    '} from "./fixtures.js";',
    'import { clearMetadataCache, registerMetadata } from "../../index.js";',
    "",
    "// Load required metadata",
    'import DE from "../../metadata/countries/DE.js";',
    'import US from "../../metadata/countries/US.js";',
    'import GB from "../../metadata/countries/GB.js";',
    'import NZ from "../../metadata/countries/NZ.js";',
    'import IT from "../../metadata/countries/IT.js";',
    'import AU from "../../metadata/countries/AU.js";',
    'import AR from "../../metadata/countries/AR.js";',
    'import MX from "../../metadata/countries/MX.js";',
    'import BS from "../../metadata/countries/BS.js";',
    'import SG from "../../metadata/countries/SG.js";',
    'import JP from "../../metadata/countries/JP.js";',
    'import PL from "../../metadata/countries/PL.js";',
    'import BR from "../../metadata/countries/BR.js";',
    'import RE from "../../metadata/countries/RE.js";',
    'import YT from "../../metadata/countries/YT.js";',
    "",
    `describe("Legacy ${category} tests", () => {`,
    "  beforeEach(() => {",
    "    clearMetadataCache();",
    "    registerMetadata(DE);",
    "    registerMetadata(US);",
    "    registerMetadata(GB);",
    "    registerMetadata(NZ);",
    "    registerMetadata(IT);",
    "    registerMetadata(AU);",
    "    registerMetadata(AR);",
    "    registerMetadata(MX);",
    "    registerMetadata(BS);",
    "    registerMetadata(SG);",
    "    registerMetadata(JP);",
    "    registerMetadata(PL);",
    "    registerMetadata(BR);",
    "    registerMetadata(RE);",
    "    registerMetadata(YT);",
    "  });",
    ""
  ]

  for (const test of tests) {
    const testName = convertTestName(test.name)
    const testBody = convertTestBody(test.body, fixtures)

    // Check if test body contains await
    const isAsync = testBody.includes("await ")

    lines.push(`  it("${testName}", ${isAsync ? "async " : ""}() => {`)
    lines.push(
      testBody
        .split("\n")
        .map((l) => "    " + l.trimStart())
        .join("\n")
    )
    lines.push("  });")
    lines.push("")
  }

  lines.push("});")
  lines.push("")

  return lines.join("\n")
}

/**
 * Main conversion function
 */
async function main() {
  console.log("Converting libphonenumber tests to Vitest format...\n")

  // Read the source file
  const source = fs.readFileSync(UPSTREAM_TEST_FILE, "utf-8")

  // Extract test functions
  const tests = extractTestFunctions(source)
  console.log(`Found ${tests.length} test functions`)

  // Extract phone number fixtures
  const fixtures = extractPhoneNumberFixtures(source)
  console.log(`Found ${fixtures.length} phone number fixtures`)

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  // Generate test utilities file
  const testUtilsContent = generateTestUtilsFile()
  fs.writeFileSync(path.join(OUTPUT_DIR, "test-utils.ts"), testUtilsContent)
  console.log("Generated test-utils.ts")

  // Generate fixtures file
  const fixturesContent = generateFixturesFile(fixtures)
  fs.writeFileSync(path.join(OUTPUT_DIR, "fixtures.ts"), fixturesContent)
  console.log("Generated fixtures.ts")

  // Group tests by category
  const groupedTests = groupTests(tests)

  // Generate test files for each category
  for (const [category, categoryTests] of groupedTests) {
    const content = generateTestFile(category, categoryTests, fixtures)
    const fileName = `${category}.test.ts`
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), content)
    console.log(`Generated ${fileName} (${categoryTests.length} tests)`)
  }

  console.log("\nTest conversion complete!")
  console.log(`Output directory: ${OUTPUT_DIR}`)
  console.log("\nNote: Manual review and adjustments may be needed.")
}

main().catch(console.error)
