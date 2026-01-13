/**
 * Phone number metadata for CG
 * Country calling code: +242
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CG",
  countryCode: 242,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^222\d{6}|(?:0\d|80)\d{7}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^222[1-589]\d{5}$/,
    example: "222123456",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^026(?:1[0-5]|6[6-9])\d{4}|0(?:[14-6]\d\d|2(?:40|5[5-8]|6[07-9]))\d{5}$/,
    example: "061234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d)(\d{4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[02]/
    }
  ]
}

export default metadata
