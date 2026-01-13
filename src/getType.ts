/**
 * Phone number type detection functionality.
 */

import type { ParseOptions } from "./types.js"
import { PhoneNumberType } from "./types.js"
import { parse } from "./parse.js"

/**
 * Determines the type of a phone number.
 * Only LANDLINE, MOBILE, and VOIP are returned as valid types.
 * All other types (toll-free, premium, etc.) return INVALID.
 *
 * @param input - The phone number string to classify
 * @param options - Parsing options including default region
 * @returns The phone number type (LANDLINE, MOBILE, VOIP, or INVALID)
 */
export async function getType(input: string, options: ParseOptions = {}): Promise<PhoneNumberType> {
  if (!input || typeof input !== "string") {
    return PhoneNumberType.INVALID
  }

  try {
    const parsed = await parse(input, options)

    if (!parsed.isValid) {
      return PhoneNumberType.INVALID
    }

    // Only return supported types
    const supportedTypes = [PhoneNumberType.LANDLINE, PhoneNumberType.MOBILE, PhoneNumberType.VOIP]

    if (supportedTypes.includes(parsed.type)) {
      return parsed.type
    }

    return PhoneNumberType.INVALID
  } catch {
    return PhoneNumberType.INVALID
  }
}

/**
 * Checks if a phone number is a mobile number.
 *
 * @param input - The phone number string to check
 * @param options - Parsing options including default region
 * @returns True if the number is a mobile number
 */
export async function isMobile(input: string, options: ParseOptions = {}): Promise<boolean> {
  const type = await getType(input, options)
  return type === PhoneNumberType.MOBILE
}

/**
 * Checks if a phone number is a landline number.
 *
 * @param input - The phone number string to check
 * @param options - Parsing options including default region
 * @returns True if the number is a landline number
 */
export async function isLandline(input: string, options: ParseOptions = {}): Promise<boolean> {
  const type = await getType(input, options)
  return type === PhoneNumberType.LANDLINE
}

/**
 * Checks if a phone number is a VoIP number.
 *
 * @param input - The phone number string to check
 * @param options - Parsing options including default region
 * @returns True if the number is a VoIP number
 */
export async function isVoIP(input: string, options: ParseOptions = {}): Promise<boolean> {
  const type = await getType(input, options)
  return type === PhoneNumberType.VOIP
}
