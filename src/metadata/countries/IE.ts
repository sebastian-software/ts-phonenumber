/**
 * Phone number metadata for IE
 * Country calling code: +353
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IE",
  countryCode: 353,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
    possibleLengths: [7, 8, 9, 10]
  },
  fixedLine: {
    pattern:
      "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",
    example: "2212345",
    possibleLengths: [7, 8, 9, 10],
    possibleLengthsLocalOnly: [5, 6]
  },
  mobile: {
    pattern: "8(?:22|[35-9]\\d)\\d{6}",
    example: "850123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: "76\\d{7}",
    example: "761234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["2[24-9]|47|58|6[237-9]|9[35-9]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["[45]0"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d)(\\d{3,4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["1"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2569]|4[1-69]|7[14]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["70"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["81"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[78]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1"]
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["4"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
