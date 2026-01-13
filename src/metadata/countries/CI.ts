/**
 * Phone number metadata for CI
 * Country calling code: +225
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CI",
  countryCode: 225,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[02]\\d{9}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      "2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|2[245]|3[45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}",
    example: "2123456789",
    possibleLengths: [10]
  },
  mobile: {
    pattern: "0[157]\\d{8}",
    example: "0123456789",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d)(\\d{5})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["2"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{4})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
