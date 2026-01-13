/**
 * Phone number metadata for ZM
 * Country calling code: +260
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ZM",
  countryCode: 260,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^800\d{6}|(?:21|[579]\d|63)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^21[1-8]\d{6}$/,
    example: "211234567",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: /^(?:[59][5-8]|7[5-9])\d{7}$/,
    example: "955123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^63\d{7}$/,
    example: "630123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["[1-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[28]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["[579]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
