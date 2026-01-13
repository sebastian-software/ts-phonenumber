/**
 * Phone number metadata for GT
 * Country calling code: +502
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GT",
  countryCode: 502,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "[267][2-9]\\d{6}",
    example: "22456789",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "(?:[3-5]\\d\\d|80[0-4])\\d{5}",
    example: "51234567",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2-8]"]
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["1"]
    }
  ]
}

export default metadata
