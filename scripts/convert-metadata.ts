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
const BUNDLES_DIR = join(ROOT_DIR, "src/metadata/bundles")

/**
 * Bundle definitions for common market groupings.
 * Each bundle contains countries that are typically used together.
 */
const BUNDLE_DEFINITIONS: Record<string, { description: string; regions: string[] }> = {
  // Regional European bundles
  DACH: {
    description: "German-speaking countries (Germany, Austria, Switzerland)",
    regions: ["DE", "AT", "CH"]
  },
  NORDICS: {
    description: "Nordic countries (Denmark, Finland, Iceland, Norway, Sweden)",
    regions: ["DK", "FI", "IS", "NO", "SE"]
  },
  BENELUX: {
    description: "Benelux countries (Belgium, Netherlands, Luxembourg)",
    regions: ["BE", "NL", "LU"]
  },
  BRITISH_ISLES: {
    description: "British Isles (UK, Ireland, Channel Islands, Isle of Man)",
    regions: ["GB", "IE", "GG", "JE", "IM"]
  },

  // Large regional bundles
  EU: {
    description: "European Union member states (27 countries)",
    regions: [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE"
    ]
  },
  EUROPE: {
    description: "All European countries including non-EU",
    regions: [
      // EU countries
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
      // Non-EU European
      "GB",
      "CH",
      "NO",
      "IS",
      "LI",
      "AD",
      "MC",
      "SM",
      "VA",
      "AL",
      "BA",
      "ME",
      "MK",
      "RS",
      "XK",
      "MD",
      "UA",
      "BY"
    ]
  },

  // Americas
  NANP: {
    description: "North American Numbering Plan (US, Canada, Caribbean)",
    regions: [
      "US",
      "CA",
      "PR",
      "VI",
      "GU",
      "AS",
      "MP",
      // Caribbean NANP members
      "AG",
      "AI",
      "BB",
      "BM",
      "BS",
      "DM",
      "DO",
      "GD",
      "JM",
      "KN",
      "KY",
      "LC",
      "MS",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG"
    ]
  },
  LATAM: {
    description: "Latin America (Central & South America)",
    regions: [
      "MX",
      "GT",
      "BZ",
      "HN",
      "SV",
      "NI",
      "CR",
      "PA",
      "CO",
      "VE",
      "EC",
      "PE",
      "BO",
      "BR",
      "PY",
      "UY",
      "AR",
      "CL",
      "CU",
      "HT",
      "GY",
      "SR",
      "GF"
    ]
  },

  // Asia-Pacific
  APAC: {
    description: "Asia-Pacific major markets",
    regions: [
      "JP",
      "KR",
      "CN",
      "HK",
      "TW",
      "MO",
      "AU",
      "NZ",
      "SG",
      "MY",
      "TH",
      "ID",
      "PH",
      "VN",
      "IN",
      "PK",
      "BD",
      "LK"
    ]
  },
  EAST_ASIA: {
    description: "East Asian markets (China, Japan, Korea, Taiwan)",
    regions: ["CN", "JP", "KR", "TW", "HK", "MO"]
  },
  SOUTHEAST_ASIA: {
    description: "Southeast Asian markets",
    regions: ["SG", "MY", "TH", "ID", "PH", "VN", "MM", "KH", "LA", "BN"]
  },
  ANZ: {
    description: "Australia and New Zealand",
    regions: ["AU", "NZ"]
  },

  // Middle East & Africa
  MENA: {
    description: "Middle East and North Africa",
    regions: [
      "AE",
      "SA",
      "QA",
      "KW",
      "BH",
      "OM",
      "JO",
      "LB",
      "IL",
      "PS",
      "EG",
      "MA",
      "DZ",
      "TN",
      "LY",
      "IQ",
      "SY",
      "YE"
    ]
  },
  GCC: {
    description: "Gulf Cooperation Council",
    regions: ["AE", "SA", "QA", "KW", "BH", "OM"]
  },

  // Economic groupings
  G7: {
    description: "Group of Seven major economies",
    regions: ["US", "GB", "DE", "FR", "JP", "IT", "CA"]
  },
  G20: {
    description: "Group of Twenty major economies",
    regions: [
      "US",
      "GB",
      "DE",
      "FR",
      "JP",
      "IT",
      "CA", // G7
      "CN",
      "IN",
      "BR",
      "RU",
      "AU",
      "KR",
      "MX",
      "ID",
      "SA",
      "TR",
      "AR",
      "ZA"
      // EU is also G20 member but represented by individual countries
    ]
  },
  BRICS: {
    description: "BRICS emerging economies",
    regions: ["BR", "RU", "IN", "CN", "ZA"]
  },

  // Practical bundles for common use cases
  COMMON: {
    description: "Most commonly used countries worldwide (top 30 by usage)",
    regions: [
      "US",
      "GB",
      "DE",
      "FR",
      "IT",
      "ES",
      "NL",
      "BE",
      "AT",
      "CH",
      "CA",
      "AU",
      "JP",
      "KR",
      "CN",
      "IN",
      "BR",
      "MX",
      "RU",
      "PL",
      "SE",
      "NO",
      "DK",
      "FI",
      "IE",
      "PT",
      "GR",
      "CZ",
      "RO",
      "HU"
    ]
  },
  MINIMAL: {
    description: "Minimal set for basic international support",
    regions: ["US", "GB", "DE", "FR", "ES", "IT", "CA", "AU", "JP", "CN", "IN", "BR"]
  }
}

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
 *
 * @param pattern - The regex pattern string
 * @param anchored - If true, anchors pattern with ^ and $ (full match)
 * @param prefixOnly - If true, only adds ^ anchor (prefix match, for leadingDigits)
 */
function stringToRegexLiteral(pattern: string, anchored: boolean, prefixOnly = false): string {
  // The pattern is stored with double backslashes (for JSON/string),
  // but RegExp literals use single backslashes
  // e.g., "\\d" in string becomes "\d" in /\d/
  const prefix = anchored || prefixOnly ? "^" : ""
  const suffix = anchored ? "$" : ""
  return `/${prefix}${pattern}${suffix}/`
}

/**
 * Convert an array of lengths to a bitmap.
 * Each bit position represents whether that length is valid.
 *
 * @example lengthsToBitmap([7, 8, 9]) => 896 (0b1110000000)
 */
function lengthsToBitmap(lengths: number[]): number {
  let bitmap = 0
  for (const len of lengths) {
    bitmap |= 1 << len
  }
  return bitmap
}

/**
 * Serialize a PhoneNumberDesc with RegExp literal for pattern
 * and bitmap for possibleLengths
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
    const bitmap = lengthsToBitmap(desc.possibleLengths)
    // Add comment showing which lengths the bitmap represents
    lines.push(
      `${innerIndent}possibleLengths: ${bitmap}, // bits: ${desc.possibleLengths.join(",")}`
    )
  }
  if (desc.possibleLengthsLocalOnly) {
    const bitmap = lengthsToBitmap(desc.possibleLengthsLocalOnly)
    lines.push(
      `${innerIndent}possibleLengthsLocalOnly: ${bitmap} // bits: ${desc.possibleLengthsLocalOnly.join(",")}`
    )
  }

  // Remove trailing comma from last line (but keep comments)
  if (lines.length > 1) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/,(\s*\/\/.*)$/, "$1")
  }

  lines.push(`${indent}}`)
  return lines.join("\n")
}

/**
 * Serialize a NumberFormat with pattern and leadingDigits as RegExp
 */
function serializeNumberFormat(fmt: NumberFormat, indent: string): string {
  const lines: string[] = ["{"]
  const innerIndent = indent + "  "

  // Pattern is anchored RegExp with capture groups for .replace()
  lines.push(`${innerIndent}pattern: ${stringToRegexLiteral(fmt.pattern, true)},`)
  lines.push(`${innerIndent}format: ${JSON.stringify(fmt.format)},`)

  // leadingDigits: combine multiple patterns into single RegExp with |
  if (fmt.leadingDigits && fmt.leadingDigits.length > 0) {
    if (fmt.leadingDigits.length === 1) {
      lines.push(
        `${innerIndent}leadingDigits: ${stringToRegexLiteral(fmt.leadingDigits[0], false, true)},`
      )
    } else {
      // Combine patterns: [/^1/, /^2/] → /^(?:1|2)/
      const combined = `(?:${fmt.leadingDigits.join("|")})`
      lines.push(`${innerIndent}leadingDigits: ${stringToRegexLiteral(combined, false, true)},`)
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
    lines.push(`${indent}leadingDigits: ${stringToRegexLiteral(meta.leadingDigits, false, true)},`)
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

/**
 * Generate an inline bundle with all metadata embedded directly.
 * This creates a single file that can be loaded with one HTTP request.
 */
function generateInlineBundle(
  bundleName: string,
  description: string,
  regionCodes: string[],
  allMetadata: Map<string, RegionMetadata>,
  countryCodeToRegions: Record<number, string[]>
): string {
  const lines: string[] = [
    "/**",
    ` * ${bundleName} - ${description}`,
    ` * Regions: ${regionCodes.join(", ")}`,
    " *",
    " * Auto-generated bundle with inline metadata.",
    " * Do not edit manually.",
    " */",
    "",
    'import type { MetadataBundle } from "../types.js"',
    "",
    "const bundle: MetadataBundle = {",
    "  regions: {"
  ]

  // Add each region's metadata inline
  for (const regionCode of regionCodes) {
    const meta = allMetadata.get(regionCode)
    if (!meta) {
      console.warn(`  ⚠ Region ${regionCode} not found, skipping`)
      continue
    }

    lines.push(`    ${regionCode}: ${serializeRegionMetadata(meta, "    ")},`)
  }

  // Remove trailing comma from last region
  if (lines[lines.length - 1].endsWith(",")) {
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1)
  }

  lines.push("  },")

  // Build countryCodeToRegions for this bundle only
  const bundleCountryCodes: Record<number, string[]> = {}
  for (const regionCode of regionCodes) {
    const meta = allMetadata.get(regionCode)
    if (meta) {
      if (!bundleCountryCodes[meta.countryCode]) {
        bundleCountryCodes[meta.countryCode] = []
      }
      bundleCountryCodes[meta.countryCode].push(regionCode)
    }
  }

  lines.push("  countryCodeToRegions: {")
  const sortedCodes = Object.keys(bundleCountryCodes)
    .map(Number)
    .sort((a, b) => a - b)
  for (const code of sortedCodes) {
    lines.push(`    ${code}: ${JSON.stringify(bundleCountryCodes[code])},`)
  }
  // Remove trailing comma
  if (lines[lines.length - 1].endsWith(",")) {
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1)
  }
  lines.push("  }")

  lines.push("}")
  lines.push("")
  lines.push("export default bundle")
  lines.push("")

  return lines.join("\n")
}

/**
 * Serialize a complete RegionMetadata object for inline embedding
 */
function serializeRegionMetadata(meta: RegionMetadata, baseIndent: string): string {
  const lines: string[] = ["{"]
  const indent = baseIndent + "  "

  // Simple properties
  lines.push(`${indent}regionCode: ${JSON.stringify(meta.regionCode)},`)
  lines.push(`${indent}countryCode: ${meta.countryCode},`)

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
    lines.push(`${indent}leadingDigits: ${stringToRegexLiteral(meta.leadingDigits, false, true)},`)
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
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1)
    lines.push(`${indent}]`)
  }

  // Remove trailing comma from last property
  const lastIdx = lines.length - 1
  if (lines[lastIdx].endsWith(",")) {
    lines[lastIdx] = lines[lastIdx].slice(0, -1)
  }

  lines.push(`${baseIndent}}`)
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

  // Generate inline bundles
  console.log("Generating inline bundles...")

  // Ensure bundles directory exists
  if (!existsSync(BUNDLES_DIR)) {
    mkdirSync(BUNDLES_DIR, { recursive: true })
  }

  // Collect all metadata for bundle generation
  const allMetadata = new Map<string, RegionMetadata>()
  for (const territory of territories) {
    try {
      const meta = parseTerritory(territory)
      allMetadata.set(meta.regionCode, meta)
    } catch {
      // Skip territories that failed to parse
    }
  }

  let bundlesGenerated = 0
  const bundleSizes: { name: string; regions: number; size: number; gzipped: number }[] = []

  for (const [bundleName, bundleDef] of Object.entries(BUNDLE_DEFINITIONS)) {
    const bundleCode = generateInlineBundle(
      bundleName,
      bundleDef.description,
      bundleDef.regions,
      allMetadata,
      countryCodeToRegions
    )

    const outputPath = join(BUNDLES_DIR, `${bundleName}.ts`)
    writeFileSync(outputPath, bundleCode, "utf-8")
    bundlesGenerated++

    // Calculate sizes
    const size = Buffer.byteLength(bundleCode, "utf-8")
    // Rough gzip estimate (actual compression varies)
    const gzipped = Math.round(size * 0.25) // ~75% compression typical

    bundleSizes.push({
      name: bundleName,
      regions: bundleDef.regions.length,
      size,
      gzipped
    })
  }

  console.log(`  ✓ Generated ${bundlesGenerated} bundles\n`)

  // Print bundle size summary
  console.log("Bundle sizes:")
  console.log(
    "  " +
      "Bundle".padEnd(16) +
      "Regions".padStart(8) +
      "Size".padStart(10) +
      "~Gzipped".padStart(10)
  )
  console.log("  " + "-".repeat(44))

  for (const b of bundleSizes.sort((a, b) => b.size - a.size)) {
    const sizeKB = (b.size / 1024).toFixed(1) + " KB"
    const gzipKB = (b.gzipped / 1024).toFixed(1) + " KB"
    console.log(
      "  " +
        b.name.padEnd(16) +
        String(b.regions).padStart(8) +
        sizeKB.padStart(10) +
        gzipKB.padStart(10)
    )
  }

  console.log("\nMetadata conversion complete!")
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
