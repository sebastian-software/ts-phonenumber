/**
 * Phone number metadata for TD
 * Country calling code: +235
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TD",
  countryCode: 235,
  internationalPrefix: "00|16",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:22|30|[689]\d|77)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^22(?:[37-9]0|5[0-5]|6[89])\d{4}$/,
    example: "22501234",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:30|[69]\d|77|8[5-7])\d{6}$/,
    example: "63012345",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[236-9]"]
    }
  ]
}

export default metadata
