/**
 * Phone number metadata for NG
 * Country calling code: +234
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NG",
  countryCode: 234,
  internationalPrefix: "009",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:20|9\d)\d{8}|[78]\d{9,13}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^20(?:[1259]\d|3[013-9]|4[1-8]|6[024-689]|7[1-79]|8[2-9])\d{6}$/,
    example: "2033123456",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern:
      /^(?:702[0-24-9]|819[01])\d{6}|(?:7(?:0[13-9]|[12]\d)|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-6]))\d{7}$/,
    example: "8021234567",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[7-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["20[129]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{2})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{4})(\\d{4,5})",
      format: "$1 $2 $3",
      leadingDigits: ["[78]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{5})(\\d{5,6})",
      format: "$1 $2 $3",
      leadingDigits: ["[78]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
