/**
 * Phone number metadata for TV
 * Country calling code: +688
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TV",
  countryCode: 688,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:2|7\\d\\d|90)\\d{4}",
    possibleLengths: [5, 6, 7]
  },
  fixedLine: {
    pattern: "2[02-9]\\d{3}",
    example: "20123",
    possibleLengths: [5]
  },
  mobile: {
    pattern: "(?:7[01]\\d|90)\\d{4}",
    example: "901234",
    possibleLengths: [6, 7]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["2"]
    },
    {
      pattern: "(\\d{2})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["90"]
    },
    {
      pattern: "(\\d{2})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["7"]
    }
  ]
}

export default metadata
