/**
 * Region utility functions for phone numbers.
 */

import type { ParsedPhoneNumber, ParseOptions } from "./types.js"
import { parse } from "./parse.js"
import { loadRegionMetadata, getRegionsForCountryCode } from "./metadata/index.js"
import type { RegionMetadata } from "./metadata/index.js"

/**
 * Gets the region code (ISO 3166-1 alpha-2) for a phone number.
 *
 * @param input - The phone number string or ParsedPhoneNumber
 * @param options - Parsing options including default region
 * @returns The region code (e.g., "DE", "US") or undefined if unknown
 *
 * @example
 * ```typescript
 * await getRegionCodeForNumber("+49 170 1234567")  // "DE"
 * await getRegionCodeForNumber("+1 650 253 0000")  // "US"
 * await getRegionCodeForNumber("+44 7911 123456")  // "GB"
 * ```
 */
export async function getRegionCodeForNumber(
  input: string | ParsedPhoneNumber,
  options: ParseOptions = {}
): Promise<string | undefined> {
  let phoneNumber: ParsedPhoneNumber

  if (typeof input === "string") {
    phoneNumber = await parse(input, options)
  } else {
    phoneNumber = input
  }

  // Already has region code from parsing
  if (phoneNumber.regionCode) {
    return phoneNumber.regionCode
  }

  // Try to determine from country code
  if (phoneNumber.countryCode === 0) {
    return undefined
  }

  const regions = getRegionsForCountryCode(phoneNumber.countryCode)
  if (regions?.length === 1) {
    return regions[0]
  }

  // Multiple regions for this country code - need to match by pattern
  if (regions && regions.length > 1) {
    for (const regionCode of regions) {
      const metadata = await loadRegionMetadata(regionCode)
      if (metadata && matchesRegion(phoneNumber.nationalNumber, metadata)) {
        return regionCode
      }
    }
    // Fall back to main country for code
    for (const regionCode of regions) {
      const metadata = await loadRegionMetadata(regionCode)
      if (metadata?.mainCountryForCode) {
        return regionCode
      }
    }
    // Return first region as fallback
    return regions[0]
  }

  return undefined
}

/**
 * Gets the country calling code for a region.
 *
 * @param regionCode - ISO 3166-1 alpha-2 region code (e.g., "DE", "US")
 * @returns The country calling code (e.g., 49, 1) or undefined if unknown
 *
 * @example
 * ```typescript
 * await getCountryCodeForRegion("DE")  // 49
 * await getCountryCodeForRegion("US")  // 1
 * await getCountryCodeForRegion("GB")  // 44
 * ```
 */
export async function getCountryCodeForRegion(regionCode: string): Promise<number | undefined> {
  const metadata = await loadRegionMetadata(regionCode)
  return metadata?.countryCode
}

/**
 * Gets all region codes that share a country calling code.
 *
 * @param countryCode - The country calling code (e.g., 1, 44)
 * @returns Array of region codes or undefined if unknown
 *
 * @example
 * ```typescript
 * await getRegionsForCode(1)   // ["US", "CA", "PR", ...]
 * await getRegionsForCode(44)  // ["GB", "GG", "IM", "JE"]
 * await getRegionsForCode(49)  // ["DE"]
 * ```
 */
export async function getRegionsForCode(countryCode: number): Promise<string[] | undefined> {
  // First check cache
  const cached = getRegionsForCountryCode(countryCode)
  if (cached) {
    return cached
  }

  // Try common country code mappings
  const commonMappings: Record<number, string[]> = {
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
    7: ["RU", "KZ"],
    44: ["GB", "GG", "IM", "JE"],
    61: ["AU", "CC", "CX"],
    64: ["NZ"],
    212: ["MA", "EH"],
    262: ["RE", "YT"],
    290: ["SH", "TA"],
    358: ["FI", "AX"],
    590: ["GP", "BL", "MF"],
    599: ["CW", "BQ"]
  }

  const regions = commonMappings[countryCode]
  if (regions) {
    // Load metadata for all regions to populate cache
    await Promise.all(regions.map((r) => loadRegionMetadata(r)))
    return regions
  }

  return undefined
}

/**
 * Checks if a national number matches the patterns for a region.
 */
function matchesRegion(nationalNumber: string, metadata: RegionMetadata): boolean {
  // Check leading digits if specified (for shared country codes)
  if (metadata.leadingDigits) {
    const regex = new RegExp(`^${metadata.leadingDigits}`)
    if (!regex.test(nationalNumber)) {
      return false
    }
  }

  // Check if matches any pattern
  if (metadata.mobile?.pattern) {
    const regex = new RegExp(`^${metadata.mobile.pattern}$`)
    if (regex.test(nationalNumber)) {
      return true
    }
  }

  if (metadata.fixedLine?.pattern) {
    const regex = new RegExp(`^${metadata.fixedLine.pattern}$`)
    if (regex.test(nationalNumber)) {
      return true
    }
  }

  if (metadata.voip?.pattern) {
    const regex = new RegExp(`^${metadata.voip.pattern}$`)
    if (regex.test(nationalNumber)) {
      return true
    }
  }

  return false
}

/**
 * Gets the main country for a country calling code.
 * For country codes shared by multiple regions (e.g., +1 for US/CA),
 * returns the primary region.
 *
 * @param countryCode - The country calling code
 * @returns The main region code or undefined if unknown
 *
 * @example
 * ```typescript
 * await getMainCountryForCode(1)   // "US"
 * await getMainCountryForCode(44)  // "GB"
 * await getMainCountryForCode(49)  // "DE"
 * ```
 */
export async function getMainCountryForCode(countryCode: number): Promise<string | undefined> {
  const regions = await getRegionsForCode(countryCode)
  if (!regions || regions.length === 0) {
    return undefined
  }

  if (regions.length === 1) {
    return regions[0]
  }

  // Find main country
  for (const regionCode of regions) {
    const metadata = await loadRegionMetadata(regionCode)
    if (metadata?.mainCountryForCode) {
      return regionCode
    }
  }

  // Default to first region
  return regions[0]
}
