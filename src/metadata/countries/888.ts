/**
 * Phone number metadata for 888
 * Country calling code: +888
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "888",
  countryCode: 888,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "\\d{11}",
    possibleLengths: [11]
  },
  uan: {
    pattern: "\\d{11}",
    example: "12345678901"
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{5})",
      format: "$1 $2 $3"
    }
  ]
}

export default metadata
