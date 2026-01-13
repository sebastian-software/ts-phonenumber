/**
 * Phone number metadata for EC
 * Country calling code: +593
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "EC",
  countryCode: 593,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^1\d{9,10}|(?:[2-7]|9\d)\d{7}$/,
    possibleLengths: 768 // bits: 8,9
  },
  fixedLine: {
    pattern: /^[2-7][2-7]\d{6}$/,
    example: "22123456",
    possibleLengths: 256, // bits: 8
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^964[0-2]\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\d)\d{6}$/,
    example: "991234567",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^[2-7]890\d{4}$/,
    example: "28901234",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1-$2",
      leadingDigits: /^[2-7]/
    },
    {
      pattern: /^(\d)(\d{3})(\d{4})$/,
      format: "$1 $2-$3",
      leadingDigits: /^[2-7]/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^9/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/
    }
  ]
}

export default metadata
