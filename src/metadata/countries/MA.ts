/**
 * Phone number metadata for MA
 * Country calling code: +212
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MA",
  countryCode: 212,
  internationalPrefix: "00",
  nationalPrefix: "0",
  mainCountryForCode: true,
  generalDesc: {
    pattern: "[5-8]\\d{8}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "5(?:(?:18|4[0679]|5[03])\\d|2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9]))\\d{5}",
    example: "520123456",
    possibleLengths: [9]
  },
  mobile: {
    pattern: "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}",
    example: "650123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}",
    example: "592401234",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["5[45]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{5})",
      format: "$1-$2",
      leadingDigits: ["5(?:[19]|2[2-46-9]|3[3-9])|8(?:0[89]|92)"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{7})",
      format: "$1-$2",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{6})",
      format: "$1-$2",
      leadingDigits: ["[5-7]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
