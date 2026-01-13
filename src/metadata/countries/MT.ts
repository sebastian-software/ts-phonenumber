/**
 * Phone number metadata for MT
 * Country calling code: +356
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MT",
  countryCode: 356,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}",
    example: "21001234",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}",
    example: "96961234",
    possibleLengths: [8]
  },
  voip: {
    pattern: "3550\\d{4}",
    example: "35501234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2357-9]"]
    }
  ]
}

export default metadata
