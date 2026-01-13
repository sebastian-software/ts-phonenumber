/**
 * Phone number metadata for RW
 * Country calling code: +250
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "RW",
  countryCode: 250,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:06|[27]\d\d|[89]00)\d{6}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^(?:06|2[23568]\d)\d{6}$/,
    example: "250123456",
    possibleLengths: [8, 9]
  },
  mobile: {
    pattern: /^7[237-9]\d{7}$/,
    example: "720123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["0"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["2"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[7-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
