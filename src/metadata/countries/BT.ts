/**
 * Phone number metadata for BT
 * Country calling code: +975
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BT",
  countryCode: 975,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[178]\d{7}|[2-8]\d{6}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern: /^(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\d{5}$/,
    example: "2345678",
    possibleLengths: 128, // bits: 7
    possibleLengthsLocalOnly: 64 // bits: 6
  },
  mobile: {
    pattern: /^(?:1[67]|[78]7)\d{6}$/,
    example: "17123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})$/,
      format: "$1 $2",
      leadingDigits: /^[2-7]/
    },
    {
      pattern: /^(\d)(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2-6]|7[246]|8[2-4]/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^1[67]|[78]/
    }
  ]
}

export default metadata
