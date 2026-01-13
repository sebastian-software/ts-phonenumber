/**
 * Phone number metadata for DZ
 * Country calling code: +213
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "DZ",
  countryCode: 213,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[1-4]|[5-79]\d|80)\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^9619\d{5}|(?:1\d|2[013-79]|3[0-8]|4[013-689])\d{6}$/,
    example: "12345678",
    possibleLengths: [8, 9]
  },
  mobile: {
    pattern: /^(?:5(?:4[0-29]|5\d|6[0-3])|6(?:[569]\d|7[0-6])|7[7-9]\d)\d{6}$/,
    example: "551234567",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^98[23]\d{6}$/,
    example: "983123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[1-4]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[5-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
