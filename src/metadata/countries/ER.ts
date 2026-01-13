/**
 * Phone number metadata for ER
 * Country calling code: +291
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ER",
  countryCode: 291,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[178]\\d{6}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",
    example: "8370362",
    possibleLengths: [7],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: "(?:17[1-3]|7\\d\\d)\\d{4}",
    example: "7123456",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[178]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
