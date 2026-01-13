/**
 * Phone number metadata for LS
 * Country calling code: +266
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LS",
  countryCode: 266,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[256]\d\d|800)\d{5}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^2\d{7}$/,
    example: "22123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^[56]\d{7}$/,
    example: "50123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2568]"]
    }
  ]
}

export default metadata
