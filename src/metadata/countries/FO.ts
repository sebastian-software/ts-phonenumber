/**
 * Phone number metadata for FO
 * Country calling code: +298
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FO",
  countryCode: 298,
  internationalPrefix: "00",
  nationalPrefixForParsing: "(10(?:01|[12]0|88))",
  generalDesc: {
    pattern: /^[2-9]\d{5}$/,
    possibleLengths: [6]
  },
  fixedLine: {
    pattern: /^(?:20|[34]\d|8[19])\d{4}$/,
    example: "201234",
    possibleLengths: [6]
  },
  mobile: {
    pattern: /^(?:[27][1-9]|5\d|9[16])\d{4}$/,
    example: "211234",
    possibleLengths: [6]
  },
  voip: {
    pattern: /^(?:6[0-36]|88)\d{4}$/,
    example: "601234",
    possibleLengths: [6]
  },
  formats: [
    {
      pattern: "(\\d{6})",
      format: "$1",
      leadingDigits: ["[2-9]"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    }
  ]
}

export default metadata
