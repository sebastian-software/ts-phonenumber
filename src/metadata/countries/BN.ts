/**
 * Phone number metadata for BN
 * Country calling code: +673
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BN",
  countryCode: 673,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[2-578]\\d{6}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}",
    example: "2345678",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:22[89]|[78]\\d\\d)\\d{4}",
    example: "7123456",
    possibleLengths: [7]
  },
  voip: {
    pattern: "5[34]\\d{5}",
    example: "5345678",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2-578]"]
    }
  ]
}

export default metadata
