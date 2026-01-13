/**
 * Phone number metadata for WF
 * Country calling code: +681
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "WF",
  countryCode: 681,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
    possibleLengths: [6]
  },
  fixedLine: {
    pattern: "72\\d{4}",
    example: "721234",
    possibleLengths: [6]
  },
  mobile: {
    pattern: "(?:72|8[23])\\d{4}",
    example: "821234",
    possibleLengths: [6]
  },
  voip: {
    pattern: "9[23]\\d{4}",
    example: "921234",
    possibleLengths: [6]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["[47-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
