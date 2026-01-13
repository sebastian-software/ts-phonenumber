/**
 * Phone number metadata for SY
 * Country calling code: +963
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SY",
  countryCode: 963,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[1-359]\d{8}|[1-5]\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^21\d{6,7}|(?:1(?:[14]\d|[2356])|2[235]|3(?:[13]\d|4)|4[134]|5[1-3])\d{6}$/,
    example: "112345678",
    possibleLengths: [8, 9],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern: /^(?:50|9[1-9])\d{7}$/,
    example: "944567890",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-4]|5[1-3]"],
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[59]"],
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    }
  ]
}

export default metadata
