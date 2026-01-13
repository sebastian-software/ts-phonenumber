/**
 * Phone number metadata for SC
 * Country calling code: +248
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SC",
  countryCode: 248,
  internationalPrefix: "010|0[0-2]",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[2489]\d|64)\d{5}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^4[2-46]\d{5}$/,
    example: "4217123",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^2[125-8]\d{5}$/,
    example: "2510123",
    possibleLengths: 128 // bits: 7
  },
  voip: {
    pattern: /^971\d{4}|(?:64|95)\d{5}$/,
    example: "6412345",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d)(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[246]|9[57]/
    }
  ]
}

export default metadata
