/**
 * Phone number metadata for MZ
 * Country calling code: +258
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MZ",
  countryCode: 258,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:2|8\d)\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^2(?:[1346]\d|5[0-2]|[78][12]|93)\d{5}$/,
    example: "21123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^8[2-79]\d{7}$/,
    example: "821234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["2|8[2-79]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
