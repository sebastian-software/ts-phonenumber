/**
 * Phone number metadata for GF
 * Country calling code: +594
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GF",
  countryCode: 594,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[56]94\d|7093)\d{5}|(?:80|9\d)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^594(?:[02-49]\d|1[0-5]|5[6-9]|6[0-3]|80)\d{4}$/,
    example: "594101234",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^(?:694(?:[0-249]\d|3[0-8])|7093[0-3])\d{4}$/,
    example: "694201234",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^9(?:(?:396|76\d)\d|476[0-6])\d{4}$/,
    example: "976012345",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[5-7]|9[47]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[89]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
