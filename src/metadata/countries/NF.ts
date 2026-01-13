/**
 * Phone number metadata for NF
 * Country calling code: +672
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NF",
  countryCode: 672,
  internationalPrefix: "00",
  nationalPrefixForParsing: "([0-258]\\d{4})$",
  nationalPrefixTransformRule: "3$1",
  generalDesc: {
    pattern: /^[13]\d{5}$/,
    possibleLengths: 64 // bits: 6
  },
  fixedLine: {
    pattern: /^(?:1(?:06|17|28|39)|3[0-2]\d)\d{3}$/,
    example: "106609",
    possibleLengths: 64, // bits: 6
    possibleLengthsLocalOnly: 32 // bits: 5
  },
  mobile: {
    pattern: /^(?:14|3[58])\d{4}$/,
    example: "381234",
    possibleLengths: 64, // bits: 6
    possibleLengthsLocalOnly: 32 // bits: 5
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^1[0-3]/
    },
    {
      pattern: /^(\d)(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^[13]/
    }
  ]
}

export default metadata
