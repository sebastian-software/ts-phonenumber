/**
 * Phone number metadata for KM
 * Country calling code: +269
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KM",
  countryCode: 269,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[3478]\\d{6}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: "7[4-7]\\d{5}",
    example: "7712345",
    possibleLengths: [7],
    possibleLengthsLocalOnly: [4]
  },
  mobile: {
    pattern: "[34]\\d{6}",
    example: "3212345",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["[3478]"]
    }
  ]
}

export default metadata
