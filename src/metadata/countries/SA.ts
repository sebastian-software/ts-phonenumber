/**
 * Phone number metadata for SA
 * Country calling code: +966
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SA",
  countryCode: 966,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[15]\d|800|92)\d{7}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^1(?:1\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\d{6}$/,
    example: "112345678",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^579[01]\d{5}|5(?:[013-689]\d|7[0-8])\d{6}$/,
    example: "512345678",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^9/
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^5/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    }
  ]
}

export default metadata
