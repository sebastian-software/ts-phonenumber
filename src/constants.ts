/**
 * Shared constants and data structures for phone number processing.
 */

/**
 * Phone keypad letter-to-digit mapping (ITU E.161).
 * Used for converting vanity numbers like 1-800-FLOWERS.
 */
export const ALPHA_MAP: Readonly<Record<string, string>> = {
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

/**
 * Converts alpha characters to digits using phone keypad mapping.
 * @param char - Single character to convert
 * @returns The digit character, or original if not a letter
 */
export function alphaToDigit(char: string): string {
  return ALPHA_MAP[char.toUpperCase()] ?? char
}

/**
 * Pattern matching formatting characters to strip from phone numbers.
 * Includes: spaces, hyphens, dots, parentheses, slashes, zero-width spaces, NBSP, soft hyphens.
 */
export const FORMATTING_CHARS_PATTERN = /[\s\-.()/\u200B\u00A0\u00AD]/g

/**
 * Pattern matching unicode plus sign variants (e.g., full-width plus \uFF0B).
 */
export const PLUS_VARIANTS_PATTERN = /[\uFF0B]/g

/**
 * Pattern for validating E.164 format: + followed by 1-15 digits, starting with 1-9.
 */
export const E164_PATTERN = /^\+[1-9]\d{1,14}$/

/**
 * Pattern for quick E.164 validation (7-15 digits after +).
 * Used for fast-path normalization.
 */
export const CLEAN_E164_PATTERN = /^\+[1-9][0-9]{6,14}$/

/**
 * Valid country code lengths to try when parsing (1, 2, or 3 digits).
 */
export const COUNTRY_CODE_LENGTHS = [1, 2, 3] as const

/**
 * Mapping of country calling codes to their region codes.
 * First region in array is the "main" country for that code.
 *
 * This is used as a fallback when metadata isn't loaded yet.
 * The countryCodeMap in metadata provides the authoritative mapping.
 */
export const COUNTRY_CODE_TO_REGIONS: Readonly<Record<number, readonly string[]>> = {
  // NANP (North American Numbering Plan)
  1: [
    "US",
    "CA",
    "PR",
    "VI",
    "AS",
    "GU",
    "MP",
    "AG",
    "AI",
    "BB",
    "BM",
    "BS",
    "DM",
    "DO",
    "GD",
    "JM",
    "KN",
    "KY",
    "LC",
    "MS",
    "TC",
    "TT",
    "VC",
    "VG"
  ],
  // Russia/Kazakhstan
  7: ["RU", "KZ"],
  // Single-region codes (common countries)
  20: ["EG"],
  27: ["ZA"],
  30: ["GR"],
  31: ["NL"],
  32: ["BE"],
  33: ["FR"],
  34: ["ES"],
  36: ["HU"],
  39: ["IT"],
  40: ["RO"],
  41: ["CH"],
  43: ["AT"],
  // UK and Crown Dependencies
  44: ["GB", "GG", "IM", "JE"],
  45: ["DK"],
  46: ["SE"],
  47: ["NO"],
  48: ["PL"],
  49: ["DE"],
  51: ["PE"],
  52: ["MX"],
  53: ["CU"],
  54: ["AR"],
  55: ["BR"],
  56: ["CL"],
  57: ["CO"],
  58: ["VE"],
  60: ["MY"],
  // Australia and territories
  61: ["AU", "CC", "CX"],
  62: ["ID"],
  63: ["PH"],
  64: ["NZ"],
  65: ["SG"],
  66: ["TH"],
  81: ["JP"],
  82: ["KR"],
  84: ["VN"],
  86: ["CN"],
  90: ["TR"],
  91: ["IN"],
  92: ["PK"],
  93: ["AF"],
  94: ["LK"],
  95: ["MM"],
  98: ["IR"],
  // Multi-region codes
  212: ["MA", "EH"],
  262: ["RE", "YT"],
  290: ["SH", "TA"],
  358: ["FI", "AX"],
  590: ["GP", "BL", "MF"],
  599: ["CW", "BQ"]
}

/**
 * Gets the main (first) region for a country code.
 * @param countryCode - The country calling code
 * @returns The main region code, or undefined if not found
 */
export function getMainRegionForCode(countryCode: number): string | undefined {
  return COUNTRY_CODE_TO_REGIONS[countryCode]?.[0]
}

/**
 * Gets all regions for a country code.
 * @param countryCode - The country calling code
 * @returns Array of region codes, or undefined if not found
 */
export function getRegionsForCode(countryCode: number): readonly string[] | undefined {
  return COUNTRY_CODE_TO_REGIONS[countryCode]
}
