/**
 * Phone number metadata for CM
 * Country calling code: +237
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CM",
  countryCode: 237,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[26]\\d{8}|88\\d{6,7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: "2(?:22|33)\\d{6}",
    example: "222123456",
    possibleLengths: [9]
  },
  mobile: {
    pattern: "(?:24[23]|6(?:[25-9]\\d|40))\\d{6}",
    example: "671234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["88"]
    },
    {
      pattern: "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4 $5",
      leadingDigits: ["[26]|88"]
    }
  ]
}

export default metadata
