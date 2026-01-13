/**
 * Phone number metadata for VU
 * Country calling code: +678
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VU",
  countryCode: 678,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
    possibleLengths: [5, 7]
  },
  fixedLine: {
    pattern: "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",
    example: "22123",
    possibleLengths: [5]
  },
  mobile: {
    pattern: "(?:[58]\\d|7[013-7])\\d{5}",
    example: "5912345",
    possibleLengths: [7]
  },
  voip: {
    pattern: "9(?:0[1-9]|1[01])\\d{4}",
    example: "9010123",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[57-9]"]
    }
  ]
}

export default metadata
