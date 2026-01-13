/**
 * Phone number metadata for BE
 * Country calling code: +32
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BE",
  countryCode: 32,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^4\d{8}|[1-9]\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^80[2-8]\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\d|6[013-57-9]|71|8[1-79]|9[2-4])\d{6}$/,
    example: "12345678",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^4[5-9]\d{7}$/,
    example: "470123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["(?:80|9)0"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[239]|4[23]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[15-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["4"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
