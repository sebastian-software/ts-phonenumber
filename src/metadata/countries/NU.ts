/**
 * Phone number metadata for NU
 * Country calling code: +683
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NU",
  countryCode: 683,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:[4-7]|888\\d)\\d{3}",
    possibleLengths: [4, 7]
  },
  fixedLine: {
    pattern: "[47]\\d{3}",
    example: "7012",
    possibleLengths: [4]
  },
  mobile: {
    pattern: "(?:[56]|888[1-9])\\d{3}",
    example: "8884012",
    possibleLengths: [4, 7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
