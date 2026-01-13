/**
 * Phone number metadata for GL
 * Country calling code: +299
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GL",
  countryCode: 299,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:19|[2-689]\d|70)\d{4}$/,
    possibleLengths: 64 // bits: 6
  },
  fixedLine: {
    pattern: /^(?:19|3[1-7]|[68][1-9]|70|9\d)\d{4}$/,
    example: "321000",
    possibleLengths: 64 // bits: 6
  },
  mobile: {
    pattern: /^[245]\d{5}$/,
    example: "221234",
    possibleLengths: 64 // bits: 6
  },
  voip: {
    pattern: /^3[89]\d{4}$/,
    example: "381234",
    possibleLengths: 64 // bits: 6
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3",
      leadingDigits: /^19|[2-9]/
    }
  ]
}

export default metadata
