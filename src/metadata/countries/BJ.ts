/**
 * Phone number metadata for BJ
 * Country calling code: +229
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BJ",
  countryCode: 229,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:01\\d|8)\\d{7}",
    possibleLengths: [8, 10]
  },
  fixedLine: {
    pattern: "012\\d{7}",
    example: "0120211234",
    possibleLengths: [10]
  },
  mobile: {
    pattern: "01(?:2[5-9]|[4-69]\\d)\\d{6}",
    example: "0195123456",
    possibleLengths: [10]
  },
  voip: {
    pattern: "857[58]\\d{4}",
    example: "85751234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4 $5",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
