/**
 * Phone number metadata for PY
 * Country calling code: +595
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PY",
  countryCode: 595,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
    possibleLengths: [7, 8, 9]
  },
  fixedLine: {
    pattern:
      "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",
    example: "212345678",
    possibleLengths: [7, 8, 9],
    possibleLengthsLocalOnly: [5, 6]
  },
  mobile: {
    pattern: "9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}",
    example: "961456789",
    possibleLengths: [9]
  },
  voip: {
    pattern: "8700[0-4]\\d{4}",
    example: "870012345",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3,6})",
      format: "$1 $2",
      leadingDigits: ["[2-9]0"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{7})",
      format: "$1",
      leadingDigits: ["[15]"]
    },
    {
      pattern: "(\\d{2})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{3})(\\d{4,5})",
      format: "$1 $2",
      leadingDigits: ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["87"]
    },
    {
      pattern: "(\\d{3})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["9(?:[5-79]|8[1-7])"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-8]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["9"]
    }
  ]
}

export default metadata
