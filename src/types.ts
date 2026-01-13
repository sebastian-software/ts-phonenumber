/**
 * Phone number types supported by ts-phonenumber.
 * Only "landline", "mobile", and "voip" are considered valid.
 * All other types (toll-free, premium, etc.) are treated as "invalid".
 */
export type PhoneNumberType = "landline" | "mobile" | "voip" | "invalid"

/**
 * Supported output formats for phone number formatting.
 * - `e164`: +491701234567
 * - `international`: +49 170 1234567
 * - `national`: 0170 1234567
 * - `rfc3966`: tel:+49-170-1234567
 */
export type PhoneNumberFormat = "e164" | "international" | "national" | "rfc3966"

/**
 * Represents a successfully parsed phone number.
 */
export interface ParsedPhoneNumber {
  /** The country calling code (e.g., 49 for Germany) */
  countryCode: number
  /** The national number without country code */
  nationalNumber: string
  /** ISO 3166-1 alpha-2 region code (e.g., "DE") */
  regionCode: string
  /** The type of phone number */
  type: PhoneNumberType
  /** Whether the number is valid for the detected type */
  isValid: boolean
  /** The original input string */
  rawInput: string
}

/**
 * Options for parsing a phone number.
 */
export interface ParseOptions {
  /** Default region to assume if not specified in the number */
  defaultRegion?: string | undefined
}

/**
 * Options for formatting a phone number.
 */
export interface FormatOptions {
  /** The format to use for output */
  format: PhoneNumberFormat
}

/**
 * Result of a validation operation.
 */
export interface ValidationResult {
  /** Whether the number is valid */
  isValid: boolean
  /** The detected phone number type */
  type: PhoneNumberType
  /** Error message if validation failed */
  error?: string
}

/**
 * Result types for phone number matching.
 * Used by isNumberMatch() to indicate how closely two numbers match.
 * - `not_a_number`: One or both numbers could not be parsed
 * - `no_match`: The numbers are definitely different
 * - `short_nsn_match`: One number is a suffix of the other
 * - `nsn_match`: National numbers match, but country codes differ
 * - `exact_match`: Numbers are identical
 */
export type MatchType =
  | "not_a_number"
  | "no_match"
  | "short_nsn_match"
  | "nsn_match"
  | "exact_match"
