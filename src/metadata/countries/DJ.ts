/**
 * Phone number metadata for DJ
 * Country calling code: +253
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "DJ",
  countryCode: 253,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:2\\d|77)\\d{6}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "2(?:1[2-5]|7[45])\\d{5}",
    example: "21360003",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "77\\d{6}",
    example: "77831001",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[27]"]
    }
  ]
}

export default metadata
