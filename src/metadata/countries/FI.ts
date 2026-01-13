/**
 * Phone number metadata for FI
 * Country calling code: +358
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FI",
  countryCode: 358,
  internationalPrefix: "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  leadingDigits: "1[03-79]|[2-9]",
  mainCountryForCode: true,
  generalDesc: {
    pattern: "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
    possibleLengths: [5, 6, 7, 8, 9, 10]
  },
  fixedLine: {
    pattern: "1[3-7][1-8]\\d{3,6}|(?:19[1-8]|[23568][1-8]\\d|9(?:00|[1-8]\\d))\\d{2,6}",
    example: "131234567",
    possibleLengths: [5, 6, 7, 8, 9]
  },
  mobile: {
    pattern: "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",
    example: "412345678",
    possibleLengths: [6, 7, 8, 9, 10]
  },
  formats: [
    {
      pattern: "(\\d{5})",
      format: "$1",
      leadingDigits: ["75[12]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{5})",
      format: "$1",
      leadingDigits: ["20[2-59]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{6})",
      format: "$1",
      leadingDigits: ["11"]
    },
    {
      pattern: "(\\d{3})(\\d{3,7})",
      format: "$1 $2",
      leadingDigits: ["(?:[1-3]0|[68])0|70[07-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{4,8})",
      format: "$1 $2",
      leadingDigits: ["[14]|2[09]|50|7[135]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{6,10})",
      format: "$1 $2",
      leadingDigits: ["7"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{4,9})",
      format: "$1 $2",
      leadingDigits: ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
