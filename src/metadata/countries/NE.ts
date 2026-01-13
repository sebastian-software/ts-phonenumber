/**
 * Phone number metadata for NE
 * Country calling code: +227
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NE",
  countryCode: 227,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[027-9]\d{7}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern:
      /^2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\d{4}$/,
    example: "20201234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:23|7[0467]|[89]\d)\d{6}$/,
    example: "93123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^08/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[089]|2[013]|7[0467]/
    }
  ]
}

export default metadata
