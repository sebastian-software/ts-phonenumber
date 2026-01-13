/**
 * Test utilities for legacy test compatibility.
 * Provides helpers to bridge between libphonenumber test patterns and our API.
 */

import {
  parse,
  validate,
  format,
  getType,
  clearMetadataCache,
  registerMetadata
} from "../../index.js"
import type { ParsedPhoneNumber } from "../../types.js"
import { PhoneNumberType, PhoneNumberFormat } from "../../types.js"

/**
 * A phone number fixture for testing.
 */
export interface PhoneNumberFixture {
  countryCode: number
  nationalNumber: string
  italianLeadingZero?: boolean
  rawInput?: string
  extension?: string
}

/**
 * Mutable phone number for test construction.
 * Mimics libphonenumber's PhoneNumber class for test compatibility.
 */
export class MutablePhoneNumber implements PhoneNumberFixture {
  countryCode = 0
  nationalNumber = ""
  italianLeadingZero?: boolean
  rawInput?: string
  extension?: string

  setCountryCode(cc: number): this {
    this.countryCode = cc
    return this
  }

  setNationalNumber(nn: number | bigint | string): this {
    this.nationalNumber = String(nn)
    return this
  }

  setItalianLeadingZero(value: boolean): this {
    this.italianLeadingZero = value
    return this
  }

  setRawInput(input: string): this {
    this.rawInput = input
    return this
  }

  setExtension(ext: string): this {
    this.extension = ext
    return this
  }

  /**
   * Convert to E.164 string for parsing
   */
  toE164(): string {
    let result = `+${String(this.countryCode)}`
    if (this.italianLeadingZero) {
      result += "0"
    }
    result += this.nationalNumber
    if (this.extension) {
      result += `;ext=${this.extension}`
    }
    return result
  }

  /**
   * Check equality with another phone number
   */
  equals(other: PhoneNumberFixture | ParsedPhoneNumber): boolean {
    const otherNational = other.nationalNumber
    return this.countryCode === other.countryCode && this.nationalNumber === otherNational
  }
}

/**
 * Create a new mutable phone number for testing
 */
export function createPhoneNumber(): MutablePhoneNumber {
  return new MutablePhoneNumber()
}

/**
 * Check equality between two phone numbers
 */
export function phoneNumberEquals(
  a: PhoneNumberFixture | ParsedPhoneNumber,
  b: PhoneNumberFixture | ParsedPhoneNumber
): boolean {
  return a.countryCode === b.countryCode && a.nationalNumber === b.nationalNumber
}

/**
 * Convert a fixture to E.164 string
 */
export function fixtureToE164(fixture: PhoneNumberFixture): string {
  let result = `+${String(fixture.countryCode)}`
  if (fixture.italianLeadingZero) {
    result += "0"
  }
  result += fixture.nationalNumber
  return result
}

/**
 * Format a phone number fixture
 */
export async function formatNumber(
  number: PhoneNumberFixture | ParsedPhoneNumber | string,
  fmt: PhoneNumberFormat
): Promise<string> {
  let phoneString: string
  if (typeof number === "string") {
    phoneString = number
  } else if (number instanceof MutablePhoneNumber) {
    phoneString = number.toE164()
  } else {
    phoneString = fixtureToE164(number)
  }
  return format(phoneString, fmt)
}

/**
 * Parse and check if result equals expected fixture
 */
export async function parseEquals(
  input: string,
  expected: PhoneNumberFixture,
  region?: string
): Promise<boolean> {
  const result = await parse(input, region ? { defaultRegion: region } : undefined)
  if (!result.isValid) return false
  return (
    result.countryCode === expected.countryCode && result.nationalNumber === expected.nationalNumber
  )
}

/**
 * Helper to convert various number types to E.164 string
 */
function toPhoneString(number: PhoneNumberFixture | ParsedPhoneNumber | string): string {
  if (typeof number === "string") {
    return number
  }
  if (number instanceof MutablePhoneNumber) {
    return number.toE164()
  }
  return fixtureToE164(number)
}

/**
 * Check if a number is valid
 */
export async function isValidNumber(
  number: PhoneNumberFixture | ParsedPhoneNumber | string
): Promise<boolean> {
  const result = await validate(toPhoneString(number))
  return result.isValid
}

/**
 * Check if a number is valid for a specific region
 */
export async function isValidForRegion(
  number: PhoneNumberFixture | ParsedPhoneNumber | string,
  region: string
): Promise<boolean> {
  const result = await parse(toPhoneString(number), { defaultRegion: region })
  return result.isValid && result.regionCode === region
}

/**
 * Get phone number type
 */
export async function getNumberType(
  number: PhoneNumberFixture | ParsedPhoneNumber | string
): Promise<PhoneNumberType> {
  return getType(toPhoneString(number))
}

/**
 * Parse error types (compatible with libphonenumber)
 */
export const ParseError = {
  INVALID_COUNTRY_CODE: "INVALID_COUNTRY_CODE",
  NOT_A_NUMBER: "NOT_A_NUMBER",
  TOO_SHORT_AFTER_IDD: "TOO_SHORT_AFTER_IDD",
  TOO_SHORT_NSN: "TOO_SHORT_NSN",
  TOO_LONG: "TOO_LONG"
} as const

// Re-export commonly used items
export { parse, validate, format, getType, PhoneNumberType, PhoneNumberFormat }
export { clearMetadataCache, registerMetadata }
