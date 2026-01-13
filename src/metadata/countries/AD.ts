/**
 * Phone number metadata for AD
 * Country calling code: +376
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AD",
  countryCode: 376,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:1|6\d)\d{7}|[135-9]\d{5}$/,
    possibleLengths: 576 // bits: 6,9
  },
  fixedLine: {
    pattern: /^[78]\d{5}$/,
    example: "712345",
    possibleLengths: 64 // bits: 6
  },
  mobile: {
    pattern: /^690\d{6}|[356]\d{5}$/,
    example: "312345",
    possibleLengths: 576 // bits: 6,9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})$/,
      format: "$1 $2",
      leadingDigits: /^[135-9]/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^1/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^6/
    }
  ]
}

export default metadata
