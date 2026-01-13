/**
 * Phone number metadata for 881
 * Country calling code: +881
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "881",
  countryCode: 881,
  generalDesc: {
    pattern: "6\\d{9}|[0-36-9]\\d{8}",
    possibleLengths: [9, 10]
  },
  mobile: {
    pattern: "6\\d{9}|[0-36-9]\\d{8}",
    example: "612345678"
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{5})",
      format: "$1 $2 $3",
      leadingDigits: ["[0-37-9]"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{5,6})",
      format: "$1 $2 $3",
      leadingDigits: ["6"]
    }
  ]
}

export default metadata
