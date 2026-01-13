/**
 * Phone number metadata for MC
 * Country calling code: +377
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MC",
  countryCode: 377,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[3489]|[67]\\d)\\d{7}",
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: "(?:870|9[2-47-9]\\d)\\d{5}",
    example: "99123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: "4(?:[469]\\d|5[1-9])\\d{5}|(?:3|[67]\\d)\\d{7}",
    example: "612345678",
    possibleLengths: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["87"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["4"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[389]"]
    },
    {
      pattern: "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4 $5",
      leadingDigits: ["[67]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
