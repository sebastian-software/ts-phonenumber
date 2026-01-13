/**
 * Phone number metadata for KG
 * Country calling code: +996
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KG",
  countryCode: 996,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^8\d{9}|[235-9]\d{8}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      /^312(?:5[0-79]\d|9(?:[0-689]\d|7[0-24-9]))\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\d)|5(?:22|3[4-7]|59|6\d)|6(?:22|5[35-7]|6\d)|7(?:22|3[468]|4[1-9]|59|[67]\d)|9(?:22|4[1-8]|6\d))|6(?:09|12|2[2-4])\d)\d{5}$/,
    example: "312123456",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [5, 6]
  },
  mobile: {
    pattern:
      /^312(?:58\d|973)\d{3}|(?:2(?:0[0-35]|2\d)|5[0-24-7]\d|600|7(?:[07]\d|55)|88[08]|9(?:12|9[05-9]))\d{6}$/,
    example: "700123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["3(?:1[346]|[24-79])"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[235-79]|88"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d)(\\d{2,3})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
