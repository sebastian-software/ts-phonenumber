/**
 * Phone number metadata for HU
 * Country calling code: +36
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "HU",
  countryCode: 36,
  internationalPrefix: "00",
  nationalPrefix: "06",
  generalDesc: {
    pattern: /^[235-7]\d{8}|[1-9]\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^(?:1\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\d{6}$/,
    example: "12345678",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern: /^(?:[257]0|3[01])\d{7}$/,
    example: "201234567",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^21\d{7}$/,
    example: "211234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["1"],
      nationalPrefixFormattingRule: "($NP $FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
      nationalPrefixFormattingRule: "($NP $FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-9]"],
      nationalPrefixFormattingRule: "$NP $FG"
    }
  ]
}

export default metadata
