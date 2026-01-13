/**
 * Phone number metadata for 808
 * Country calling code: +808
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "808",
  countryCode: 808,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "[1-9]\\d{7}",
    possibleLengths: [8]
  },
  sharedCost: {
    pattern: "[1-9]\\d{7}",
    example: "12345678"
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[1-9]"]
    }
  ]
}

export default metadata
