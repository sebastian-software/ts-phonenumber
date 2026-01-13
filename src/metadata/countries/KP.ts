/**
 * Phone number metadata for KP
 * Country calling code: +850
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KP",
  countryCode: 850,
  internationalPrefix: "00|99",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^85\d{6}|(?:19\d|[2-7])\d{7}$/,
    possibleLengths: [8, 10]
  },
  fixedLine: {
    pattern: /^(?:(?:195|2)\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\d{6}$/,
    example: "21234567",
    possibleLengths: [8, 10],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern: /^19[1-3]\d{7}$/,
    example: "1921234567",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-7]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["1"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
