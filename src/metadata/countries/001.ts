/**
 * Phone number metadata for 001
 * Country calling code: +979
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "001",
  countryCode: 979,
  generalDesc: {
    pattern: /^[1359]\d{8}$/
  },
  formats: [
    {
      pattern: /^(\d)(\d{4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[1359]/
    }
  ]
}

export default metadata
