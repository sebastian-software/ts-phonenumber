/**
 * Phone number metadata for CR
 * Country calling code: +506
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CR",
  countryCode: 506,
  internationalPrefix: "00",
  nationalPrefixForParsing: "(19(?:0[0-2468]|1[09]|20|66|77|99))",
  generalDesc: {
    pattern: /^(?:8\d|90)\d{8}|(?:[24-8]\d{3}|3005)\d{4}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^210[7-9]\d{4}|2(?:[024-7]\d|1[1-9])\d{5}$/,
    example: "22123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:3005\d|6500[01])\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\d{6}$/,
    example: "83123456",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^(?:210[0-6]|4\d{3}|5100)\d{4}$/,
    example: "40001234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2-7]|8[3-9]"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1-$2-$3",
      leadingDigits: ["[89]"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    }
  ]
}

export default metadata
