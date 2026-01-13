/**
 * Phone number metadata for TG
 * Country calling code: +228
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TG",
  countryCode: 228,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[279]\d{7}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\d{5}$/,
    example: "22212345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:7[0-29]|9[0-36-9])\d{6}$/,
    example: "90112345",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[279]"]
    }
  ]
}

export default metadata
