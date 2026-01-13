/**
 * Phone number metadata for MN
 * Country calling code: +976
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MN",
  countryCode: 976,
  internationalPrefix: "001",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[12]\d{7,9}|[5-9]\d{7}$/,
    possibleLengths: 1792 // bits: 8,9,10
  },
  fixedLine: {
    pattern:
      /^[12]2[1-3]\d{5,6}|(?:(?:[12](?:1|27)|5[368])\d\d|7(?:0(?:[0-5]\d|7[078]|80)|128))\d{4}|[12](?:3[2-8]|4[2-68]|5[1-4689])\d{6,7}$/,
    example: "53123456",
    possibleLengths: 1792, // bits: 8,9,10
    possibleLengthsLocalOnly: 112 // bits: 4,5,6
  },
  mobile: {
    pattern: /^92[0139]\d{5}|(?:5[05]|6[069]|7[28]|8[0135689]|9[013-9])\d{6}$/,
    example: "88123456",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^712[0-79]\d{4}|7(?:1[013-9]|[5-79]\d)\d{5}$/,
    example: "75123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[12]1/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[5-9]/
    },
    {
      pattern: /^(\d{3})(\d{5,6})$/,
      format: "$1 $2",
      leadingDigits: /^[12]2[1-3]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{5,6})$/,
      format: "$1 $2",
      leadingDigits:
        /^(?:[12](?:27|3[2-8]|4[2-68]|5[1-4689])|[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3])/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{5})(\d{4,5})$/,
      format: "$1 $2",
      leadingDigits: /^[12]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
