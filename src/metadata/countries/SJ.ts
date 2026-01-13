/**
 * Phone number metadata for SJ
 * Country calling code: +47
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SJ",
  countryCode: 47,
  internationalPrefix: "00",
  leadingDigits: "79",
  generalDesc: {
    pattern: /^0\d{4}|(?:[489]\d|79)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^79\d{6}$/,
    example: "79123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:4[015-8]|9\d)\d{6}$/,
    example: "41234567",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^85[0-5]\d{5}$/,
    example: "85012345",
    possibleLengths: [8]
  }
}

export default metadata
