/**
 * Phone number metadata for MV
 * Country calling code: +960
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MV",
  countryCode: 960,
  internationalPrefix: "0(?:0|19)",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:800|9[0-57-9]\d)\d{7}|[34679]\d{6}$/,
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: /^(?:3(?:0[0-4]|3[0-59])|6(?:[58][024689]|6[024-68]|7[02468]))\d{4}$/,
    example: "6701234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: /^(?:46[46]|[79]\d\d)\d{4}$/,
    example: "7712345",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[34679]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[89]"]
    }
  ]
}

export default metadata
