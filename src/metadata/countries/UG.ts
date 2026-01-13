/**
 * Phone number metadata for UG
 * Country calling code: +256
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "UG",
  countryCode: 256,
  internationalPrefix: "00[057]",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^800\d{6}|(?:[29]0|[347]\d)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      /^20(?:(?:240|30[67])\d|6(?:00[0-2]|30[0-4]))\d{3}|(?:20(?:[017]\d|2[5-9]|3[1-4]|5[0-4]|6[15-9])|[34]\d{3})\d{5}$/,
    example: "312345678",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [5, 6, 7]
  },
  mobile: {
    pattern: /^72[48]0\d{5}|7(?:[014-8]\d|2[0167]|3[06]|9[0-2589])\d{6}$/,
    example: "712345678",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["202", "2024"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[27-9]|4(?:6[45]|[7-9])"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["[34]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
