/**
 * Phone number metadata for 800
 * Country calling code: +800
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "800",
  countryCode: 800,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "(?:00|[1-9]\\d)\\d{6}",
    possibleLengths: [8]
  },
  tollFree: {
    pattern: "(?:00|[1-9]\\d)\\d{6}",
    example: "12345678"
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["\\d"]
    }
  ]
}

export default metadata
