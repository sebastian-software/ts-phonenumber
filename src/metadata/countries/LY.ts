/**
 * Phone number metadata for LY
 * Country calling code: +218
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LY",
  countryCode: 218,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[2-9]\d{8}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern:
      /^(?:2(?:0[56]|[1-6]\d|7[124579]|8[124])|3(?:1\d|2[2356])|4(?:[17]\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\d|5[2-57]|8[1-5])|7(?:[13]\d|2[13-79])|8(?:[124]\d|5[124]|84))\d{6}$/,
    example: "212345678",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^9[1-6]\d{7}$/,
    example: "912345678",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{7})$/,
      format: "$1-$2",
      leadingDigits: /^[2-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
