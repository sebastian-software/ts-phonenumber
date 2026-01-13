/**
 * Phone number metadata for QA
 * Country calling code: +974
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "QA",
  countryCode: 974,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^800\d{4}|(?:2|800)\d{6}|(?:0080|[3-7])\d{7}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^4(?:(?:[014]\d\d|999)\d|2022)\d{3}$/,
    example: "44123456",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^[35-7]\d{7}$/,
    example: "33123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^2[136]|8/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[3-7]/
    }
  ]
}

export default metadata
