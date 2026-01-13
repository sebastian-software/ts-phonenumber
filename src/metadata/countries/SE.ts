/**
 * Phone number metadata for SE
 * Country calling code: +46
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SE",
  countryCode: 46,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
    possibleLengths: [7, 8, 9]
  },
  fixedLine: {
    pattern:
      "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
    example: "8123456",
    possibleLengths: [7, 8, 9]
  },
  mobile: {
    pattern: "7[02369]\\d{7}",
    example: "701234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2,3})(\\d{2})",
      format: "$1-$2 $3",
      leadingDigits: ["20"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["9(?:00|39|44|9)"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})",
      format: "$1-$2 $3",
      leadingDigits: ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
      format: "$1-$2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2,3})(\\d{2})",
      format: "$1-$2 $3",
      leadingDigits: [
        "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
      ],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2,3})(\\d{3})",
      format: "$1-$2 $3",
      leadingDigits: ["9(?:00|39|44)"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
      format: "$1-$2 $3 $4",
      leadingDigits: ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1-$2 $3 $4",
      leadingDigits: ["10|7"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{3})(\\d{2})",
      format: "$1-$2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1-$2 $3 $4",
      leadingDigits: [
        "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
      ],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
      format: "$1-$2 $3 $4",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1-$2 $3 $4 $5",
      leadingDigits: ["[26]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
