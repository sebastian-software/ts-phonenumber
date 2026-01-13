/**
 * Phone number metadata for MD
 * Country calling code: +373
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MD",
  countryCode: 373,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[235-7]\\d|[89]0)\\d{6}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",
    example: "22212345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "562\\d{5}|(?:6\\d|7[16-9])\\d{6}",
    example: "62112345",
    possibleLengths: [8]
  },
  voip: {
    pattern: "3[08]\\d{6}",
    example: "30123456",
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
      leadingDigits: ["22|3"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[25-7]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
