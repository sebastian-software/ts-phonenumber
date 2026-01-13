/**
 * Metadata types for phone number validation and formatting.
 * Based on libphonenumber's PhoneMetadata protobuf structure.
 */

/**
 * Bitmap representing valid phone number lengths.
 *
 * Each bit position represents whether that length is valid.
 * For example, if lengths 7, 8, 9 are valid:
 *   - Bit 7 = 1, Bit 8 = 1, Bit 9 = 1
 *   - Binary: 0b1110000000 = 896
 *
 * To check if a length is valid: `(bitmap & (1 << length)) !== 0`
 * To get min length: `Math.clz32(bitmap)` related calculation
 * To get max length: `31 - Math.clz32(bitmap)`
 *
 * This is more efficient than arrays for membership checks (O(1) vs O(n))
 * and more compact in memory.
 */
export type LengthBitmap = number

/**
 * Phone number description - pattern and validation info for a number type.
 * Maps to PhoneNumberDesc in libphonenumber.
 */
export interface PhoneNumberDesc {
  /** Compiled regular expression for matching national numbers (anchored: ^pattern$) */
  pattern?: RegExp
  /** Example number matching this pattern */
  example?: string
  /**
   * Bitmap of possible lengths for this number type.
   * Bit N is set if length N is valid. Check with: (bitmap & (1 << length)) !== 0
   * @see LengthBitmap
   */
  possibleLengths?: LengthBitmap
  /**
   * Bitmap of possible lengths when dialing locally (without area code).
   * @see LengthBitmap
   */
  possibleLengthsLocalOnly?: LengthBitmap
}

/**
 * Format descriptor for formatting phone numbers.
 * Maps to NumberFormat in libphonenumber.
 */
export interface NumberFormat {
  /** Compiled pattern to match the national number (anchored: ^pattern$, with capturing groups) */
  pattern: RegExp
  /** Replacement format string using $1, $2, etc. */
  format: string
  /** Compiled leading digits pattern to determine when to use this format (prefix match: ^pattern, patterns combined with |) */
  leadingDigits?: RegExp
  /** Rule for formatting with national prefix (e.g., "0$1") */
  nationalPrefixFormattingRule?: string
  /** Rule for carrier code formatting */
  domesticCarrierCodeFormattingRule?: string
  /** Whether the national prefix is optional when formatting */
  nationalPrefixOptional?: boolean
}

/**
 * Metadata for a single region/country.
 * Maps to PhoneMetadata in libphonenumber.
 */
export interface RegionMetadata {
  /** ISO 3166-1 alpha-2 region code (e.g., "DE") */
  regionCode: string
  /** Country calling code (e.g., 49 for Germany) */
  countryCode: number
  /** International dialing prefix (e.g., "00") */
  internationalPrefix?: string
  /** National prefix for domestic dialing (e.g., "0") */
  nationalPrefix?: string
  /** Pattern for parsing/stripping national prefix */
  nationalPrefixForParsing?: string
  /** Transform rule for national prefix */
  nationalPrefixTransformRule?: string
  /** Preferred international prefix if multiple exist */
  preferredInternationalPrefix?: string
  /** Whether mobile and fixed line patterns are identical */
  sameMobileAndFixedLinePattern?: boolean
  /** Whether this is the main country for the calling code */
  mainCountryForCode?: boolean
  /** Compiled leading digits pattern to identify this region for shared country codes (prefix match: ^pattern) */
  leadingDigits?: RegExp

  /** General description matching any valid number */
  generalDesc?: PhoneNumberDesc
  /** Fixed-line/landline number patterns */
  fixedLine?: PhoneNumberDesc
  /** Mobile number patterns */
  mobile?: PhoneNumberDesc
  /** Toll-free number patterns (treated as invalid in ts-phonenumber) */
  tollFree?: PhoneNumberDesc
  /** Premium rate number patterns (treated as invalid in ts-phonenumber) */
  premiumRate?: PhoneNumberDesc
  /** Shared cost number patterns (treated as invalid in ts-phonenumber) */
  sharedCost?: PhoneNumberDesc
  /** Personal number patterns (treated as invalid in ts-phonenumber) */
  personalNumber?: PhoneNumberDesc
  /** VoIP number patterns */
  voip?: PhoneNumberDesc
  /** Pager number patterns (treated as invalid in ts-phonenumber) */
  pager?: PhoneNumberDesc
  /** Universal Access Number patterns (treated as invalid in ts-phonenumber) */
  uan?: PhoneNumberDesc
  /** Numbers that cannot be dialed internationally */
  noInternationalDialling?: PhoneNumberDesc

  /** Number formatting rules for national format */
  formats?: NumberFormat[]
  /** Number formatting rules for international format */
  intlFormats?: NumberFormat[]
}

/**
 * Metadata bundle containing multiple regions.
 */
export interface MetadataBundle {
  /** Map of region code to metadata */
  regions: Record<string, RegionMetadata>
  /** Map of country calling code to region codes */
  countryCodeToRegions: Record<number, string[]>
}
