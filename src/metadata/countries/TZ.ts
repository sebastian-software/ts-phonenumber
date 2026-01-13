/**
 * Phone number metadata for TZ
 * Country calling code: +255
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TZ",
  countryCode: 255,
  internationalPrefix: "00[056]",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[25-8]\d|41|90)\d{7}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^2[2-8]\d{7}$/,
    example: "222345678",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^(?:6[1-35-9]|7[13-9])\d{7}$/,
    example: "621234567",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^41\d{7}$/,
    example: "412345678",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{2})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[24]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{7})$/,
      format: "$1 $2",
      leadingDigits: /^5/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[67]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
