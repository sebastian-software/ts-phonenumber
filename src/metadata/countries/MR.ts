/**
 * Phone number metadata for MR
 * Country calling code: +222
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MR",
  countryCode: 222,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:[2-4]\\d\\d|800)\\d{5}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "(?:25[08]|35\\d|45[1-7])\\d{5}",
    example: "35123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "[2-4][0-46-9]\\d{6}",
    example: "22123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[2-48]"]
    }
  ]
}

export default metadata
