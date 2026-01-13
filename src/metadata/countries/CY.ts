/**
 * Phone number metadata for CY
 * Country calling code: +357
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CY",
  countryCode: 357,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:[279]\\d|[58]0)\\d{6}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "2[2-6]\\d{6}",
    example: "22345678",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "9(?:10|[4-79]\\d)\\d{5}",
    example: "96123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[257-9]"]
    }
  ]
}

export default metadata
