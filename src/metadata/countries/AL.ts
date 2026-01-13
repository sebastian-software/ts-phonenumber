/**
 * Phone number metadata for AL
 * Country calling code: +355
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AL",
  countryCode: 355,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern:
      "4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}",
    example: "22345678",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [5, 6, 7]
  },
  mobile: {
    pattern: "6(?:[78][2-9]|9\\d)\\d{6}",
    example: "672123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["80|9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["4[2-6]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[2358][2-5]|4"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["[23578]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["6"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
