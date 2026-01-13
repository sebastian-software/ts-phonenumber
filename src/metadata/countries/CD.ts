/**
 * Phone number metadata for CD
 * Country calling code: +243
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CD",
  countryCode: 243,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:(?:[189]|5\d)\d|2)\d{7}|[1-68]\d{6}$/,
    possibleLengths: 1920 // bits: 7,8,9,10
  },
  fixedLine: {
    pattern: /^(?:(?:12|573)\d\d|276)\d{5}|[1-6]\d{6}$/,
    example: "1234567",
    possibleLengths: 1920 // bits: 7,8,9,10
  },
  mobile: {
    pattern: /^88\d{5}|(?:8[0-69]|9[017-9])\d{7}$/,
    example: "991234567",
    possibleLengths: 640 // bits: 7,9
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^88/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^[1-6]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{3})(\d{3})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^5/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
