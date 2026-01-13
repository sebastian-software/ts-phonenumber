/**
 * Phone number metadata for KR
 * Country calling code: +82
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KR",
  countryCode: 82,
  internationalPrefix: "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
  nationalPrefix: "0",
  nationalPrefixForParsing: "0(8(?:[1-46-8]|5\\d\\d))?",
  generalDesc: {
    pattern:
      /^00[1-9]\d{8,11}|(?:[12]|5\d{3})\d{7}|[13-6]\d{9}|(?:[1-6]\d|80)\d{7}|[3-6]\d{4,5}|(?:00|7)0\d{8}$/,
    possibleLengths: [5, 6, 8, 9, 10]
  },
  fixedLine: {
    pattern: /^(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\d{2,3}$/,
    example: "22123456",
    possibleLengths: [5, 6, 8, 9, 10],
    possibleLengthsLocalOnly: [3, 4, 7]
  },
  mobile: {
    pattern: /^1(?:05(?:[0-8]\d|9[0-6])|22[13]\d)\d{4,5}|1(?:0[0-46-9]|[16-9]\d|2[013-9])\d{6,7}$/,
    example: "1020000000",
    possibleLengths: [9, 10]
  },
  voip: {
    pattern: /^70\d{8}$/,
    example: "7012345678",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{5})",
      format: "$1",
      leadingDigits: ["1[016-9]1", "1[016-9]11", "1[016-9]114"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3,4})",
      format: "$1-$2",
      leadingDigits: ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["1"]
    },
    {
      pattern: "(\\d)(\\d{3,4})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[36]0|8"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3,4})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[1346]|5[1-5]"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[57]"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{5})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["003", "0030"]
    },
    {
      pattern: "(\\d{2})(\\d{5})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["5"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
    },
    {
      pattern: "(\\d{5})(\\d{3,4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["0"]
    },
    {
      pattern: "(\\d{5})(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
