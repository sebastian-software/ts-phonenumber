/**
 * Phone number metadata for GQ
 * Country calling code: +240
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GQ",
  countryCode: 240,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^222\d{6}|(?:3\d|55|[89]0)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^33[0-24-9]\d[46]\d{4}|3(?:33|5\d)\d[7-9]\d{4}$/,
    example: "333091234",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^(?:222|55\d)\d{6}$/,
    example: "222123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[235]"]
    },
    {
      pattern: "(\\d{3})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[89]"]
    }
  ]
}

export default metadata
