/**
 * Phone number metadata for BH
 * Country calling code: +973
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BH",
  countryCode: 973,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[136-9]\d{7}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern:
      /^(?:1(?:3[1356]|6[0156]|7\d)\d|6(?:1[16]\d|500|6(?:0\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\d\d|1(?:11|78)))\d{4}$/,
    example: "17001234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern:
      /^(?:3(?:[0-79]\d|8[0-57-9])\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\d|7[0-689])))\d{4}$/,
    example: "36001234",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[13679]|8[02-4679]/
    }
  ]
}

export default metadata
