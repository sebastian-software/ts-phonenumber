/**
 * Phone number metadata for IR
 * Country calling code: +98
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IR",
  countryCode: 98,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
    possibleLengths: [6, 7, 10]
  },
  fixedLine: {
    pattern:
      "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|(?:12\\d|30[0-2])\\d|2(?:121|[2689]0\\d)|4(?:111|40\\d))\\d{4}",
    example: "2123456789",
    possibleLengths: [6, 7, 10],
    possibleLengthsLocalOnly: [4, 5, 8]
  },
  mobile: {
    pattern:
      "9(?:(?:0[0-5]|[13]\\d|2[0-3])\\d\\d|9(?:[0-46]\\d\\d|5(?:10|5\\d)|8(?:[12]\\d|88)|9(?:[0159]\\d|21|69|77|8[7-9])))\\d{5}",
    example: "9123456789",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{4,5})",
      format: "$1",
      leadingDigits: ["96"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{4,5})",
      format: "$1 $2",
      leadingDigits: ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
