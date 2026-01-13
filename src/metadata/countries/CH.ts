/**
 * Phone number metadata for CH
 * Country calling code: +41
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CH",
  countryCode: 41,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "8\\d{11}|[2-9]\\d{8}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",
    example: "212345678",
    possibleLengths: [9]
  },
  mobile: {
    pattern: "(?:6[89]|7[235-9])\\d{7}",
    example: "781234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8[047]|90"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[2-79]|81"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4 $5",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
