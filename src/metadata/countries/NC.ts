/**
 * Phone number metadata for NC
 * Country calling code: +687
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NC",
  countryCode: 687,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:050|[2-57-9]\d\d)\d{3}$/,
    possibleLengths: [6]
  },
  fixedLine: {
    pattern: /^(?:2[03-9]|3[0-5]|4[1-7]|88)\d{4}$/,
    example: "201234",
    possibleLengths: [6]
  },
  mobile: {
    pattern: /^(?:[579]\d|8[0-79])\d{4}$/,
    example: "751234",
    possibleLengths: [6]
  },
  formats: [
    {
      pattern: "(\\d{3})",
      format: "$1",
      leadingDigits: ["5[6-8]"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})",
      format: "$1.$2.$3",
      leadingDigits: ["[02-57-9]"]
    }
  ]
}

export default metadata
