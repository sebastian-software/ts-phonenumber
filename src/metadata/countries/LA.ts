/**
 * Phone number metadata for LA
 * Country calling code: +856
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LA",
  countryCode: 856,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
    possibleLengths: [8, 9, 10]
  },
  fixedLine: {
    pattern: "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",
    example: "21212862",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: "(?:20(?:[23579]\\d|8[78])|30[24]\\d)\\d{6}|30\\d{7}",
    example: "2023123456",
    possibleLengths: [9, 10]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["2[13]|3[14]|[4-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["3"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[23]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
