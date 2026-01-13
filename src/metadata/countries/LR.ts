/**
 * Phone number metadata for LR
 * Country calling code: +231
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LR",
  countryCode: 231,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[2457]\d|33|88)\d{7}|(?:2\d|[4-6])\d{6}$/,
    possibleLengths: [7, 8, 9]
  },
  fixedLine: {
    pattern: /^2\d{7}$/,
    example: "21234567",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:(?:(?:22|33)0|555|7(?:6[01]|7\d)|88\d)\d|4(?:240|[67]))\d{5}|[56]\d{6}$/,
    example: "770123456",
    possibleLengths: [7, 9]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["4[67]|[56]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-578]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
