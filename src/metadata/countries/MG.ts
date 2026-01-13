/**
 * Phone number metadata for MG
 * Country calling code: +261
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MG",
  countryCode: 261,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([24-9]\\d{6})$|0",
  nationalPrefixTransformRule: "20$1",
  generalDesc: {
    pattern: /^[23]\d{8}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^2072[29]\d{4}|20(?:2\d|4[47]|5[3467]|6[279]|7[356]|8[268]|9[2457])\d{5}$/,
    example: "202123456",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^3[2-9]\d{7}$/,
    example: "321234567",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^22\d{7}$/,
    example: "221234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{3})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[23]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
