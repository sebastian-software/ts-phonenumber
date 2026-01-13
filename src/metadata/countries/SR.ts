/**
 * Phone number metadata for SR
 * Country calling code: +597
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SR",
  countryCode: 597,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[2-5]|[6-8]\d|90)\d{5}$/,
    possibleLengths: 192 // bits: 6,7
  },
  fixedLine: {
    pattern: /^(?:2[1-3]|3[0-7]|4\d|5[2-58])\d{4}$/,
    example: "211234",
    possibleLengths: 64 // bits: 6
  },
  mobile: {
    pattern: /^(?:6[08]|7[124-7]|8[1-9])\d{5}$/,
    example: "7412345",
    possibleLengths: 128 // bits: 7
  },
  voip: {
    pattern: /^56\d{4}$/,
    example: "561234",
    possibleLengths: 64 // bits: 6
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{2})$/,
      format: "$1-$2-$3",
      leadingDigits: /^56/
    },
    {
      pattern: /^(\d{3})(\d{3})$/,
      format: "$1-$2",
      leadingDigits: /^[2-5]/
    },
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1-$2",
      leadingDigits: /^[6-9]/
    }
  ]
}

export default metadata
