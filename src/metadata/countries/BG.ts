/**
 * Phone number metadata for BG
 * Country calling code: +359
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BG",
  countryCode: 359,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
    possibleLengths: [6, 7, 8, 9]
  },
  fixedLine: {
    pattern:
      "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",
    example: "2123456",
    possibleLengths: [6, 7, 8],
    possibleLengthsLocalOnly: [4, 5]
  },
  mobile: {
    pattern: "(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}",
    example: "43012345",
    possibleLengths: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{6})",
      format: "$1",
      leadingDigits: ["1"]
    },
    {
      pattern: "(\\d)(\\d)(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["43[1-6]|70[1-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2,3})",
      format: "$1 $2 $3",
      leadingDigits: ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["(?:70|8)0"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["43[1-7]|7"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[48]|9[08]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
