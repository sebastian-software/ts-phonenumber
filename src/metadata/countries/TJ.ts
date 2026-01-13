/**
 * Phone number metadata for TJ
 * Country calling code: +992
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TJ",
  countryCode: 992,
  internationalPrefix: "810",
  preferredInternationalPrefix: "8~10",
  generalDesc: {
    pattern: /^(?:[0-57-9]\d|66)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\d{6}$/,
    example: "372123456",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [3, 5, 6, 7]
  },
  mobile: {
    pattern:
      /^(?:33[03-9]|4(?:1[18]|4[02-479])|81[1-9])\d{6}|(?:[09]\d|1[0-27-9]|2[0-27]|3[08]|40|5[05]|66|7[01578]|8[078])\d{7}$/,
    example: "917123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{6})(\\d)(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["331", "3317"]
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["44[02-479]|[34]7"]
    },
    {
      pattern: "(\\d{4})(\\d)(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["3(?:[1245]|3[12])"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["\\d"]
    }
  ]
}

export default metadata
