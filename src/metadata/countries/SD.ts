/**
 * Phone number metadata for SD
 * Country calling code: +249
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SD",
  countryCode: 249,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[19]\d{8}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^1(?:5\d|8[35-7])\d{6}$/,
    example: "153123456",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^(?:1[0-2]|9[0-3569])\d{7}$/,
    example: "911231234",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[19]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
