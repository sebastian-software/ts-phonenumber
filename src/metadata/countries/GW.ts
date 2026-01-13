/**
 * Phone number metadata for GW
 * Country calling code: +245
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GW",
  countryCode: 245,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[49]\\d{8}|4\\d{6}",
    possibleLengths: [7, 9]
  },
  fixedLine: {
    pattern: "443\\d{6}",
    example: "443201234",
    possibleLengths: [9]
  },
  mobile: {
    pattern: "9(?:5\\d|6[569]|77)\\d{6}",
    example: "955012345",
    possibleLengths: [9]
  },
  voip: {
    pattern: "40\\d{5}",
    example: "4012345",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["40"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[49]"]
    }
  ]
}

export default metadata
