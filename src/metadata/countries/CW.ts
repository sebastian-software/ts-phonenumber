/**
 * Phone number metadata for CW
 * Country calling code: +599
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CW",
  countryCode: 599,
  internationalPrefix: "00",
  mainCountryForCode: true,
  leadingDigits: "[69]",
  generalDesc: {
    pattern: /^(?:[34]1|60|(?:7|9\d)\d)\d{5}$/,
    possibleLengths: [7, 8]
  },
  fixedLine: {
    pattern:
      /^9(?:4(?:3[0-5]|4[14]|6\d)|50\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\d|7[01]|8[57-9]))\d{4}$/,
    example: "94351234",
    possibleLengths: [7, 8]
  },
  mobile: {
    pattern: /^953[01]\d{4}|9(?:5[12467]|6[5-9])\d{5}$/,
    example: "95181234",
    possibleLengths: [7, 8]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[3467]"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["9[4-8]"]
    }
  ]
}

export default metadata
