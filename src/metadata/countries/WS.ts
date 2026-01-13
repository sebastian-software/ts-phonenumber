/**
 * Phone number metadata for WS
 * Country calling code: +685
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "WS",
  countryCode: 685,
  internationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[2-6]|8\d{5})\d{4}|[78]\d{6}|[68]\d{5}$/,
    possibleLengths: 1248 // bits: 5,6,7,10
  },
  fixedLine: {
    pattern: /^6[1-9]\d{3}|(?:[2-5]|60)\d{4}$/,
    example: "22123",
    possibleLengths: 96 // bits: 5,6
  },
  mobile: {
    pattern: /^(?:7[1-35-8]|8(?:[3-7]|9\d{3}))\d{5}$/,
    example: "7212345",
    possibleLengths: 1152 // bits: 7,10
  },
  formats: [
    {
      pattern: /^(\d{5})$/,
      format: "$1",
      leadingDigits: /^[2-5]|6[1-9]/
    },
    {
      pattern: /^(\d{3})(\d{3,7})$/,
      format: "$1 $2",
      leadingDigits: /^[68]/
    },
    {
      pattern: /^(\d{2})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^7/
    }
  ]
}

export default metadata
