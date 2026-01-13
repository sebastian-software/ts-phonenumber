/**
 * Phone number metadata for TH
 * Country calling code: +66
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TH",
  countryCode: 66,
  internationalPrefix: "00[1-9]",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:001800|[2-57]|[689]\d)\d{7}|1\d{7,9}$/,
    possibleLengths: 768 // bits: 8,9
  },
  fixedLine: {
    pattern: /^(?:1[0689]|2\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\d{6}$/,
    example: "21234567",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^67(?:1[0-8]|2[4-7])\d{5}|(?:14|6[1-6]|[89]\d)\d{7}$/,
    example: "812345678",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^6[08]\d{7}$/,
    example: "601234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d)(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[13-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/
    }
  ]
}

export default metadata
