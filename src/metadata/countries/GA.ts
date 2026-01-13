/**
 * Phone number metadata for GA
 * Country calling code: +241
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GA",
  countryCode: 241,
  internationalPrefix: "00",
  nationalPrefixForParsing: "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
  nationalPrefixTransformRule: "$1",
  generalDesc: {
    pattern: /^(?:[067]\d|11)\d{6}|[2-7]\d{6}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern: /^[01]1\d{6}$/,
    example: "01441234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:(?:0[2-7]|7[467])\d|6(?:0[0-4]|10|[256]\d))\d{5}|[2-7]\d{6}$/,
    example: "06031234",
    possibleLengths: 384 // bits: 7,8
  },
  formats: [
    {
      pattern: /^(\d)(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[2-7]/,
      nationalPrefixFormattingRule: "0$FG"
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^0/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^11|[67]/,
      nationalPrefixFormattingRule: "0$FG"
    }
  ]
}

export default metadata
