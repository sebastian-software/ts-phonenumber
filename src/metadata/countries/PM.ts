/**
 * Phone number metadata for PM
 * Country calling code: +508
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PM",
  countryCode: 508,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",
    possibleLengths: [6, 9]
  },
  fixedLine: {
    pattern: "(?:4[1-35-9]|5[0-47-9]|80[6-9]\\d\\d)\\d{4}",
    example: "430123",
    possibleLengths: [6, 9]
  },
  mobile: {
    pattern: "(?:4[02-489]|5[02-9]|708(?:4[0-5]|5[0-6]))\\d{4}",
    example: "551234",
    possibleLengths: [6, 9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["[45]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["7"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
