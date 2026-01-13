/**
 * Phone number metadata for BQ
 * Country calling code: +599
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BQ",
  countryCode: 599,
  internationalPrefix: "00",
  leadingDigits: "[347]",
  generalDesc: {
    pattern: "(?:[34]1|7\\d)\\d{5}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}",
    example: "7151234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",
    example: "3181234",
    possibleLengths: [7]
  }
}

export default metadata
