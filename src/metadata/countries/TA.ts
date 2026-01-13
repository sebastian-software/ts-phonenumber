/**
 * Phone number metadata for TA
 * Country calling code: +290
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TA",
  countryCode: 290,
  internationalPrefix: "00",
  leadingDigits: "8",
  generalDesc: {
    pattern: /^8\d{3}$/,
    possibleLengths: [4]
  },
  fixedLine: {
    pattern: /^8\d{3}$/,
    example: "8999",
    possibleLengths: [4]
  }
}

export default metadata
