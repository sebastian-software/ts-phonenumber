#!/usr/bin/env npx tsx

/**
 * Converts libphonenumber PhoneNumberMetadata.xml to TypeScript ESM modules.
 *
 * Uses fast-xml-parser to parse the canonical XML source directly,
 * which is cleaner and more reliable than parsing the compiled JS.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { XMLParser } from "fast-xml-parser"

const ROOT_DIR = join(import.meta.dirname ?? ".", "..")
const UPSTREAM_XML = join(ROOT_DIR, "upstream/resources/PhoneNumberMetadata.xml")
const OUTPUT_DIR = join(ROOT_DIR, "src/metadata/countries")

interface PhoneNumberDesc {
  /** Pattern as string (will be converted to RegExp literal in output) */
  pattern?: string
  example?: string
  possibleLengths?: number[]
  possibleLengthsLocalOnly?: number[]
}

interface NumberFormat {
  pattern: string
  format: string
  leadingDigits?: string[]
  nationalPrefixFormattingRule?: string
  domesticCarrierCodeFormattingRule?: string
  nationalPrefixOptional?: boolean
}

interface RegionMetadata {
  regionCode: string
  countryCode: number
  internationalPrefix?: string
  nationalPrefix?: string
  nationalPrefixForParsing?: string
  nationalPrefixTransformRule?: string
  preferredInternationalPrefix?: string
  mainCountryForCode?: boolean
  leadingDigits?: string
  generalDesc?: PhoneNumberDesc
  fixedLine?: PhoneNumberDesc
  mobile?: PhoneNumberDesc
  voip?: PhoneNumberDesc
  formats?: NumberFormat[]
  intlFormats?: NumberFormat[]
}

// XML element types from fast-xml-parser
interface XMLTerritory {
  "@_id": string
  "@_countryCode": string
  "@_internationalPrefix"?: string
  "@_nationalPrefix"?: string
  "@_nationalPrefixForParsing"?: string
  "@_nationalPrefixTransformRule"?: string
  "@_preferredInternationalPrefix"?: string
  "@_mainCountryForCode"?: string
  "@_leadingDigits"?: string
  generalDesc?: XMLPhoneDesc
  fixedLine?: XMLPhoneDesc
  mobile?: XMLPhoneDesc
  voip?: XMLPhoneDesc
  availableFormats?: { numberFormat: XMLNumberFormat | XMLNumberFormat[] }
}

interface XMLPhoneDesc {
  nationalNumberPattern?: string
  exampleNumber?: string
  possibleLengths?: {
    "@_national"?: string
    "@_localOnly"?: string
  }
}

interface XMLNumberFormat {
  "@_pattern": string
  "@_nationalPrefixFormattingRule"?: string
  "@_nationalPrefixOptionalWhenFormatting"?: string
  "@_carrierCodeFormattingRule"?: string
  format: string
  intlFormat?: string | string[]
  leadingDigits?: string | string[]
}

/**
 * Parse possible lengths string "4,5,6,7" or "4,5,[7-9]" into array
 */
function parsePossibleLengths(str: string | undefined): number[] | undefined {
  if (!str) return undefined

  const lengths: number[] = []

  for (const part of str.split(",")) {
    const trimmed = part.trim()

    // Handle range like [7-9]
    const rangeMatch = trimmed.match(/\[(\d+)-(\d+)\]/)
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10)
      const end = parseInt(rangeMatch[2], 10)
      for (let i = start; i <= end; i++) {
        lengths.push(i)
      }
    } else {
      const num = parseInt(trimmed, 10)
      if (!isNaN(num) && num > 0) {
        lengths.push(num)
      }
    }
  }

  return lengths.length > 0 ? lengths : undefined
}

/**
 * Clean and normalize regex pattern (remove newlines, extra spaces)
 */
function cleanPattern(pattern: string | undefined): string | undefined {
  if (!pattern) return undefined
  return pattern.replace(/\s+/g, "").trim()
}

/**
 * Parse a phone number description from XML
 */
function parsePhoneDesc(desc: XMLPhoneDesc | undefined): PhoneNumberDesc | undefined {
  if (!desc) return undefined

  const pattern = cleanPattern(desc.nationalNumberPattern)
  const example = desc.exampleNumber?.trim()
  const possibleLengths = parsePossibleLengths(desc.possibleLengths?.["@_national"])
  const possibleLengthsLocalOnly = parsePossibleLengths(desc.possibleLengths?.["@_localOnly"])

  if (!pattern && !example && !possibleLengths) {
    return undefined
  }

  const result: PhoneNumberDesc = {}
  if (pattern) result.pattern = pattern
  if (example) result.example = example
  if (possibleLengths) result.possibleLengths = possibleLengths
  if (possibleLengthsLocalOnly) result.possibleLengthsLocalOnly = possibleLengthsLocalOnly

  return result
}

/**
 * Parse number formats from XML
 */
function parseFormats(
  availableFormats: { numberFormat: XMLNumberFormat | XMLNumberFormat[] } | undefined
): NumberFormat[] | undefined {
  if (!availableFormats?.numberFormat) return undefined

  const formats = Array.isArray(availableFormats.numberFormat)
    ? availableFormats.numberFormat
    : [availableFormats.numberFormat]

  const result: NumberFormat[] = []

  for (const fmt of formats) {
    if (!fmt["@_pattern"] || !fmt.format) continue

    const numberFormat: NumberFormat = {
      pattern: fmt["@_pattern"],
      format: fmt.format
    }

    // Leading digits can be string or array
    if (fmt.leadingDigits) {
      const digits = Array.isArray(fmt.leadingDigits) ? fmt.leadingDigits : [fmt.leadingDigits]
      numberFormat.leadingDigits = digits.map((d) => cleanPattern(d)!).filter(Boolean)
    }

    if (fmt["@_nationalPrefixFormattingRule"]) {
      numberFormat.nationalPrefixFormattingRule = fmt["@_nationalPrefixFormattingRule"]
    }

    if (fmt["@_carrierCodeFormattingRule"]) {
      numberFormat.domesticCarrierCodeFormattingRule = fmt["@_carrierCodeFormattingRule"]
    }

    if (fmt["@_nationalPrefixOptionalWhenFormatting"] === "true") {
      numberFormat.nationalPrefixOptional = true
    }

    result.push(numberFormat)
  }

  return result.length > 0 ? result : undefined
}

/**
 * Parse a territory element into RegionMetadata
 */
function parseTerritory(territory: XMLTerritory): RegionMetadata {
  const meta: RegionMetadata = {
    regionCode: territory["@_id"],
    countryCode: parseInt(territory["@_countryCode"], 10)
  }

  // String attributes
  if (territory["@_internationalPrefix"]) {
    meta.internationalPrefix = territory["@_internationalPrefix"]
  }
  if (territory["@_nationalPrefix"]) {
    meta.nationalPrefix = territory["@_nationalPrefix"]
  }
  if (territory["@_nationalPrefixForParsing"]) {
    meta.nationalPrefixForParsing = cleanPattern(territory["@_nationalPrefixForParsing"])
  }
  if (territory["@_nationalPrefixTransformRule"]) {
    meta.nationalPrefixTransformRule = territory["@_nationalPrefixTransformRule"]
  }
  if (territory["@_preferredInternationalPrefix"]) {
    meta.preferredInternationalPrefix = territory["@_preferredInternationalPrefix"]
  }
  if (territory["@_leadingDigits"]) {
    meta.leadingDigits = cleanPattern(territory["@_leadingDigits"])
  }

  // Boolean attributes
  if (territory["@_mainCountryForCode"] === "true") {
    meta.mainCountryForCode = true
  }

  // Phone number descriptions (only the types we support)
  const generalDesc = parsePhoneDesc(territory.generalDesc)
  const fixedLine = parsePhoneDesc(territory.fixedLine)
  const mobile = parsePhoneDesc(territory.mobile)
  const voip = parsePhoneDesc(territory.voip)

  // Aggregate possibleLengths from all types into generalDesc
  // (XML doesn't have possibleLengths on generalDesc, only on individual types)
  const allLengths = new Set<number>()
  if (fixedLine?.possibleLengths) {
    fixedLine.possibleLengths.forEach((l) => allLengths.add(l))
  }
  if (mobile?.possibleLengths) {
    mobile.possibleLengths.forEach((l) => allLengths.add(l))
  }
  if (voip?.possibleLengths) {
    voip.possibleLengths.forEach((l) => allLengths.add(l))
  }

  if (generalDesc || allLengths.size > 0) {
    meta.generalDesc = {
      ...generalDesc,
      possibleLengths: allLengths.size > 0 ? [...allLengths].sort((a, b) => a - b) : undefined
    }
    // Clean up undefined possibleLengths
    if (!meta.generalDesc.possibleLengths) {
      delete meta.generalDesc.possibleLengths
    }
  }

  if (fixedLine) meta.fixedLine = fixedLine
  if (mobile) meta.mobile = mobile
  if (voip) meta.voip = voip

  // Formats
  const formats = parseFormats(territory.availableFormats)
  if (formats) meta.formats = formats

  return meta
}

/**
 * Escape special characters in a string for use in a RegExp literal.
 * Converts string escapes (like \\d) to regex escapes (like \d).
 */
function stringToRegexLiteral(pattern: string, anchored: boolean): string {
  // The pattern is stored with double backslashes (for JSON/string),
  // but RegExp literals use single backslashes
  // e.g., "\\d" in string becomes "\d" in /\d/
  const prefix = anchored ? "^" : ""
  const suffix = anchored ? "$" : ""
  return `/${prefix}${pattern}${suffix}/`
}

/**
 * Serialize a PhoneNumberDesc with RegExp literal for pattern
 */
function serializePhoneDesc(desc: PhoneNumberDesc, indent: string): string {
  const lines: string[] = ["{"]
  const innerIndent = indent + "  "

  if (desc.pattern) {
    lines.push(`${innerIndent}pattern: ${stringToRegexLiteral(desc.pattern, true)},`)
  }
  if (desc.example) {
    lines.push(`${innerIndent}example: ${JSON.stringify(desc.example)},`)
  }
  if (desc.possibleLengths) {
    lines.push(`${innerIndent}possibleLengths: ${JSON.stringify(desc.possibleLengths)},`)
  }
  if (desc.possibleLengthsLocalOnly) {
    lines.push(
      `${innerIndent}possibleLengthsLocalOnly: ${JSON.stringify(desc.possibleLengthsLocalOnly)},`
    )
  }

  // Remove trailing comma from last line
  if (lines.length > 1) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "")
  }

  lines.push(`${indent}}`)
  return lines.join("\n")
}

/**
 * Serialize a NumberFormat (patterns stay as strings)
 */
function serializeNumberFormat(fmt: NumberFormat, indent: string): string {
  const lines: string[] = ["{"]
  const innerIndent = indent + "  "

  lines.push(`${innerIndent}pattern: ${JSON.stringify(fmt.pattern)},`)
  lines.push(`${innerIndent}format: ${JSON.stringify(fmt.format)},`)

  if (fmt.leadingDigits && fmt.leadingDigits.length > 0) {
    if (fmt.leadingDigits.length === 1) {
      lines.push(`${innerIndent}leadingDigits: [${JSON.stringify(fmt.leadingDigits[0])}],`)
    } else {
      lines.push(`${innerIndent}leadingDigits: [`)
      for (const ld of fmt.leadingDigits) {
        lines.push(`${innerIndent}  ${JSON.stringify(ld)},`)
      }
      // Remove trailing comma
      lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "")
      lines.push(`${innerIndent}],`)
    }
  }

  if (fmt.nationalPrefixFormattingRule) {
    lines.push(
      `${innerIndent}nationalPrefixFormattingRule: ${JSON.stringify(fmt.nationalPrefixFormattingRule)},`
    )
  }
  if (fmt.domesticCarrierCodeFormattingRule) {
    lines.push(
      `${innerIndent}domesticCarrierCodeFormattingRule: ${JSON.stringify(fmt.domesticCarrierCodeFormattingRule)},`
    )
  }
  if (fmt.nationalPrefixOptional) {
    lines.push(`${innerIndent}nationalPrefixOptional: true,`)
  }

  // Remove trailing comma from last line
  if (lines.length > 1) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "")
  }

  lines.push(`${indent}}`)
  return lines.join("\n")
}

/**
 * Generate TypeScript module for a region with compiled RegExp patterns
 */
function generateRegionModule(meta: RegionMetadata): string {
  const lines: string[] = [
    "/**",
    ` * Phone number metadata for ${meta.regionCode}`,
    ` * Country calling code: +${String(meta.countryCode)}`,
    " *",
    " * Auto-generated from libphonenumber PhoneNumberMetadata.xml",
    " * Do not edit manually.",
    " */",
    "",
    'import type { RegionMetadata } from "../types.js"',
    "",
    "const metadata: RegionMetadata = {"
  ]

  const indent = "  "

  // Simple properties
  lines.push(`${indent}regionCode: ${JSON.stringify(meta.regionCode)},`)
  lines.push(`${indent}countryCode: ${String(meta.countryCode)},`)

  if (meta.internationalPrefix) {
    lines.push(`${indent}internationalPrefix: ${JSON.stringify(meta.internationalPrefix)},`)
  }
  if (meta.nationalPrefix) {
    lines.push(`${indent}nationalPrefix: ${JSON.stringify(meta.nationalPrefix)},`)
  }
  if (meta.nationalPrefixForParsing) {
    lines.push(
      `${indent}nationalPrefixForParsing: ${JSON.stringify(meta.nationalPrefixForParsing)},`
    )
  }
  if (meta.nationalPrefixTransformRule) {
    lines.push(
      `${indent}nationalPrefixTransformRule: ${JSON.stringify(meta.nationalPrefixTransformRule)},`
    )
  }
  if (meta.preferredInternationalPrefix) {
    lines.push(
      `${indent}preferredInternationalPrefix: ${JSON.stringify(meta.preferredInternationalPrefix)},`
    )
  }
  if (meta.mainCountryForCode) {
    lines.push(`${indent}mainCountryForCode: true,`)
  }
  if (meta.leadingDigits) {
    lines.push(`${indent}leadingDigits: ${JSON.stringify(meta.leadingDigits)},`)
  }

  // Phone number descriptions with RegExp patterns
  if (meta.generalDesc) {
    lines.push(`${indent}generalDesc: ${serializePhoneDesc(meta.generalDesc, indent)},`)
  }
  if (meta.fixedLine) {
    lines.push(`${indent}fixedLine: ${serializePhoneDesc(meta.fixedLine, indent)},`)
  }
  if (meta.mobile) {
    lines.push(`${indent}mobile: ${serializePhoneDesc(meta.mobile, indent)},`)
  }
  if (meta.voip) {
    lines.push(`${indent}voip: ${serializePhoneDesc(meta.voip, indent)},`)
  }

  // Formats (patterns stay as strings)
  if (meta.formats && meta.formats.length > 0) {
    lines.push(`${indent}formats: [`)
    for (const fmt of meta.formats) {
      lines.push(`${indent}  ${serializeNumberFormat(fmt, indent + "  ")},`)
    }
    // Remove trailing comma
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, "")
    lines.push(`${indent}]`)
  }

  // Remove trailing comma from last property line (before formats array or last desc)
  const lastPropIndex = lines.length - 1
  if (!lines[lastPropIndex].endsWith("[") && !lines[lastPropIndex].endsWith("]")) {
    lines[lastPropIndex] = lines[lastPropIndex].replace(/,$/, "")
  }

  lines.push("}")
  lines.push("")
  lines.push("export default metadata")
  lines.push("")

  return lines.join("\n")
}

async function main(): Promise<void> {
  console.log("Converting libphonenumber XML metadata to TypeScript...\n")

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  // Read and parse XML
  console.log(`Reading: ${UPSTREAM_XML}`)
  const xmlContent = readFileSync(UPSTREAM_XML, "utf-8")

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    textNodeName: "#text",
    trimValues: true,
    parseTagValue: false,
    parseAttributeValue: false
  })

  const parsed = parser.parse(xmlContent) as {
    phoneNumberMetadata: {
      territories: {
        territory: XMLTerritory[]
      }
    }
  }

  const territories = parsed.phoneNumberMetadata.territories.territory
  console.log(`Found ${String(territories.length)} territories\n`)

  // Build country code to regions mapping
  const countryCodeToRegions: Record<number, string[]> = {}

  // Generate individual country modules
  console.log("Generating country modules...")
  let generated = 0

  for (const territory of territories) {
    try {
      const meta = parseTerritory(territory)

      // Track country code mapping
      if (!countryCodeToRegions[meta.countryCode]) {
        countryCodeToRegions[meta.countryCode] = []
      }
      countryCodeToRegions[meta.countryCode].push(meta.regionCode)

      // Generate and write module
      const code = generateRegionModule(meta)
      const outputPath = join(OUTPUT_DIR, `${meta.regionCode}.ts`)
      writeFileSync(outputPath, code, "utf-8")
      generated++
    } catch (error) {
      console.error(
        `  ✗ ${territory["@_id"]}: ${error instanceof Error ? error.message : "Unknown error"}`
      )
    }
  }

  console.log(`  ✓ Generated ${String(generated)} country modules\n`)

  // Generate country code mapping
  console.log("Generating country code mapping...")

  // Build map entries with numeric keys (JSON.stringify quotes all keys)
  const mapEntries = Object.entries(countryCodeToRegions)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([code, regions]) => `  ${code}: ${JSON.stringify(regions)}`)
    .join(",\n")

  const mappingCode = [
    "/**",
    " * Mapping from country calling code to region codes.",
    " * Auto-generated from libphonenumber PhoneNumberMetadata.xml",
    " */",
    "",
    "export const countryCodeToRegions: Record<number, string[]> = {",
    mapEntries,
    "};",
    ""
  ].join("\n")

  writeFileSync(join(dirname(OUTPUT_DIR), "countryCodeMap.ts"), mappingCode)
  console.log("  ✓ Generated countryCodeMap.ts\n")

  console.log("Metadata conversion complete!")
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
