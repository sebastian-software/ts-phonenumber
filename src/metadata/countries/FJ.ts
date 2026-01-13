/**
 * Phone number metadata for FJ
 * Country calling code: +679
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FJ",
  countryCode: 679,
  internationalPrefix: "0(?:0|52)",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^45\d{5}|(?:0800\d|[235-9])\d{6}$/,
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: /^603\d{4}|(?:3[0-5]|6[25-7]|8[58])\d{5}$/,
    example: "3212345",
    possibleLengths: [7]
  },
  mobile: {
    pattern: /^(?:[279]\d|45|5[01568]|8[034679])\d{5}$/,
    example: "7012345",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[235-9]|45"]
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
