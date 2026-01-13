/**
 * Phone number metadata for AM
 * Country calling code: +374
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AM",
  countryCode: 374,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[1-489]\\d|55|60|77)\\d{6}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",
    example: "10123456",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [5, 6]
  },
  mobile: {
    pattern: "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",
    example: "77123456",
    possibleLengths: [8]
  },
  voip: {
    pattern: "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[0-2])\\d{4}",
    example: "60271234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[89]0"],
      nationalPrefixFormattingRule: "$NP $FG"
    },
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["2|3[12]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["1|47"],
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[3-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
