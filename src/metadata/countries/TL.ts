/**
 * Phone number metadata for TL
 * Country calling code: +670
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TL",
  countryCode: 670,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^7\d{7}|(?:[2-47]\d|[89]0)\d{5}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern: /^(?:2[1-5]|3[1-9]|4[1-4])\d{5}$/,
    example: "2112345",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^7[2-8]\d{6}$/,
    example: "77212345",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[2-489]|70/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^7/
    }
  ]
}

export default metadata
