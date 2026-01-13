/**
 * Phone number metadata for YE
 * Country calling code: +967
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "YE",
  countryCode: 967,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
    possibleLengths: [7, 8, 9]
  },
  fixedLine: {
    pattern: "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}",
    example: "1234567",
    possibleLengths: [7, 8],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: "7[01378]\\d{7}",
    example: "712345678",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-6]|7(?:[24-6]|8[0-7])"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["7"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
