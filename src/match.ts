/**
 * Phone number matching functionality.
 * Compares two phone numbers to determine if they represent the same number.
 */

import type { ParsedPhoneNumber } from "./types.js"
import { MatchType } from "./types.js"
import { parse } from "./parse.js"

/**
 * Internal representation of a parsed number for comparison.
 * Includes extension which may be stripped during normal parsing.
 */
interface ComparisonNumber {
  countryCode: number
  nationalNumber: string
  extension?: string
  isValid: boolean
  /** Raw digits for fallback comparison */
  rawDigits: string
}

/**
 * Compares two phone numbers and returns how closely they match.
 *
 * @param firstNumber - First phone number (string or ParsedPhoneNumber)
 * @param secondNumber - Second phone number (string or ParsedPhoneNumber)
 * @returns MatchType indicating the level of match
 *
 * @example
 * ```typescript
 * // EXACT_MATCH - same number, different formatting
 * await isNumberMatch('+64 3 331 6005', '+64 03 331 6005');
 *
 * // NSN_MATCH - national numbers match, one missing country code
 * await isNumberMatch('+64 3 331-6005', '03 331 6005');
 *
 * // SHORT_NSN_MATCH - one is suffix of the other
 * await isNumberMatch('+64 3 331-6005', '331 6005');
 *
 * // NO_MATCH - different numbers
 * await isNumberMatch('03 331 6005', '03 331 6006');
 * ```
 */
export async function isNumberMatch(
  firstNumber: string | ParsedPhoneNumber,
  secondNumber: string | ParsedPhoneNumber
): Promise<MatchType> {
  // Parse both numbers
  const first = await parseForComparison(firstNumber)
  const second = await parseForComparison(secondNumber)

  // If either couldn't be parsed at all, it's not a number
  if (!first || !second) {
    return MatchType.NOT_A_NUMBER
  }

  // Early exit if both have extensions and they differ
  if (first.extension && second.extension && first.extension !== second.extension) {
    return MatchType.NO_MATCH
  }

  const firstHasCountryCode = first.countryCode !== 0
  const secondHasCountryCode = second.countryCode !== 0

  // Both have country codes
  if (firstHasCountryCode && secondHasCountryCode) {
    // Different country codes = no match
    if (first.countryCode !== second.countryCode) {
      return MatchType.NO_MATCH
    }

    // Same country code - compare NSNs with leading zero normalization
    const nsn1 = normalizeNsn(first.nationalNumber)
    const nsn2 = normalizeNsn(second.nationalNumber)

    if (nsn1 === nsn2) {
      // Extensions must also match for EXACT_MATCH
      if (first.extension === second.extension) {
        return MatchType.EXACT_MATCH
      }
      // One has extension, one doesn't
      return MatchType.SHORT_NSN_MATCH
    }

    // Check for short NSN match (one NSN is suffix of other)
    if (isNsnSuffixOfOther(nsn1, nsn2)) {
      return MatchType.SHORT_NSN_MATCH
    }

    return MatchType.NO_MATCH
  }

  // One or both don't have country codes
  // Get NSNs for comparison
  const nsn1 = firstHasCountryCode ? first.nationalNumber : first.rawDigits
  const nsn2 = secondHasCountryCode ? second.nationalNumber : second.rawDigits

  // Case: One has country code, other doesn't
  if (firstHasCountryCode !== secondHasCountryCode) {
    const withCC = firstHasCountryCode ? first : second
    const withoutCC = firstHasCountryCode ? second : first
    const withoutCCDigits = withoutCC.rawDigits

    // Check if the number without CC might have the country code embedded
    // e.g., "(64-3) 331 6005" where 64 is NZ's country code
    const ccString = String(withCC.countryCode)
    if (withoutCCDigits.startsWith(ccString)) {
      const potentialNsn = withoutCCDigits.slice(ccString.length)
      // Check if after stripping embedded CC, the NSNs match
      if (normalizeNsn(potentialNsn) === normalizeNsn(withCC.nationalNumber)) {
        if (first.extension === second.extension) {
          return MatchType.NSN_MATCH
        }
        return MatchType.SHORT_NSN_MATCH
      }
    }

    // Check if NSNs match with national prefix handling
    const normNsn1 = normalizeNsn(nsn1)
    const normNsn2 = normalizeNsn(nsn2)

    if (normNsn1 === normNsn2) {
      if (first.extension === second.extension) {
        return MatchType.NSN_MATCH
      }
      return MatchType.SHORT_NSN_MATCH
    }

    // Check for short NSN match
    if (isNsnSuffixOfOther(normNsn1, normNsn2)) {
      return MatchType.SHORT_NSN_MATCH
    }

    return MatchType.NO_MATCH
  }

  // Case: Neither has country code
  // Exact digit match = NSN_MATCH
  if (nsn1 === nsn2) {
    if (first.extension === second.extension) {
      return MatchType.NSN_MATCH
    }
    return MatchType.SHORT_NSN_MATCH
  }

  // If they match only after stripping leading zeros, it's SHORT_NSN_MATCH
  // (we can't know if the 0 is national prefix without country context)
  const normNsn1 = normalizeNsn(nsn1)
  const normNsn2 = normalizeNsn(nsn2)

  if (normNsn1 === normNsn2) {
    return MatchType.SHORT_NSN_MATCH
  }

  // Check for short NSN match (one is suffix of the other)
  if (isNsnSuffixOfOther(normNsn1, normNsn2)) {
    return MatchType.SHORT_NSN_MATCH
  }

  return MatchType.NO_MATCH
}

/**
 * Normalizes an NSN by stripping leading zeros.
 * Leading zeros in NSN (after country code) are usually national prefix artifacts.
 */
function normalizeNsn(nsn: string): string {
  return nsn.replace(/^0+/, "") || nsn
}

/**
 * Parses a phone number for comparison purposes.
 * More lenient than regular parsing - accepts numbers without country codes.
 */
async function parseForComparison(
  input: string | ParsedPhoneNumber
): Promise<ComparisonNumber | null> {
  if (typeof input !== "string") {
    // Already parsed
    return {
      countryCode: input.countryCode,
      nationalNumber: input.nationalNumber,
      isValid: input.isValid,
      rawDigits: input.nationalNumber
    }
  }

  // Normalize input
  let normalized = input.trim()

  // Handle tel: URI prefix
  if (normalized.toLowerCase().startsWith("tel:")) {
    normalized = normalized.slice(4)
  }

  // Extract extension before further processing
  const extension = extractExtension(normalized)
  if (extension.ext) {
    normalized = extension.number
  }

  // Strip phone context and other URI parameters
  const semicolonIdx = normalized.indexOf(";")
  if (semicolonIdx > 0) {
    normalized = normalized.slice(0, semicolonIdx)
  }

  // Replace full-width plus and other unicode variants
  normalized = normalized.replace(/[\uFF0B]/g, "+")

  // Handle ++ prefix
  if (normalized.startsWith("++")) {
    normalized = normalized.slice(1)
  }

  // Convert alpha characters to digits (vanity numbers)
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
  normalized = normalized.replace(/[A-Za-z]/g, (char) => {
    return alphaMap[char.toUpperCase()] ?? char
  })

  // Remove formatting characters
  normalized = normalized.replace(/[\s\-.()/\u200B\u00A0\u00AD]/g, "")

  // Extract all digits
  const allDigits = normalized.replace(/[^\d]/g, "")

  // NOT_A_NUMBER checks:
  // - Too short (less than 3 digits)
  // - Original input had no convertible content (just "Dog" or similar)
  if (allDigits.length < 3) {
    return null
  }

  // Check if original input (before alpha conversion) had meaningful content
  // If it was just letters that aren't valid vanity letters, it's not a number
  const originalDigits = input.replace(/[^\d+]/g, "")
  const hasPlus = input.includes("+") || input.includes("\uFF0B")
  if (!hasPlus && originalDigits.length === 0) {
    // Input had no digits and no plus sign - check if alpha conversion produced anything
    // If the only digits came from alpha conversion of non-vanity letters, reject
    const vanityLetters = input.replace(/[^A-Za-z]/g, "")
    if (vanityLetters.length > 0 && allDigits.length < 7) {
      // Too short after alpha conversion - likely not a real number
      return null
    }
  }

  // Try to parse with the standard parser first
  if (normalized.startsWith("+")) {
    const parsed = await parse(normalized)
    if (parsed.isValid) {
      const result: ComparisonNumber = {
        countryCode: parsed.countryCode,
        nationalNumber: parsed.nationalNumber,
        isValid: true,
        rawDigits: allDigits
      }
      if (extension.ext) result.extension = extension.ext
      return result
    }
    // Even if not "valid" by type, extract what we can for comparison
    // Try to extract country code manually
    const withoutPlus = normalized.slice(1)
    if (/^\d+$/.test(withoutPlus) && withoutPlus.length >= 4) {
      // Try 1, 2, 3 digit country codes
      for (const len of [1, 2, 3]) {
        const potentialCC = parseInt(withoutPlus.slice(0, len), 10)
        const nsn = withoutPlus.slice(len)
        if (nsn.length >= 3) {
          const result: ComparisonNumber = {
            countryCode: potentialCC,
            nationalNumber: nsn,
            isValid: false,
            rawDigits: allDigits
          }
          if (extension.ext) result.extension = extension.ext
          return result
        }
      }
    }
    return null
  }

  // No country code - just extract the digits
  if (allDigits.length < 3) {
    return null
  }

  const result: ComparisonNumber = {
    countryCode: 0,
    nationalNumber: allDigits,
    isValid: false,
    rawDigits: allDigits
  }
  if (extension.ext) result.extension = extension.ext
  return result
}

/**
 * Extracts extension from a phone number string.
 */
function extractExtension(input: string): { number: string; ext?: string } {
  // Common extension patterns: ext, ext., extn, x, #, ;
  // Also handle Russian "доб." (dobavochnyi = extension)
  const extPatterns = [
    /^(.+?)\s*(?:ext\.?|extn\.?)\s*(\d+)$/i,
    /^(.+?)\s*(?:доб\.?)\s*(\d+)$/i,
    /^(.+?)\s*x\s*(\d+)$/i,
    /^(.+?)#(\d+)$/,
    /^(.+?);ext=(\d+)$/i,
    /^(.+?);(\d+)$/
  ]

  for (const pattern of extPatterns) {
    const match = pattern.exec(input)
    if (match?.[1] && match[2]) {
      return { number: match[1], ext: match[2] }
    }
  }

  return { number: input }
}

/**
 * Checks if one national number is a suffix of the other.
 */
function isNsnSuffixOfOther(nsn1: string, nsn2: string): boolean {
  // Normalize both before comparison
  const norm1 = normalizeNsn(nsn1)
  const norm2 = normalizeNsn(nsn2)
  return norm1.endsWith(norm2) || norm2.endsWith(norm1)
}
