/**
 * Phone number metadata for CV
 * Country calling code: +238
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CV",
  countryCode: 238,
  internationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[2-59]\d\d|800)\d{4}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\d|7[1-3]|8[1-5])\d{4}$/,
    example: "2211234",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^(?:36|5[1-389]|9\d)\d{5}$/,
    example: "9911234",
    possibleLengths: 128 // bits: 7
  },
  voip: {
    pattern: /^(?:3[3-5]|4[356])\d{5}$/,
    example: "3401234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{2})(\d{2})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2-589]/
    }
  ]
}

export default metadata
