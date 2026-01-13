/**
 * Phone number metadata for NO
 * Country calling code: +47
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NO",
  countryCode: 47,
  internationalPrefix: "00",
  mainCountryForCode: true,
  leadingDigits: /^[02-689]|7[0-8]/,
  generalDesc: {
    pattern: /^(?:0|[2-9]\d{3})\d{4}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\d{6}$/,
    example: "21234567",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:4[015-8]|9\d)\d{6}$/,
    example: "40612345",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^85[0-5]\d{5}$/,
    example: "85012345",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{2})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[2-79]/
    }
  ]
}

export default metadata
