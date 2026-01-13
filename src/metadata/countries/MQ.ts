/**
 * Phone number metadata for MQ
 * Country calling code: +596
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MQ",
  countryCode: 596,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "(?:596(?:[03-7]\\d|1[05]|2[7-9]|8[0-39]|9[04-9])|80[6-9]\\d\\d|9(?:477[6-9]|767[4589]))\\d{4}",
    example: "596301234",
    possibleLengths: [9]
  },
  mobile: {
    pattern: "(?:69[67]\\d\\d|7091[0-3])\\d{4}",
    example: "696201234",
    possibleLengths: [9]
  },
  voip: {
    pattern: "9(?:397[0-3]|477[0-5]|76(?:6\\d|7[0-367]))\\d{4}",
    example: "976612345",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[5-79]|8(?:0[6-9]|[36])"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
