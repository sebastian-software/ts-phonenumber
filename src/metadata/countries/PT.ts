/**
 * Phone number metadata for PT
 * Country calling code: +351
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PT",
  countryCode: 351,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^1693\d{5}|(?:[26-9]\d|30)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^2(?:[12]\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\d{6}$/,
    example: "212345678",
    possibleLengths: [9]
  },
  mobile: {
    pattern:
      /^6(?:[06]92(?:30|9\d)|[35]92(?:[049]\d|3[034]))\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\d\d|480))\d{5}$/,
    example: "912345678",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^30\d{7}$/,
    example: "301234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["2[12]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["16|[236-9]"]
    }
  ]
}

export default metadata
