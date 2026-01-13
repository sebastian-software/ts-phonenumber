/**
 * Phone number metadata for MW
 * Country calling code: +265
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MW",
  countryCode: 265,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
    possibleLengths: [7, 9]
  },
  fixedLine: {
    pattern: "(?:1[2-9]|2[12]\\d\\d)\\d{5}",
    example: "1234567",
    possibleLengths: [7, 9]
  },
  mobile: {
    pattern: "111\\d{6}|(?:31|77|[89][89])\\d{7}",
    example: "991234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1[2-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["2"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[137-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
