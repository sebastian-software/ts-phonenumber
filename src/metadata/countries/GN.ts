/**
 * Phone number metadata for GN
 * Country calling code: +224
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GN",
  countryCode: 224,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^722\d{6}|(?:3|6\d)\d{7}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\d\d)\d{4}$/,
    example: "30241234",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^6[0-356]\d{7}$/,
    example: "601123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^722\d{6}$/,
    example: "722123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["3"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[67]"]
    }
  ]
}

export default metadata
