/**
 * Phone number metadata for AU
 * Country calling code: +61
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AU",
  countryCode: 61,
  internationalPrefix: "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
  nationalPrefix: "0",
  nationalPrefixForParsing: "(183[12])|0",
  preferredInternationalPrefix: "0011",
  mainCountryForCode: true,
  generalDesc: {
    pattern: "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",
    example: "212345678",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [8]
  },
  mobile: {
    pattern:
      "4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",
    example: "412345678",
    possibleLengths: [9]
  },
  voip: {
    pattern: "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
    example: "147101234",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["16"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["13"]
    },
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["19"]
    },
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["180", "1802"]
    },
    {
      pattern: "(\\d{4})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["19"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2,4})",
      format: "$1 $2 $3",
      leadingDigits: ["16"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["14|4"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2378]"],
      nationalPrefixFormattingRule: "($NP$FG)",
      domesticCarrierCodeFormattingRule: "$CC ($FG)"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1(?:30|[89])"]
    },
    {
      pattern: "(\\d{4})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["130"]
    }
  ]
}

export default metadata
