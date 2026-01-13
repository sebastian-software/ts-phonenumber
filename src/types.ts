/**
 * Phone number types supported by ts-phonenumber.
 * Only LANDLINE, MOBILE, and VOIP are considered valid.
 * All other types (toll-free, premium, etc.) are treated as INVALID.
 */
export enum PhoneNumberType {
  LANDLINE = "LANDLINE",
  MOBILE = "MOBILE",
  VOIP = "VOIP",
  INVALID = "INVALID"
}

/**
 * Supported output formats for phone number formatting.
 */
export enum PhoneNumberFormat {
  /** E.164 format: +491701234567 */
  E164 = "E164",
  /** International format: +49 170 1234567 */
  INTERNATIONAL = "INTERNATIONAL",
  /** National format: 0170 1234567 */
  NATIONAL = "NATIONAL",
  /** RFC3966 tel: URI format: tel:+49-170-1234567 */
  RFC3966 = "RFC3966"
}

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
 */
export enum MatchType {
  /** One or both numbers could not be parsed as valid phone numbers */
  NOT_A_NUMBER = "NOT_A_NUMBER",
  /** The numbers are definitely different */
  NO_MATCH = "NO_MATCH",
  /** One number is a suffix of the other (e.g., "331 6005" matches "+64 3 331 6005") */
  SHORT_NSN_MATCH = "SHORT_NSN_MATCH",
  /** National numbers match, but country codes differ or are missing */
  NSN_MATCH = "NSN_MATCH",
  /** Numbers are identical (country code, national number, extension) */
  EXACT_MATCH = "EXACT_MATCH"
}
