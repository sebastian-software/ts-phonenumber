/**
 * Phone number metadata for TK
 * Country calling code: +690
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TK",
  countryCode: 690,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[2-47]\d{3,6}$/,
    possibleLengths: [4, 5, 6, 7]
  },
  fixedLine: {
    pattern: /^(?:2[2-4]|[34]\d)\d{2,5}$/,
    example: "3101",
    possibleLengths: [4, 5, 6, 7]
  },
  mobile: {
    pattern: /^7[2-4]\d{2,5}$/,
    example: "7290",
    possibleLengths: [4, 5, 6, 7]
  }
}

export default metadata
