/**
 * Phone number metadata for SS
 * Country calling code: +211
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SS",
  countryCode: 211,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[19]\d{8}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^1[89]\d{7}$/,
    example: "181234567",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^(?:12|9[1257-9])\d{7}$/,
    example: "977123456",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[19]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
