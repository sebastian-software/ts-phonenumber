/**
 * Phone number metadata for GI
 * Country calling code: +350
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GI",
  countryCode: 350,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[25]\d|60)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^2190[0-2]\d{3}|2(?:0(?:[02]\d|3[01])|16[24-9]|2[2-5]\d)\d{4}$/,
    example: "20012345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^5251[0-4]\d{3}|(?:5(?:[146-8]\d\d|250)|60(?:1[01]|6\d))\d{4}$/,
    example: "57123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["2"]
    }
  ]
}

export default metadata
