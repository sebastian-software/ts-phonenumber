/**
 * Phone number metadata for TN
 * Country calling code: +216
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TN",
  countryCode: 216,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[2-57-9]\d{7}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^81200\d{3}|(?:3[0-2]|7\d)\d{6}$/,
    example: "30010123",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^3(?:001|[12]40)\d{4}|(?:(?:[259]\d|4[0-8])\d|3(?:1[1-35]|6[0-4]|91))\d{5}$/,
    example: "20123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2-57-9]/
    }
  ]
}

export default metadata
