/**
 * Phone number metadata for SO
 * Country calling code: +252
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SO",
  countryCode: 252,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
    possibleLengths: [6, 7, 8, 9]
  },
  fixedLine: {
    pattern: "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",
    example: "4012345",
    possibleLengths: [6, 7]
  },
  mobile: {
    pattern:
      "(?:(?:15|(?:3[59]|4[89]|6\\d|7[679]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}",
    example: "71123456",
    possibleLengths: [7, 8, 9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["8[125]"]
    },
    {
      pattern: "(\\d{6})",
      format: "$1",
      leadingDigits: ["[134]"]
    },
    {
      pattern: "(\\d)(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]
    },
    {
      pattern: "(\\d)(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["(?:2|90)4|[67]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[348]|64|79|90"]
    },
    {
      pattern: "(\\d{2})(\\d{5,7})",
      format: "$1 $2",
      leadingDigits: ["1|28|6[0-35-9]|7[67]|9[2-9]"]
    }
  ]
}

export default metadata
