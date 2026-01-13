/**
 * Phone number metadata for BF
 * Country calling code: +226
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BF",
  countryCode: 226,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[025-7]\d|44)\d{6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern:
      /^2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\d|50|6[5-7]))\d{4}$/,
    example: "20491234",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:0[1-7]|44|5[0-8]|[67]\d)\d{6}$/,
    example: "70123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[024-7]/
    }
  ]
}

export default metadata
