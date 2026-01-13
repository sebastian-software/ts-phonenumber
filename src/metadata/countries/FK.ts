/**
 * Phone number metadata for FK
 * Country calling code: +500
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FK",
  countryCode: 500,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "[2-7]\\d{4}",
    possibleLengths: [5]
  },
  fixedLine: {
    pattern: "[2-47]\\d{4}",
    example: "31234",
    possibleLengths: [5]
  },
  mobile: {
    pattern: "[56]\\d{4}",
    example: "51234",
    possibleLengths: [5]
  }
}

export default metadata
