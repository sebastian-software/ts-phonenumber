/**
 * Phone number metadata for NR
 * Country calling code: +674
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NR",
  countryCode: 674,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:222|444|(?:55|8\d)\d|666|777|999)\d{4}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^444\d{4}$/,
    example: "4441234",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^(?:222|55[3-9]|666|777|8\d\d|999)\d{4}$/,
    example: "5551234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[24-9]/
    }
  ]
}

export default metadata
