/**
 * Phone number metadata for BY
 * Country calling code: +375
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BY",
  countryCode: 375,
  internationalPrefix: "810",
  nationalPrefix: "8",
  nationalPrefixForParsing: "0|80?",
  preferredInternationalPrefix: "8~10",
  generalDesc: {
    pattern:
      "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",
    example: "152450911",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [5, 6, 7]
  },
  mobile: {
    pattern: "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",
    example: "294911911",
    possibleLengths: [9]
  },
  voip: {
    pattern: "249\\d{6}",
    example: "249123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["800"],
      nationalPrefixFormattingRule: "$NP $FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2,4})",
      format: "$1 $2 $3",
      leadingDigits: ["800"],
      nationalPrefixFormattingRule: "$NP $FG"
    },
    {
      pattern: "(\\d{4})(\\d{2})(\\d{3})",
      format: "$1 $2-$3",
      leadingDigits: [
        "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
        "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"
      ],
      nationalPrefixFormattingRule: "$NP 0$FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2-$3-$4",
      leadingDigits: ["1(?:[56]|7[467])|2[1-3]"],
      nationalPrefixFormattingRule: "$NP 0$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2-$3-$4",
      leadingDigits: ["[1-4]"],
      nationalPrefixFormattingRule: "$NP 0$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3,4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[89]"],
      nationalPrefixFormattingRule: "$NP $FG"
    }
  ]
}

export default metadata
