/**
 * Phone number validation functionality.
 */

import type { ParseOptions, ValidationResult, ParsedPhoneNumber } from "./types.js"
import { parse, parseSync } from "./parse.js"
import { loadRegionMetadata, getRegionsForCountryCode } from "./metadata/index.js"
import { getMinLength, getMaxLength } from "./lengthBitmap.js"
import {
  alphaToDigit,
  FORMATTING_CHARS_PATTERN,
  PLUS_VARIANTS_PATTERN,
  COUNTRY_CODE_LENGTHS,
  getMainRegionForCode
} from "./constants.js"

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
      type: "invalid",
      error: "Input must be a non-empty string"
    }
  }

  try {
    const parsed = await parse(input, options)

    if (!parsed.isValid || parsed.type === "invalid") {
      return {
        isValid: false,
        type: "invalid",
        error: "Number does not match any valid pattern for the region"
      }
    }

    // Only LANDLINE, MOBILE, and VOIP are valid types
    const validTypes = ["landline", "mobile", "voip"]

    if (!validTypes.includes(parsed.type)) {
      return {
        isValid: false,
        type: "invalid",
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
      type: "invalid",
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
      type: "invalid",
      error: "Input must be a non-empty string"
    }
  }

  try {
    const parsed = parseSync(input, options)

    if (!parsed.isValid || parsed.type === "invalid") {
      return {
        isValid: false,
        type: "invalid",
        error: "Number does not match any valid pattern for the region"
      }
    }

    // Only LANDLINE, MOBILE, and VOIP are valid types
    const validTypes = ["landline", "mobile", "voip"]

    if (!validTypes.includes(parsed.type)) {
      return {
        isValid: false,
        type: "invalid",
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
      type: "invalid",
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

  // Get possible lengths bitmap for this country code
  const lengthsBitmap = await getPossibleLengthsBitmap(countryCode)

  if (lengthsBitmap === null || lengthsBitmap === 0) {
    return PossibleNumberResult.INVALID_COUNTRY_CODE
  }

  const nsnLength = nationalNumber.length
  const minLength = getMinLength(lengthsBitmap)
  const maxLength = getMaxLength(lengthsBitmap)

  if (nsnLength < minLength) {
    return PossibleNumberResult.TOO_SHORT
  }

  if (nsnLength > maxLength) {
    return PossibleNumberResult.TOO_LONG
  }

  // For exact length validation, check the bitmap
  // Note: IS_POSSIBLE means length is in valid range, not exact match
  // This matches libphonenumber behavior for isPossibleNumber
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
  normalized = normalized.replace(PLUS_VARIANTS_PATTERN, "+")

  // Remove formatting
  normalized = normalized.replace(FORMATTING_CHARS_PATTERN, "")

  // Convert alpha to digits
  normalized = normalized.replace(/[A-Za-z]/g, alphaToDigit)

  // Extract digits
  const digits = normalized.replace(/[^\d+]/g, "")

  if (digits.length < 3) {
    return null
  }

  // E.164 format
  if (digits.startsWith("+")) {
    const withoutPlus = digits.slice(1)
    // Try 1, 2, 3 digit country codes
    for (const len of COUNTRY_CODE_LENGTHS) {
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
 * Gets possible lengths bitmap for a country code from metadata.
 * Returns a bitmap where each bit represents a valid length.
 */
async function getPossibleLengthsBitmap(countryCode: number): Promise<number | null> {
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
 * Tries to load metadata for a country code by trying the main region.
 */
async function tryLoadForCountryCode(countryCode: number) {
  const region = getMainRegionForCode(countryCode)
  /* v8 ignore next 4 - common mappings cover most use cases */
  if (region) {
    return loadRegionMetadata(region)
  }
  return null
}
