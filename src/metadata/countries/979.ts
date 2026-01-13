/**
 * Phone number metadata for 979
 * Country calling code: +979
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "979",
  countryCode: 979,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "[1359]\\d{8}",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [8]
  },
  premiumRate: {
    pattern: "[1359]\\d{8}",
    example: "123456789",
    possibleLengthsLocalOnly: [8]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1359]"]
    }
  ]
}

export default metadata
