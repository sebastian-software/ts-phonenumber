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
 * Generate TypeScript module for a region
 */
function generateRegionModule(meta: RegionMetadata): string {
  return [
    "/**",
    ` * Phone number metadata for ${meta.regionCode}`,
    ` * Country calling code: +${String(meta.countryCode)}`,
    " *",
    " * Auto-generated from libphonenumber PhoneNumberMetadata.xml",
    " * Do not edit manually.",
    " */",
    "",
    'import type { RegionMetadata } from "../types.js";',
    "",
    "const metadata: RegionMetadata = " +
      JSON.stringify(meta, null, 2).replace(/"([^"]+)":/g, "$1:") +
      ";",
    "",
    "export default metadata;",
    ""
  ].join("\n")
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
