/**
 * Phone number metadata for AZ
 * Country calling code: +994
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AZ",
  countryCode: 994,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}",
    example: "123123456",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}",
    example: "401234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["90"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[13-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
