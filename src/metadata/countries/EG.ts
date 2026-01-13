/**
 * Phone number metadata for EG
 * Country calling code: +20
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "EG",
  countryCode: 20,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[189]\d{8,9}|[24-6]\d{8}|[135]\d{7}$/,
    possibleLengths: 1792 // bits: 8,9,10
  },
  fixedLine: {
    pattern:
      /^13[23]\d{6}|(?:15|57)\d{6,7}|(?:2\d|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\d{7}$/,
    example: "234567890",
    possibleLengths: 768, // bits: 8,9
    possibleLengthsLocalOnly: 192 // bits: 6,7
  },
  mobile: {
    pattern: /^1[0-25]\d{8}$/,
    example: "1001234567",
    possibleLengths: 1024 // bits: 10
  },
  formats: [
    {
      pattern: /^(\d)(\d{7,8})$/,
      format: "$1 $2",
      leadingDigits: /^[23]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{6,7})$/,
      format: "$1 $2",
      leadingDigits: /^1[35]|[4-6]|8[2468]|9[235-7]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{8})$/,
      format: "$1 $2",
      leadingDigits: /^1/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
