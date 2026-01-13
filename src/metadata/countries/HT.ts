/**
 * Phone number metadata for HT
 * Country calling code: +509
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "HT",
  countryCode: 509,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[2-589]\\d{7}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "2(?:2\\d|5[1-5]|81|9[149])\\d{5}",
    example: "22453300",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "(?:[34]\\d|5[56])\\d{6}",
    example: "34101234",
    possibleLengths: [8]
  },
  voip: {
    pattern: "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",
    example: "98901234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-589]"]
    }
  ]
}

export default metadata
