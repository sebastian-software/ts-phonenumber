/**
 * Phone number metadata for CK
 * Country calling code: +682
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CK",
  countryCode: 682,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[2-578]\d{4}$/,
    possibleLengths: [5]
  },
  fixedLine: {
    pattern: /^(?:2\d|3[13-7]|4[1-5])\d{3}$/,
    example: "21234",
    possibleLengths: [5]
  },
  mobile: {
    pattern: /^[578]\d{4}$/,
    example: "71234",
    possibleLengths: [5]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["[2-578]"]
    }
  ]
}

export default metadata
