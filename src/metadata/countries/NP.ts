/**
 * Phone number metadata for NP
 * Country calling code: +977
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NP",
  countryCode: 977,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:1\d|9)\d{9}|[1-9]\d{7}$/,
    possibleLengths: 1280 // bits: 8,10
  },
  fixedLine: {
    pattern:
      /^(?:1[0-6]\d|99[02-6])\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\d{5}$/,
    example: "14567890",
    possibleLengths: 256, // bits: 8
    possibleLengthsLocalOnly: 192 // bits: 6,7
  },
  mobile: {
    pattern: /^9(?:00|6[0-3]|7[0-24-6]|8[0-24-68])\d{7}$/,
    example: "9841234567",
    possibleLengths: 1024 // bits: 10
  },
  formats: [
    {
      pattern: /^(\d)(\d{7})$/,
      format: "$1-$2",
      leadingDigits: /^1[2-6]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{6})$/,
      format: "$1-$2",
      leadingDigits: /^1[01]|[2-8]|9(?:[1-59]|[67][2-6])/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{7})$/,
      format: "$1-$2",
      leadingDigits: /^9/
    },
    {
      pattern: /^(\d{4})(\d{2})(\d{5})$/,
      format: "$1-$2-$3",
      leadingDigits: /^1/
    }
  ]
}

export default metadata
