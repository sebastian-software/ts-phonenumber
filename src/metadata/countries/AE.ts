/**
 * Phone number metadata for AE
 * Country calling code: +971
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AE",
  countryCode: 971,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: "[2-4679][2-8]\\d{6}",
    example: "22345678",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "5[024-68]\\d{7}",
    example: "501234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2,9})",
      format: "$1 $2",
      leadingDigits: ["60|8"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[236]|[479][2-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d)(\\d{5})",
      format: "$1 $2 $3",
      leadingDigits: ["[479]"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["5"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
