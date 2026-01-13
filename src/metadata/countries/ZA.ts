/**
 * Phone number metadata for ZA
 * Country calling code: +27
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ZA",
  countryCode: 27,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "[1-79]\\d{8}|8\\d{4,9}",
    possibleLengths: [5, 6, 7, 8, 9]
  },
  fixedLine: {
    pattern: "(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",
    example: "101234567",
    possibleLengths: [9]
  },
  mobile: {
    pattern:
      "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:50[0-2]|[67]\\d\\d)\\d\\d|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",
    example: "711234567",
    possibleLengths: [5, 6, 7, 8, 9]
  },
  voip: {
    pattern:
      "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",
    example: "871234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["8[1-4]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2,3})",
      format: "$1 $2 $3",
      leadingDigits: ["8[1-4]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["860"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["8"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
