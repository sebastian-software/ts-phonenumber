/**
 * Phone number metadata for CZ
 * Country calling code: +420
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CZ",
  countryCode: 420,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[2-578]\d|60)\d{7}|9\d{8,11}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^(?:2\d|3[1257-9]|4[16-9]|5[13-9])\d{7}$/,
    example: "212345678",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^7(?:060\d|19(?:[0-5]\d|6[0-6]))\d{4}|(?:60[1-8]|7(?:0[2-5]|[2379]\d))\d{6}$/,
    example: "601123456",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^9[17]0\d{6}$/,
    example: "910123456",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2-8]|9[015-7]/
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^96/
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^9/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^9/
    }
  ]
}

export default metadata
