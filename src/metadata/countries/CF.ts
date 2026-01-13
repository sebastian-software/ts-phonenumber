/**
 * Phone number metadata for CF
 * Country calling code: +236
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CF",
  countryCode: 236,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[27]\d{3}|8776)\d{4}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^2[12]\d{6}$/,
    example: "21612345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^7[02-7]\d{6}$/,
    example: "70012345",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[278]"]
    }
  ]
}

export default metadata
