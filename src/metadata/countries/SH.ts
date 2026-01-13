/**
 * Phone number metadata for SH
 * Country calling code: +290
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SH",
  countryCode: 290,
  internationalPrefix: "00",
  mainCountryForCode: true,
  leadingDigits: /^[256]/,
  generalDesc: {
    pattern: /^(?:[256]\d|8)\d{3}$/,
    possibleLengths: 48 // bits: 4,5
  },
  fixedLine: {
    pattern: /^2(?:[0-57-9]\d|6[4-9])\d\d$/,
    example: "22158",
    possibleLengths: 48 // bits: 4,5
  },
  mobile: {
    pattern: /^[56]\d{4}$/,
    example: "51234",
    possibleLengths: 32 // bits: 5
  },
  voip: {
    pattern: /^262\d\d$/,
    example: "26212",
    possibleLengths: 32 // bits: 5
  }
}

export default metadata
