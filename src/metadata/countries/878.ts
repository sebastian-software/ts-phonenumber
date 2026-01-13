/**
 * Phone number metadata for 878
 * Country calling code: +878
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "878",
  countryCode: 878,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "10\\d{10}",
    possibleLengths: [12]
  },
  voip: {
    pattern: "10\\d{10}",
    example: "101234567890"
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{5})(\\d{5})",
      format: "$1 $2 $3",
      leadingDigits: ["1"]
    }
  ]
}

export default metadata
