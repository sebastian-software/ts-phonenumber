/**
 * Phone number metadata for LB
 * Country calling code: +961
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LB",
  countryCode: 961,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[27-9]\d{7}|[13-9]\d{6}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern:
      /^7(?:62|8[0-6]|9[04-9])\d{4}|(?:[14-69]\d|2(?:[14-69]\d|[78][1-9])|7[2-57]|8[02-9])\d{5}$/,
    example: "1123456",
    possibleLengths: 384 // bits: 7,8
  },
  mobile: {
    pattern: /^(?:(?:3|81)\d|7(?:[01]\d|6[013-9]|8[7-9]|9[0-4]))\d{5}$/,
    example: "71123456",
    possibleLengths: 384 // bits: 7,8
  },
  formats: [
    {
      pattern: /^(\d)(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[27-9]/
    }
  ]
}

export default metadata
