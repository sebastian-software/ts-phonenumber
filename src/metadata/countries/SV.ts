/**
 * Phone number metadata for SV
 * Country calling code: +503
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SV",
  countryCode: 503,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[25-7]\d{7}|(?:80\d|900)\d{4}(?:\d{4})?$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern:
      /^2(?:79(?:0[0347-9]|[1-9]\d)|89(?:0[024589]|[1-9]\d))\d{3}|2(?:[1-69]\d|[78][0-8])\d{5}$/,
    example: "21234567",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^[5-7]\d{7}$/,
    example: "70123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[89]/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[25-7]/
    },
    {
      pattern: /^(\d{3})(\d{4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]/
    }
  ]
}

export default metadata
