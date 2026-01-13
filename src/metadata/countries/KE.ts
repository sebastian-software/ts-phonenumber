/**
 * Phone number metadata for KE
 * Country calling code: +254
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KE",
  countryCode: 254,
  internationalPrefix: "000",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
    possibleLengths: [7, 8, 9]
  },
  fixedLine: {
    pattern: "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",
    example: "202012345",
    possibleLengths: [7, 8, 9]
  },
  mobile: {
    pattern: "(?:1(?:0[0-8]|1\\d|2[014]|[34]0)|7\\d\\d)\\d{6}",
    example: "712123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{5,7})",
      format: "$1 $2",
      leadingDigits: ["[24-6]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[17]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[89]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
