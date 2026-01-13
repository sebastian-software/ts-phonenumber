/**
 * Phone number metadata for SM
 * Country calling code: +378
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SM",
  countryCode: 378,
  internationalPrefix: "00",
  nationalPrefixForParsing: "([89]\\d{5})$",
  nationalPrefixTransformRule: "0549$1",
  generalDesc: {
    pattern: /^(?:0549|[5-7]\d)\d{6}$/,
    possibleLengths: 1280 // bits: 8,10
  },
  fixedLine: {
    pattern: /^0549(?:8[0157-9]|9\d)\d{4}$/,
    example: "0549886377",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 64 // bits: 6
  },
  mobile: {
    pattern: /^6[16]\d{6}$/,
    example: "66661212",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^5[158]\d{6}$/,
    example: "58001110",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{6})$/,
      format: "$1",
      leadingDigits: /^[89]/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[5-7]/
    },
    {
      pattern: /^(\d{4})(\d{6})$/,
      format: "$1 $2",
      leadingDigits: /^0/
    }
  ]
}

export default metadata
