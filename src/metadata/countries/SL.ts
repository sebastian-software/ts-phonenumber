/**
 * Phone number metadata for SL
 * Country calling code: +232
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SL",
  countryCode: 232,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[237-9]\\d|66)\\d{6}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "22[2-4][2-9]\\d{4}",
    example: "22221234",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: "(?:25|3[0-5]|66|7[1-9]|8[08]|9[09])\\d{6}",
    example: "25123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[236-9]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    }
  ]
}

export default metadata
