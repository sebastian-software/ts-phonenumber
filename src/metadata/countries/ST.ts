/**
 * Phone number metadata for ST
 * Country calling code: +239
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ST",
  countryCode: 239,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:22|9\d)\d{5}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^22\d{5}$/,
    example: "2221234",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^900[5-9]\d{3}|9(?:0[1-9]|[89]\d)\d{4}$/,
    example: "9812345",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[29]/
    }
  ]
}

export default metadata
