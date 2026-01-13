/**
 * Phone number metadata for CU
 * Country calling code: +53
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CU",
  countryCode: 53,
  internationalPrefix: "119",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[2-7]|8\d\d)\d{7}|[2-47]\d{6}|[34]\d{5}$/,
    possibleLengths: 1472 // bits: 6,7,8,10
  },
  fixedLine: {
    pattern:
      /^(?:3[23]|4[89])\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\d)\d{6}|(?:2[1-4]|4[1257]|7\d)\d{5,6}$/,
    example: "71234567",
    possibleLengths: 1472, // bits: 6,7,8,10
    possibleLengthsLocalOnly: 48 // bits: 4,5
  },
  mobile: {
    pattern: /^(?:5\d|6[2-4])\d{6}$/,
    example: "51234567",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{4,6})$/,
      format: "$1 $2",
      leadingDigits: /^2[1-4]|[34]/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d)(\d{6,7})$/,
      format: "$1 $2",
      leadingDigits: /^7/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d)(\d{7})$/,
      format: "$1 $2",
      leadingDigits: /^[56]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{7})$/,
      format: "$1 $2",
      leadingDigits: /^8/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
