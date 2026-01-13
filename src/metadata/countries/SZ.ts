/**
 * Phone number metadata for SZ
 * Country calling code: +268
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SZ",
  countryCode: 268,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^0800\d{4}|(?:[237]\d|900)\d{6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^[23][2-5]\d{6}$/,
    example: "22171234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^7[5-9]\d{6}$/,
    example: "76123456",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^70\d{6}$/,
    example: "70012345",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[0237]/
    },
    {
      pattern: /^(\d{5})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^9/
    }
  ]
}

export default metadata
