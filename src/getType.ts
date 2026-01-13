/**
 * Phone number type detection functionality.
 */

import type { ParseOptions, PhoneNumberType } from "./types.js"
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
    return "invalid"
  }

  try {
    const parsed = await parse(input, options)

    if (!parsed.isValid) {
      return "invalid"
    }

    // Only return supported types
    const supportedTypes = ["landline", "mobile", "voip"]

    if (supportedTypes.includes(parsed.type)) {
      return parsed.type
    }

    return "invalid"
  } catch {
    /* v8 ignore next - defensive error handling */
    return "invalid"
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
  return type === "mobile"
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
  return type === "landline"
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
  return type === "voip"
}
