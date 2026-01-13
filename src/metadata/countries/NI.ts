/**
 * Phone number metadata for NI
 * Country calling code: +505
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NI",
  countryCode: 505,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:1800|[25-8]\d{3})\d{4}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^2\d{7}$/,
    example: "21234567",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern:
      /^(?:5(?:5[0-7]|[78]\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\d)\d)\d{5}$/,
    example: "81234567",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[125-8]/
    }
  ]
}

export default metadata
