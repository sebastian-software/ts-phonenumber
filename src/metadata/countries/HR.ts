/**
 * Phone number metadata for HR
 * Country calling code: +385
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "HR",
  countryCode: 385,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
    example: "12345678",
    possibleLengths: [8, 9],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern:
      "9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|55|77|9[5-79])))\\d{4}|98\\d{6}",
    example: "921234567",
    possibleLengths: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["6[01]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2,3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{4})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["6|7[245]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-57]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
