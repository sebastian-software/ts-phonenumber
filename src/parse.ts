/**
 * Phone number parsing functionality.
 */

import type { ParsedPhoneNumber, ParseOptions } from "./types.js"
import { PhoneNumberType } from "./types.js"
import {
  loadRegionMetadata,
  getRegionsForCountryCode,
  getCachedRegionMetadata,
  getRegionMetadataSync
} from "./metadata/index.js"
import type { RegionMetadata } from "./metadata/index.js"
import {
  alphaToDigit,
  FORMATTING_CHARS_PATTERN,
  PLUS_VARIANTS_PATTERN,
  E164_PATTERN,
  CLEAN_E164_PATTERN,
  COUNTRY_CODE_LENGTHS,
  COUNTRY_CODE_TO_REGIONS
} from "./constants.js"

/**
 * Parses a phone number string into a structured ParsedPhoneNumber object.
 * This is an async function as it may need to load region metadata.
 *
 * @param input - The phone number string to parse
 * @param options - Parsing options including default region
 * @returns The parsed phone number or a result with INVALID type
 */
export async function parse(input: string, options: ParseOptions = {}): Promise<ParsedPhoneNumber> {
  const { defaultRegion } = options

  // Create an invalid result template
  const invalidResult = (rawInput: string): ParsedPhoneNumber => ({
    countryCode: 0,
    nationalNumber: "",
    regionCode: "",
    type: PhoneNumberType.INVALID,
    isValid: false,
    rawInput
  })

  // Normalize input
  const normalized = normalizeInput(input)

  if (!normalized) {
    return invalidResult(input)
  }

  // Check if it's E.164 format
  if (normalized.startsWith("+")) {
    return parseE164(normalized, input)
  }

  // For national format, we need a default region
  if (!defaultRegion) {
    return invalidResult(input)
  }

  return parseNational(normalized, defaultRegion, input)
}

/**
 * Synchronously parses a phone number string.
 * Requires metadata to be pre-loaded via registerMetadata() or preloadRegions().
 *
 * @param input - The phone number string to parse
 * @param options - Parsing options including default region
 * @returns The parsed phone number or a result with INVALID type
 * @throws Error if required metadata is not pre-loaded
 *
 * @example
 * ```typescript
 * // Pre-load metadata first
 * registerMetadata(DE)
 *
 * // Then use sync parsing
 * const result = parseSync("+49 170 1234567")
 * ```
 */
export function parseSync(input: string, options: ParseOptions = {}): ParsedPhoneNumber {
  const { defaultRegion } = options

  // Create an invalid result template
  const invalidResult = (rawInput: string): ParsedPhoneNumber => ({
    countryCode: 0,
    nationalNumber: "",
    regionCode: "",
    type: PhoneNumberType.INVALID,
    isValid: false,
    rawInput
  })

  // Normalize input
  const normalized = normalizeInput(input)

  if (!normalized) {
    return invalidResult(input)
  }

  // Check if it's E.164 format
  if (normalized.startsWith("+")) {
    return parseE164Sync(normalized, input)
  }

  // For national format, we need a default region
  if (!defaultRegion) {
    return invalidResult(input)
  }

  return parseNationalSync(normalized, defaultRegion, input)
}

/**
 * Normalizes phone number input by removing formatting characters.
 * Handles RFC3966 tel: URIs with phone-context parameter.
 */
function normalizeInput(input: string): string {
  if (!input || typeof input !== "string") {
    return ""
  }

  // Fast path: clean E.164 numbers (most common case)
  // Avoids all the expensive string operations below
  if (CLEAN_E164_PATTERN.test(input)) {
    return input
  }

  // Trim and work with the input
  let normalized = input.trim()

  // Fast path after trim
  if (CLEAN_E164_PATTERN.test(normalized)) {
    return normalized
  }

  // Handle tel: URI prefix (check first char for speed)
  if (normalized.charCodeAt(0) === 116 || normalized.charCodeAt(0) === 84) {
    // 't' or 'T'
    if (normalized.slice(0, 4).toLowerCase() === "tel:") {
      normalized = normalized.slice(4)
    }
  }

  // Extract and handle RFC3966 phone-context parameter
  // Format: tel:local-number;phone-context=+global-prefix
  // Or: tel:local-number;phone-context=domain.example
  const phoneContextResult = extractPhoneContext(normalized)
  normalized = phoneContextResult.number
  const phoneContext = phoneContextResult.phoneContext

  // Strip other URI parameters (isub, etc.)
  const semicolonIdx = normalized.indexOf(";")
  if (semicolonIdx > 0) {
    normalized = normalized.slice(0, semicolonIdx)
  }

  // Replace full-width plus and other unicode variants with regular +
  normalized = normalized.replace(PLUS_VARIANTS_PATTERN, "+")

  // Handle ++ prefix (strip to single +)
  if (normalized.startsWith("++")) {
    normalized = normalized.slice(1)
  }

  // If we have a phone-context that's a global number and local number doesn't have +,
  // combine them according to RFC3966
  if (phoneContext && !normalized.startsWith("+")) {
    // phoneContext should be a global phone number prefix
    // Combine: phone-context + local-number
    const contextDigits = phoneContext.replace(FORMATTING_CHARS_PATTERN, "")
    const localDigits = normalized.replace(FORMATTING_CHARS_PATTERN, "")
    normalized = contextDigits + localDigits
  }

  // Convert alpha characters to digits (vanity numbers)
  normalized = normalized.replace(/[A-Za-z]/g, alphaToDigit)

  // Remove common formatting characters
  normalized = normalized.replace(FORMATTING_CHARS_PATTERN, "")

  // Handle IDD prefix (00 → +) for international dialing
  // Common in Europe and many other countries
  if (normalized.startsWith("00") && normalized.length > 4) {
    normalized = "+" + normalized.slice(2)
  }

  // Handle extensions (strip for now)
  const extRegex = /^(.+?)(?:ext\.?|x|#)\d+$/i
  const extMatch = extRegex.exec(normalized)
  if (extMatch?.[1]) {
    normalized = extMatch[1]
  }

  return normalized
}

/**
 * Extracts phone-context parameter from RFC3966 tel: URI.
 * Returns the number without phone-context and the extracted context.
 */
function extractPhoneContext(input: string): { number: string; phoneContext?: string } {
  // Match phone-context parameter
  // Can be: phone-context=+1-234 (global) or phone-context=example.com (domain)
  const phoneContextMatch = /;phone-context=([^;]+)/i.exec(input)

  const phoneContext = phoneContextMatch?.[1]
  if (!phoneContext) {
    return { number: input }
  }

  // Remove phone-context from the string
  const number = input.replace(/;phone-context=[^;]+/i, "")

  // Only use phone-context if it's a global phone number (starts with +)
  // Domain contexts are for private numbering plans and we ignore them
  if (phoneContext.startsWith("+")) {
    return { number, phoneContext }
  }

  // Domain phone-context - just return the number without it
  return { number }
}

/**
 * Parses a phone number in E.164 format.
 */
async function parseE164(normalized: string, rawInput: string): Promise<ParsedPhoneNumber> {
  const invalidResult: ParsedPhoneNumber = {
    countryCode: 0,
    nationalNumber: "",
    regionCode: "",
    type: PhoneNumberType.INVALID,
    isValid: false,
    rawInput
  }

  // Validate basic E.164 format
  if (!E164_PATTERN.test(normalized)) {
    return invalidResult
  }

  // Extract country code (try 1, 2, 3 digit codes)
  const withoutPlus = normalized.slice(1)

  for (const length of COUNTRY_CODE_LENGTHS) {
    const potentialCode = parseInt(withoutPlus.slice(0, length), 10)
    const nationalNumber = withoutPlus.slice(length)

    // Try to find a region for this country code
    const regions = getRegionsForCountryCode(potentialCode)

    if (regions && regions.length > 0) {
      // Try each region to find a match
      for (const regionCode of regions) {
        const metadata = await loadRegionMetadata(regionCode)
        if (metadata) {
          const type = determineType(nationalNumber, metadata)
          if (type !== PhoneNumberType.INVALID) {
            return {
              countryCode: potentialCode,
              nationalNumber,
              regionCode,
              type,
              isValid: true,
              rawInput
            }
          }
        }
      }
    }

    // If no cached regions, try loading common regions for this code
    const possibleRegions = await findRegionsForCountryCode(potentialCode)
    if (possibleRegions.length > 0) {
      for (const regionCode of possibleRegions) {
        const metadata = await loadRegionMetadata(regionCode)
        if (metadata?.countryCode === potentialCode) {
          const type = determineType(nationalNumber, metadata)
          if (type !== PhoneNumberType.INVALID) {
            return {
              countryCode: potentialCode,
              nationalNumber,
              regionCode,
              type,
              isValid: true,
              rawInput
            }
          }
        }
      }
    }
  }

  return invalidResult
}

/**
 * Parses a phone number in national format.
 */
async function parseNational(
  normalized: string,
  defaultRegion: string,
  rawInput: string
): Promise<ParsedPhoneNumber> {
  const metadata = await loadRegionMetadata(defaultRegion)

  const invalidResult: ParsedPhoneNumber = {
    countryCode: 0,
    nationalNumber: "",
    regionCode: "",
    type: PhoneNumberType.INVALID,
    isValid: false,
    rawInput
  }

  /* v8 ignore next 3 - metadata should always be loaded at this point */
  if (!metadata) {
    return invalidResult
  }

  let nationalNumber = normalized

  // Strip national prefix if present
  if (metadata.nationalPrefix && normalized.startsWith(metadata.nationalPrefix)) {
    nationalNumber = normalized.slice(metadata.nationalPrefix.length)
  }

  // Determine the type
  const type = determineType(nationalNumber, metadata)

  if (type === PhoneNumberType.INVALID) {
    return invalidResult
  }

  return {
    countryCode: metadata.countryCode,
    nationalNumber,
    regionCode: metadata.regionCode,
    type,
    isValid: true,
    rawInput
  }
}

/**
 * Synchronously parses a phone number in E.164 format.
 * Uses only cached metadata - does not load metadata on demand.
 */
function parseE164Sync(normalized: string, rawInput: string): ParsedPhoneNumber {
  const invalidResult: ParsedPhoneNumber = {
    countryCode: 0,
    nationalNumber: "",
    regionCode: "",
    type: PhoneNumberType.INVALID,
    isValid: false,
    rawInput
  }

  // Validate basic E.164 format
  if (!E164_PATTERN.test(normalized)) {
    return invalidResult
  }

  // Extract country code (try 1, 2, 3 digit codes)
  const withoutPlus = normalized.slice(1)

  for (const length of COUNTRY_CODE_LENGTHS) {
    const potentialCode = parseInt(withoutPlus.slice(0, length), 10)
    const nationalNumber = withoutPlus.slice(length)

    // Try to find a region for this country code
    const regions = getRegionsForCountryCode(potentialCode)

    if (regions && regions.length > 0) {
      // Try each region to find a match (only check cached metadata)
      for (const regionCode of regions) {
        const metadata = getCachedRegionMetadata(regionCode)
        if (metadata) {
          const type = determineType(nationalNumber, metadata)
          if (type !== PhoneNumberType.INVALID) {
            return {
              countryCode: potentialCode,
              nationalNumber,
              regionCode,
              type,
              isValid: true,
              rawInput
            }
          }
        }
      }
    }
  }

  return invalidResult
}

/**
 * Synchronously parses a phone number in national format.
 * Uses getRegionMetadataSync which throws if metadata isn't loaded.
 */
function parseNationalSync(
  normalized: string,
  defaultRegion: string,
  rawInput: string
): ParsedPhoneNumber {
  const metadata = getRegionMetadataSync(defaultRegion)

  let nationalNumber = normalized

  // Strip national prefix if present
  if (metadata.nationalPrefix && normalized.startsWith(metadata.nationalPrefix)) {
    nationalNumber = normalized.slice(metadata.nationalPrefix.length)
  }

  // Determine the type
  const type = determineType(nationalNumber, metadata)

  if (type === PhoneNumberType.INVALID) {
    return {
      countryCode: 0,
      nationalNumber: "",
      regionCode: "",
      type: PhoneNumberType.INVALID,
      isValid: false,
      rawInput
    }
  }

  return {
    countryCode: metadata.countryCode,
    nationalNumber,
    regionCode: metadata.regionCode,
    type,
    isValid: true,
    rawInput
  }
}

/**
 * Determines the phone number type based on metadata patterns.
 * Patterns are pre-compiled RegExp objects for maximum performance.
 */
function determineType(nationalNumber: string, metadata: RegionMetadata): PhoneNumberType {
  // Check mobile pattern (RegExp is pre-compiled in metadata)
  if (metadata.mobile?.pattern?.test(nationalNumber)) {
    return PhoneNumberType.MOBILE
  }

  // Check fixed line pattern
  if (metadata.fixedLine?.pattern?.test(nationalNumber)) {
    return PhoneNumberType.LANDLINE
  }

  // Check VoIP pattern
  /* v8 ignore next 3 - VoIP patterns vary by region, not all have VoIP definitions */
  if (metadata.voip?.pattern?.test(nationalNumber)) {
    return PhoneNumberType.VOIP
  }

  return PhoneNumberType.INVALID
}

/**
 * Attempts to find region codes for a country calling code.
 * Uses the shared COUNTRY_CODE_TO_REGIONS mapping.
 */
async function findRegionsForCountryCode(countryCode: number): Promise<readonly string[]> {
  const regions = COUNTRY_CODE_TO_REGIONS[countryCode]
  if (regions) {
    // Preload the regions
    for (const region of regions) {
      await loadRegionMetadata(region)
    }
    return regions
  }

  return []
}
