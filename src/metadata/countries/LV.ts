/**
 * Phone number metadata for LV
 * Country calling code: +371
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LV",
  countryCode: 371,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[268]\d|78|90)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^6\d{7}$/,
    example: "63123456",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^2333[0-8]\d{3}|2(?:[0-24-9]\d\d|3(?:0[07]|[14-9]\d|2[02-9]|3[0-24-9]))\d{4}$/,
    example: "21234567",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[2679]|8[01]"]
    }
  ]
}

export default metadata
