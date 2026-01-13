/**
 * Phone number metadata for AC
 * Country calling code: +247
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AC",
  countryCode: 247,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[01589]\d|[46])\d{4}$/,
    possibleLengths: 32 // bits: 5
  },
  fixedLine: {
    pattern: /^6[2-467]\d{3}$/,
    example: "62889",
    possibleLengths: 32 // bits: 5
  },
  mobile: {
    pattern: /^4\d{4}$/,
    example: "40123",
    possibleLengths: 32 // bits: 5
  }
}

export default metadata
