/**
 * Phone number metadata for XK
 * Country calling code: +383
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "XK",
  countryCode: 383,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^2\d{7,8}|3\d{7,11}|(?:4\d\d|[89]00)\d{5}$/,
    possibleLengths: [8, 9, 10, 11, 12]
  },
  fixedLine: {
    pattern: /^38\d{6,10}|(?:2[89]|39)(?:0\d{5,6}|[1-9]\d{5})$/,
    example: "28012345",
    possibleLengths: [8, 9, 10, 11, 12]
  },
  mobile: {
    pattern: /^4[3-9]\d{6}$/,
    example: "43201234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["[89]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-4]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["2|39"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{7,10})",
      format: "$1 $2",
      leadingDigits: ["3"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
