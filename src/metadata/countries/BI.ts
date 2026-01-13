/**
 * Phone number metadata for BI
 * Country calling code: +257
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BI",
  countryCode: 257,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[267]\d|31)\d{6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^(?:22|31)\d{6}$/,
    example: "22201234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:29|6[124-9]|7[125-9])\d{6}$/,
    example: "79561234",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[2367]/
    }
  ]
}

export default metadata
