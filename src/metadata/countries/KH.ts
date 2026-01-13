/**
 * Phone number metadata for KH
 * Country calling code: +855
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KH",
  countryCode: 855,
  internationalPrefix: "00[14-9]",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "1\\d{9}|[1-9]\\d{7,8}",
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern:
      "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
    example: "23756789",
    possibleLengths: [8, 9],
    possibleLengthsLocalOnly: [6, 7]
  },
  mobile: {
    pattern:
      "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",
    example: "91234567",
    possibleLengths: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1"]
    }
  ]
}

export default metadata
