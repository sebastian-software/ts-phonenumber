/**
 * Phone number validation functionality.
 */

import type { ParseOptions, ValidationResult, ParsedPhoneNumber } from "./types.js"
import { PhoneNumberType } from "./types.js"
import { parse, parseSync } from "./parse.js"
import { loadRegionMetadata, getRegionsForCountryCode } from "./metadata/index.js"

/**
 * Validates a phone number and returns detailed validation results.
 * Only LANDLINE, MOBILE, and VOIP numbers are considered valid.
 *
 * @param input - The phone number string to validate
 * @param options - Parsing options including default region
 * @returns Validation result with validity status and detected type
 */
export async function validate(
  input: string,
  options: ParseOptions = {}
): Promise<ValidationResult> {
  if (!input || typeof input !== "string") {
    return {
      isValid: false,
      type: PhoneNumberType.INVALID,
      error: "Input must be a non-empty string"
    }
  }

  try {
    const parsed = await parse(input, options)

    if (!parsed.isValid || parsed.type === PhoneNumberType.INVALID) {
      return {
        isValid: false,
        type: PhoneNumberType.INVALID,
        error: "Number does not match any valid pattern for the region"
      }
    }

    // Only LANDLINE, MOBILE, and VOIP are valid types
    const validTypes = [PhoneNumberType.LANDLINE, PhoneNumberType.MOBILE, PhoneNumberType.VOIP]

    if (!validTypes.includes(parsed.type)) {
      return {
        isValid: false,
        type: PhoneNumberType.INVALID,
        error: "Number type is not supported (only LANDLINE, MOBILE, VOIP are valid)"
      }
    }

    return {
      isValid: true,
      type: parsed.type
    }
  } catch (error) {
    return {
      isValid: false,
      type: PhoneNumberType.INVALID,
      error: error instanceof Error ? error.message : "Unknown validation error"
    }
  }
}

/**
 * Simple validation check returning a boolean.
 * This is a convenience wrapper around validate().
 *
 * @param input - The phone number string to validate
 * @param options - Parsing options including default region
 * @returns True if the number is valid, false otherwise
 */
export async function isValidNumber(input: string, options: ParseOptions = {}): Promise<boolean> {
  const result = await validate(input, options)
  return result.isValid
}

/**
 * Synchronously validates a phone number and returns detailed validation results.
 * Requires metadata to be pre-loaded via registerMetadata() or preloadRegions().
 *
 * @param input - The phone number string to validate
 * @param options - Parsing options including default region
 * @returns Validation result with validity status and detected type
 *
 * @example
 * ```typescript
 * // Pre-load metadata first
 * registerMetadata(DE)
 *
 * // Then use sync validation
 * const result = validateSync("+49 170 1234567")
 * if (result.isValid) {
 *   console.log("Valid number of type:", result.type)
 * }
 * ```
 */
export function validateSync(input: string, options: ParseOptions = {}): ValidationResult {
  if (!input || typeof input !== "string") {
    return {
      isValid: false,
      type: PhoneNumberType.INVALID,
      error: "Input must be a non-empty string"
    }
  }

  try {
    const parsed = parseSync(input, options)

    if (!parsed.isValid || parsed.type === PhoneNumberType.INVALID) {
      return {
        isValid: false,
        type: PhoneNumberType.INVALID,
        error: "Number does not match any valid pattern for the region"
      }
    }

    // Only LANDLINE, MOBILE, and VOIP are valid types
    const validTypes = [PhoneNumberType.LANDLINE, PhoneNumberType.MOBILE, PhoneNumberType.VOIP]

    if (!validTypes.includes(parsed.type)) {
      return {
        isValid: false,
        type: PhoneNumberType.INVALID,
        error: "Number type is not supported (only LANDLINE, MOBILE, VOIP are valid)"
      }
    }

    return {
      isValid: true,
      type: parsed.type
    }
  } catch (error) {
    return {
      isValid: false,
      type: PhoneNumberType.INVALID,
      error: error instanceof Error ? error.message : "Unknown validation error"
    }
  }
}

/**
 * Simple synchronous validation check returning a boolean.
 * Requires metadata to be pre-loaded via registerMetadata() or preloadRegions().
 *
 * @param input - The phone number string to validate
 * @param options - Parsing options including default region
 * @returns True if the number is valid, false otherwise
 */
export function isValidNumberSync(input: string, options: ParseOptions = {}): boolean {
  const result = validateSync(input, options)
  return result.isValid
}

/**
 * Possible number validation result.
 */
export enum PossibleNumberResult {
  /** The number is possible (correct length for the region) */
  IS_POSSIBLE = "IS_POSSIBLE",
  /** The number is too short for the region */
  TOO_SHORT = "TOO_SHORT",
  /** The number is too long for the region */
  TOO_LONG = "TOO_LONG",
  /** The country code is invalid or unknown */
  INVALID_COUNTRY_CODE = "INVALID_COUNTRY_CODE",
  /** The input is not a valid phone number format */
  INVALID_FORMAT = "INVALID_FORMAT"
}

/**
 * Quick validation to check if a number could possibly be valid.
 * Only checks length constraints, not full pattern matching.
 * Much faster than isValidNumber() - useful for real-time input validation.
 *
 * @param input - The phone number string or ParsedPhoneNumber to check
 * @param options - Parsing options including default region
 * @returns PossibleNumberResult indicating if the number is possible
 *
 * @example
 * ```typescript
 * // Quick feedback while user types
 * const result = await isPossibleNumber("+49 170 123");
 * if (result === PossibleNumberResult.TOO_SHORT) {
 *   showHint("Number is too short");
 * }
 * ```
 */
export async function isPossibleNumber(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<PossibleNumberResult> {
  let countryCode: number
  let nationalNumber: string

  if (typeof input === "string") {
    // Quick extraction without full parsing
    const extracted = await extractNumberComponents(input, options)
    if (!extracted) {
      return PossibleNumberResult.INVALID_FORMAT
    }
    countryCode = extracted.countryCode
    nationalNumber = extracted.nationalNumber
  } else {
    // Already parsed
    if (input.countryCode === 0) {
      return PossibleNumberResult.INVALID_COUNTRY_CODE
    }
    countryCode = input.countryCode
    nationalNumber = input.nationalNumber
  }

  // Get possible lengths for this country code
  const possibleLengths = await getPossibleLengths(countryCode)

  if (!possibleLengths || possibleLengths.length === 0) {
    return PossibleNumberResult.INVALID_COUNTRY_CODE
  }

  const nsnLength = nationalNumber.length
  const minLength = Math.min(...possibleLengths)
  const maxLength = Math.max(...possibleLengths)

  if (nsnLength < minLength) {
    return PossibleNumberResult.TOO_SHORT
  }

  if (nsnLength > maxLength) {
    return PossibleNumberResult.TOO_LONG
  }

  return PossibleNumberResult.IS_POSSIBLE
}

/**
 * Simple boolean check if a number is possible.
 * Convenience wrapper around isPossibleNumber().
 *
 * @param input - The phone number string or ParsedPhoneNumber
 * @param options - Parsing options including default region
 * @returns True if the number could possibly be valid
 */
export async function isPossibleNumberWithReason(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<boolean> {
  const result = await isPossibleNumber(input, options)
  return result === PossibleNumberResult.IS_POSSIBLE
}

/**
 * Extracts country code and national number from input without full validation.
 */
async function extractNumberComponents(
  input: string,
  options: ParseOptions
): Promise<{ countryCode: number; nationalNumber: string } | null> {
  // Normalize input
  let normalized = input.trim()

  // Handle tel: URI
  if (normalized.toLowerCase().startsWith("tel:")) {
    normalized = normalized.slice(4)
  }

  // Strip parameters
  const semicolonIdx = normalized.indexOf(";")
  if (semicolonIdx > 0) {
    normalized = normalized.slice(0, semicolonIdx)
  }

  // Replace unicode plus variants
  normalized = normalized.replace(/[\uFF0B]/g, "+")

  // Remove formatting
  normalized = normalized.replace(/[\s\-.()/\u200B\u00A0\u00AD]/g, "")

  // Convert alpha to digits
  const alphaMap: Record<string, string> = {
    A: "2",
    B: "2",
    C: "2",
    D: "3",
    E: "3",
    F: "3",
    G: "4",
    H: "4",
    I: "4",
    J: "5",
    K: "5",
    L: "5",
    M: "6",
    N: "6",
    O: "6",
    P: "7",
    Q: "7",
    R: "7",
    S: "7",
    T: "8",
    U: "8",
    V: "8",
    W: "9",
    X: "9",
    Y: "9",
    Z: "9"
  }
  normalized = normalized.replace(/[A-Za-z]/g, (c) => alphaMap[c.toUpperCase()] ?? c)

  // Extract digits
  const digits = normalized.replace(/[^\d+]/g, "")

  if (digits.length < 3) {
    return null
  }

  // E.164 format
  if (digits.startsWith("+")) {
    const withoutPlus = digits.slice(1)
    // Try 1, 2, 3 digit country codes
    for (const len of [1, 2, 3]) {
      if (withoutPlus.length < len + 1) continue
      const potentialCC = parseInt(withoutPlus.slice(0, len), 10)
      const regions = getRegionsForCountryCode(potentialCC)

      if (regions && regions.length > 0) {
        return {
          countryCode: potentialCC,
          nationalNumber: withoutPlus.slice(len)
        }
      }

      // Try loading metadata for common codes
      const metadata = await tryLoadForCountryCode(potentialCC)
      if (metadata) {
        return {
          countryCode: potentialCC,
          nationalNumber: withoutPlus.slice(len)
        }
      }
    }
    return null
  }

  // National format - need default region
  if (!options.defaultRegion) {
    return null
  }

  const metadata = await loadRegionMetadata(options.defaultRegion)
  if (!metadata) {
    return null
  }

  let nationalNumber = digits

  // Strip national prefix if present
  if (metadata.nationalPrefix && digits.startsWith(metadata.nationalPrefix)) {
    nationalNumber = digits.slice(metadata.nationalPrefix.length)
  }

  return {
    countryCode: metadata.countryCode,
    nationalNumber
  }
}

/**
 * Gets possible lengths for a country code from metadata.
 */
async function getPossibleLengths(countryCode: number): Promise<number[] | null> {
  const regions = getRegionsForCountryCode(countryCode)

  const firstRegion = regions?.[0]
  if (firstRegion) {
    const metadata = await loadRegionMetadata(firstRegion)
    if (metadata?.generalDesc?.possibleLengths) {
      return metadata.generalDesc.possibleLengths
    }
  }

  // Try common country codes
  /* v8 ignore next 5 - fallback for uncommon country codes */
  const metadata = await tryLoadForCountryCode(countryCode)
  if (metadata?.generalDesc?.possibleLengths) {
    return metadata.generalDesc.possibleLengths
  }

  return null
}

/**
 * Tries to load metadata for a country code by trying common regions.
 */
async function tryLoadForCountryCode(countryCode: number) {
  const commonMappings: Record<number, string> = {
    1: "US",
    7: "RU",
    20: "EG",
    27: "ZA",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    40: "RO",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    51: "PE",
    52: "MX",
    53: "CU",
    54: "AR",
    55: "BR",
    56: "CL",
    57: "CO",
    58: "VE",
    60: "MY",
    61: "AU",
    62: "ID",
    63: "PH",
    64: "NZ",
    65: "SG",
    66: "TH",
    81: "JP",
    82: "KR",
    84: "VN",
    86: "CN",
    90: "TR",
    91: "IN",
    92: "PK",
    93: "AF",
    94: "LK",
    95: "MM",
    98: "IR"
  }

  const region = commonMappings[countryCode]
  /* v8 ignore next 4 - common mappings cover most use cases */
  if (region) {
    return loadRegionMetadata(region)
  }
  return null
}
