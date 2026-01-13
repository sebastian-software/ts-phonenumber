/**
 * Phone number metadata for PG
 * Country calling code: +675
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PG",
  countryCode: 675,
  internationalPrefix: "00|140[1-3]",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:180|[78]\d{3})\d{4}|(?:[2-589]\d|64)\d{5}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern: /^(?:(?:3[0-2]|4[257]|5[34]|9[78])\d|64[1-9]|85[02-46-9])\d{4}$/,
    example: "3123456",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^(?:7\d|8[1-48])\d{6}$/,
    example: "70123456",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^2(?:0[0-57]|7[568])\d{4}$/,
    example: "2751234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^18|[2-69]|85/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[78]/
    }
  ]
}

export default metadata
