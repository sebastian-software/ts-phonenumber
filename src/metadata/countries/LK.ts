/**
 * Phone number metadata for LK
 * Country calling code: +94
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LK",
  countryCode: 94,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[1-9]\\d{8}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",
    example: "112345678",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "7(?:[0-25-8]\\d|4[0-4])\\d{6}",
    example: "712345678",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["7"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-689]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
