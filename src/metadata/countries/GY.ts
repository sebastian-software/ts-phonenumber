/**
 * Phone number metadata for GY
 * Country calling code: +592
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GY",
  countryCode: 592,
  internationalPrefix: "001",
  generalDesc: {
    pattern: "(?:[2-8]\\d{3}|9008)\\d{3}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern:
      "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\\d{4}",
    example: "2201234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:51[01]|6\\d\\d|7(?:[0-5]\\d|6[0-59]|70))\\d{4}",
    example: "6091234",
    possibleLengths: [7]
  },
  voip: {
    pattern: "515\\d{4}",
    example: "5151234",
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
