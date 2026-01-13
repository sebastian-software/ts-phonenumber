/**
 * Phone number metadata for AO
 * Country calling code: +244
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AO",
  countryCode: 244,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[29]\d{8}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^2\d(?:[0134][25-9]|[25-9]\d)\d{5}$/,
    example: "222123456",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^9[1-79]\d{7}$/,
    example: "923123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[29]"]
    }
  ]
}

export default metadata
