/**
 * Phone number metadata for BW
 * Country calling code: +267
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BW",
  countryCode: 267,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
    possibleLengths: [7, 8]
  },
  fixedLine: {
    pattern:
      "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013]|81)|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[013467]))\\d{4}",
    example: "2401234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:321|7[1-8]\\d)\\d{5}",
    example: "71123456",
    possibleLengths: [8]
  },
  voip: {
    pattern: "79(?:1(?:[0-2]\\d|3[0-8])|2[0-7]\\d)\\d{3}",
    example: "79101234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["90"]
    },
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[24-6]|3[15-9]"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[37]"]
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["0"]
    },
    {
      pattern: "(\\d{3})(\\d{4})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
