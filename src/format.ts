/**
 * Phone number formatting functionality.
 */

import type { ParsedPhoneNumber, ParseOptions } from "./types.js"
import { PhoneNumberFormat, PhoneNumberType } from "./types.js"
import { parse, parseSync } from "./parse.js"
import { loadRegionMetadata, getCachedRegionMetadata } from "./metadata/index.js"
import type { RegionMetadata, NumberFormat } from "./metadata/index.js"

/**
 * Formats a phone number according to the specified format.
 *
 * @param input - The phone number string or ParsedPhoneNumber to format
 * @param targetFormat - The desired output format
 * @param options - Parsing options (only used if input is a string)
 * @returns The formatted phone number string, or empty string if invalid
 */
export async function format(
  input: string | ParsedPhoneNumber,
  targetFormat: PhoneNumberFormat = PhoneNumberFormat.E164,
  options: ParseOptions = {}
): Promise<string> {
  // Parse if input is a string
  const phoneNumber = typeof input === "string" ? await parse(input, options) : input

  // Cannot format invalid numbers
  if (!phoneNumber.isValid || phoneNumber.type === PhoneNumberType.INVALID) {
    return ""
  }

  const metadata = await loadRegionMetadata(phoneNumber.regionCode)

  switch (targetFormat) {
    case PhoneNumberFormat.E164:
      return formatE164(phoneNumber)

    case PhoneNumberFormat.INTERNATIONAL:
      return formatInternational(phoneNumber, metadata)

    case PhoneNumberFormat.NATIONAL:
      return formatNational(phoneNumber, metadata)

    case PhoneNumberFormat.RFC3966:
      return formatRFC3966(phoneNumber)

    default:
      return formatE164(phoneNumber)
  }
}

/**
 * Synchronously formats a phone number according to the specified format.
 * Requires metadata to be pre-loaded via registerMetadata() or preloadRegions().
 *
 * @param input - The phone number string or ParsedPhoneNumber to format
 * @param targetFormat - The desired output format
 * @param options - Parsing options (only used if input is a string)
 * @returns The formatted phone number string, or empty string if invalid
 *
 * @example
 * ```typescript
 * // Pre-load metadata first
 * registerMetadata(DE)
 *
 * // Then use sync formatting
 * const result = formatSync("+49 170 1234567", PhoneNumberFormat.INTERNATIONAL)
 * ```
 */
export function formatSync(
  input: string | ParsedPhoneNumber,
  targetFormat: PhoneNumberFormat = PhoneNumberFormat.E164,
  options: ParseOptions = {}
): string {
  // Parse if input is a string
  const phoneNumber = typeof input === "string" ? parseSync(input, options) : input

  // Cannot format invalid numbers
  if (!phoneNumber.isValid || phoneNumber.type === PhoneNumberType.INVALID) {
    return ""
  }

  // Fast path for formats that don't need metadata
  if (targetFormat === PhoneNumberFormat.E164) {
    return formatE164(phoneNumber)
  }

  if (targetFormat === PhoneNumberFormat.RFC3966) {
    return formatRFC3966(phoneNumber)
  }

  // Only load metadata for formats that need it
  const metadata = getCachedRegionMetadata(phoneNumber.regionCode)

  switch (targetFormat) {
    case PhoneNumberFormat.INTERNATIONAL:
      return formatInternational(phoneNumber, metadata)

    case PhoneNumberFormat.NATIONAL:
      return formatNational(phoneNumber, metadata)

    default:
      return formatE164(phoneNumber)
  }
}

/**
 * Formats a phone number in E.164 format.
 * Example: +491701234567
 */
function formatE164(phoneNumber: ParsedPhoneNumber): string {
  return `+${String(phoneNumber.countryCode)}${phoneNumber.nationalNumber}`
}

/**
 * Formats a phone number in international format.
 * Example: +49 170 1234567
 */
function formatInternational(
  phoneNumber: ParsedPhoneNumber,
  metadata: RegionMetadata | undefined
): string {
  const formatted = applyFormat(phoneNumber.nationalNumber, metadata, "intl")
  return `+${String(phoneNumber.countryCode)} ${formatted}`
}

/**
 * Formats a phone number in national format.
 * Example: 0170 1234567
 */
function formatNational(
  phoneNumber: ParsedPhoneNumber,
  metadata: RegionMetadata | undefined
): string {
  const formatted = applyFormat(phoneNumber.nationalNumber, metadata, "national")
  const prefix = metadata?.nationalPrefix ?? ""
  return `${prefix}${formatted}`
}

/**
 * Formats a phone number in RFC3966 (tel: URI) format.
 * Example: tel:+49-170-1234567
 */
function formatRFC3966(phoneNumber: ParsedPhoneNumber): string {
  // RFC3966 uses hyphens as visual separators
  const nationalFormatted = formatWithHyphens(phoneNumber.nationalNumber)
  return `tel:+${String(phoneNumber.countryCode)}-${nationalFormatted}`
}

/**
 * Applies formatting rules from metadata to a national number.
 * @param _formatType - Reserved for future international vs national format differentiation
 */
function applyFormat(
  nationalNumber: string,
  metadata: RegionMetadata | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _formatType: "intl" | "national"
): string {
  if (!metadata?.formats || metadata.formats.length === 0) {
    // Default formatting: split into groups of 3-4 digits
    return defaultFormat(nationalNumber)
  }

  // Find matching format
  const matchingFormat = findMatchingFormat(nationalNumber, metadata.formats)

  if (!matchingFormat) {
    return defaultFormat(nationalNumber)
  }

  // Apply the format
  const pattern = new RegExp(matchingFormat.pattern)
  // For now, use the same format for both international and national
  // The actual formatting with prefixes is handled elsewhere
  const formatString = matchingFormat.format

  const formatted = nationalNumber.replace(pattern, formatString)
  return formatted
}

/**
 * Finds a matching format pattern for the given national number.
 */
function findMatchingFormat(
  nationalNumber: string,
  formats: NumberFormat[]
): NumberFormat | undefined {
  for (const format of formats) {
    // Check leading digits if specified
    if (format.leadingDigits && format.leadingDigits.length > 0) {
      const matches = format.leadingDigits.some((leadingPattern) => {
        const regex = new RegExp(`^${leadingPattern}`)
        return regex.test(nationalNumber)
      })
      if (!matches) {
        continue
      }
    }

    // Check if the pattern matches
    const patternRegex = new RegExp(`^${format.pattern}$`)
    if (patternRegex.test(nationalNumber)) {
      return format
    }
  }

  return undefined
}

/**
 * Default formatting when no specific format is available.
 * Splits the number into groups of 3-4 digits.
 */
function defaultFormat(nationalNumber: string): string {
  const length = nationalNumber.length

  if (length <= 4) {
    return nationalNumber
  }

  /* v8 ignore next 4 - fallback formatting for medium-length numbers without metadata */
  if (length <= 7) {
    // Split into 3 + rest
    return `${nationalNumber.slice(0, 3)} ${nationalNumber.slice(3)}`
  }

  if (length <= 10) {
    // Split into 3 + 3 + rest
    return `${nationalNumber.slice(0, 3)} ${nationalNumber.slice(3, 6)} ${nationalNumber.slice(6)}`
  }

  /* v8 ignore start - fallback formatting for very long numbers without metadata */
  // For longer numbers, split into groups of 3-4
  const parts: string[] = []
  let remaining = nationalNumber

  while (remaining.length > 0) {
    if (remaining.length <= 4) {
      parts.push(remaining)
      break
    }
    parts.push(remaining.slice(0, 3))
    remaining = remaining.slice(3)
  }

  return parts.join(" ")
  /* v8 ignore stop */
}

/**
 * Formats a number with hyphens for RFC3966.
 */
function formatWithHyphens(nationalNumber: string): string {
  // Similar to default format but with hyphens
  const spaced = defaultFormat(nationalNumber)
  return spaced.replace(/ /g, "-")
}

/**
 * Formats a phone number to E.164 format.
 * Convenience function for the most common use case.
 *
 * @param input - The phone number string or ParsedPhoneNumber
 * @param options - Parsing options (only used if input is a string)
 * @returns The E.164 formatted string, or empty string if invalid
 */
export async function formatE164Only(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<string> {
  return format(input, PhoneNumberFormat.E164, options)
}

/**
 * Formats a phone number to international format.
 * Convenience function.
 *
 * @param input - The phone number string or ParsedPhoneNumber
 * @param options - Parsing options (only used if input is a string)
 * @returns The internationally formatted string, or empty string if invalid
 */
export async function formatInternationalOnly(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<string> {
  return format(input, PhoneNumberFormat.INTERNATIONAL, options)
}

/**
 * Formats a phone number to national format.
 * Convenience function.
 *
 * @param input - The phone number string or ParsedPhoneNumber
 * @param options - Parsing options (only used if input is a string)
 * @returns The nationally formatted string, or empty string if invalid
 */
export async function formatNationalOnly(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<string> {
  return format(input, PhoneNumberFormat.NATIONAL, options)
}
