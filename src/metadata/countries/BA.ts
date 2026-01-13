/**
 * Phone number metadata for BA
 * Country calling code: +387
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BA",
  countryCode: 387,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^6\d{8}|(?:[35689]\d|49|70)\d{6}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern:
      /^(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\d{5}$/,
    example: "30212345",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: /^6040\d{5}|6(?:03|[1-356]|44|7\d)\d{6}$/,
    example: "61123456",
    possibleLengths: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1-$2",
      leadingDigits: ["[2-9]"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["6[1-3]|[7-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2-$3",
      leadingDigits: ["[3-5]|6[56]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["6"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
