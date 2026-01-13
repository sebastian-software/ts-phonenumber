/**
 * Phone number metadata for IO
 * Country calling code: +246
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IO",
  countryCode: 246,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^3\d{6}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^37\d{5}$/,
    example: "3709100",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^38\d{5}$/,
    example: "3801234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^3/
    }
  ]
}

export default metadata
