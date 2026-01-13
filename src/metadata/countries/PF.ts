/**
 * Phone number metadata for PF
 * Country calling code: +689
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PF",
  countryCode: 689,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "4(?:0[4-689]|9[4-68])\\d{5}",
    example: "40412345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "8[7-9]\\d{6}",
    example: "87123456",
    possibleLengths: [8]
  },
  voip: {
    pattern: "499\\d{5}",
    example: "49901234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["44"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["4|8[7-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
