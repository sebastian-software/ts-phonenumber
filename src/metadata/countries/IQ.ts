/**
 * Phone number metadata for IQ
 * Country calling code: +964
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IQ",
  countryCode: 964,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:1|7\d\d)\d{7}|[2-6]\d{7,8}$/,
    possibleLengths: 1792 // bits: 8,9,10
  },
  fixedLine: {
    pattern: /^1\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\d{6,7}$/,
    example: "12345678",
    possibleLengths: 768, // bits: 8,9
    possibleLengthsLocalOnly: 192 // bits: 6,7
  },
  mobile: {
    pattern: /^7[3-9]\d{8}$/,
    example: "7912345678",
    possibleLengths: 1024 // bits: 10
  },
  formats: [
    {
      pattern: /^(\d)(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2-6]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^7/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
