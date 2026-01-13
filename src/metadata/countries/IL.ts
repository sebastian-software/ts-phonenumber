/**
 * Phone number metadata for IL
 * Country calling code: +972
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IL",
  countryCode: 972,
  internationalPrefix: "0(?:0|1[2-9])",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^1\d{6}(?:\d{3,5})?|[57]\d{8}|[1-489]\d{7}$/,
    possibleLengths: [8, 9, 11, 12]
  },
  fixedLine: {
    pattern: /^153\d{8,9}|29[1-9]\d{5}|(?:2[0-8]|[3489]\d)\d{6}$/,
    example: "21234567",
    possibleLengths: [8, 11, 12],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      /^55(?:4(?:0[0-2]|[16]0)|57[0-289])\d{4}|5(?:(?:[0-2][02-9]|[36]\d|[49][2-9]|8[3-7])\d|5(?:01|2\d|3[0-3]|4[3-5]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\d{5}$/,
    example: "502345678",
    possibleLengths: [9]
  },
  voip: {
    pattern:
      /^7(?:38(?:[05]\d|8[0138])|8(?:33|55|77|81)\d)\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\d|82|9[2-9])\d{6}$/,
    example: "771234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{3})",
      format: "$1-$2",
      leadingDigits: ["125"]
    },
    {
      pattern: "(\\d{4})(\\d{2})(\\d{2})",
      format: "$1-$2-$3",
      leadingDigits: ["121"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[2-489]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[57]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1-$2-$3",
      leadingDigits: ["12"]
    },
    {
      pattern: "(\\d{4})(\\d{6})",
      format: "$1-$2",
      leadingDigits: ["159"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{3})(\\d{3})",
      format: "$1-$2-$3-$4",
      leadingDigits: ["1[7-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
      format: "$1-$2 $3-$4",
      leadingDigits: ["15"]
    }
  ]
}

export default metadata
