/**
 * Phone number metadata for 870
 * Country calling code: +870
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "870",
  countryCode: 870,
  generalDesc: {
    pattern: "7\\d{11}|[235-7]\\d{8}",
    possibleLengths: [9, 12]
  },
  mobile: {
    pattern: "(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}",
    example: "301234567"
  },
  voip: {
    pattern: "2\\d{8}",
    example: "201234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[235-7]"]
    }
  ]
}

export default metadata
