/**
 * Phone number metadata for GH
 * Country calling code: +233
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GH",
  countryCode: 233,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[235]\d{3}|800)\d{5}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern:
      /^3082[0-5]\d{4}|3(?:0(?:[237]\d|8[01])|[167](?:2[0-6]|7\d|80)|2(?:2[0-5]|7\d|80)|3(?:2[0-3]|7\d|80)|4(?:2[013-9]|3[01]|7\d|80)|5(?:2[0-7]|7\d|80)|8(?:2[0-2]|7\d|80)|9(?:[28]0|7\d))\d{5}$/,
    example: "302345678",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^(?:2(?:[0346-9]\d|5[67])|5(?:[03-7]\d|9[1-9]))\d{6}$/,
    example: "231234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[237]|8[0-2]/
    },
    {
      pattern: /^(\d{3})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^8/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[235]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
