/**
 * Phone number metadata for FR
 * Country calling code: +33
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FR",
  countryCode: 33,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[1-9]\d{8}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^(?:26[013-9]|59[1-35-9])\d{6}|(?:[13]\d|2[0-57-9]|4[1-9]|5[0-8])\d{7}$/,
    example: "123456789",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^(?:6(?:[0-24-8]\d|3[0-8]|9[589])|7[3-9]\d)\d{6}$/,
    example: "612345678",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^9\d{8}$/,
    example: "912345678",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{4})",
      format: "$1",
      leadingDigits: ["10"]
    },
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["1"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP $FG"
    },
    {
      pattern: "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4 $5",
      leadingDigits: ["[1-79]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
