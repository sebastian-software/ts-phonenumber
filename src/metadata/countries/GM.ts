/**
 * Phone number metadata for GM
 * Country calling code: +220
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GM",
  countryCode: 220,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[2-9]\\d{6}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern:
      "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8[0-589]\\d\\d)\\d{3}",
    example: "5661234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "556\\d{4}|(?:[23679]\\d|4[015]|5[0-489]|8[67])\\d{5}",
    example: "3012345",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2-9]"]
    }
  ]
}

export default metadata
