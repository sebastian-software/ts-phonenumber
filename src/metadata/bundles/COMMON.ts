/**
 * COMMON - Most commonly used countries worldwide (top 30 by usage)
 * Regions: US, GB, DE, FR, IT, ES, NL, BE, AT, CH, CA, AU, JP, KR, CN, IN, BR, MX, RU, PL, SE, NO, DK, FI, IE, PT, GR, CZ, RO, HU
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
    US: {
      regionCode: "US",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^[2-9]\d{9}|3\d{6}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^3052(?:0[0-8]|[1-9]\d)\d{4}|(?:2742|305[3-9])\d{6}|(?:472|983)[2-47-9]\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\d{6}$/,
        example: "2015550123",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^3052(?:0[0-8]|[1-9]\d)\d{4}|(?:2742|305[3-9])\d{6}|(?:472|983)[2-47-9]\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\d{6}$/,
        example: "2015550123",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^305209\d{4}$/,
        example: "3052090123",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["310"],
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[24-9]|3(?:[02-9]|1[1-9])"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "($1) $2-$3",
          leadingDigits: ["[2-9]"],
          nationalPrefixOptional: true
        }
      ]
    },
    GB: {
      regionCode: "GB",
      countryCode: 44,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "0|180020",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^[1-357-9]\d{9}|[18]\d{8}|8\d{6}$/,
        possibleLengths: [9, 10]
      },
      fixedLine: {
        pattern:
          /^(?:1(?:1(?:3(?:[0-58]\d\d|73[0-5])|4(?:(?:[0-5]\d|70)\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\d|6(?:[0-4]\d|5[01]))\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\d)\d|1(?:[0-7]\d|8[0-3]))|(?:3(?:0\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\d)\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\d{3})\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\d)|76\d)|6(?:26[06-9]|686))|6(?:06(?:4\d|7[4-79])|295[5-7]|35[34]\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\d{3}$/,
        example: "1212345678",
        possibleLengths: [9, 10],
        possibleLengthsLocalOnly: [4, 5, 6, 7, 8]
      },
      mobile: {
        pattern:
          /^7(?:457[0-57-9]|700[01]|911[028])\d{5}|7(?:[1-3]\d\d|4(?:[0-46-9]\d|5[0-689])|5(?:0[0-8]|[13-9]\d|2[0-35-9])|7(?:0[1-9]|[1-7]\d|8[02-9]|9[0-689])|8(?:[014-9]\d|[23][0-8])|9(?:[024-9]\d|1[02-9]|3[0-689]))\d{6}$/,
        example: "7400123456",
        possibleLengths: [10]
      },
      voip: {
        pattern: /^56\d{8}$/,
        example: "5612345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["800", "8001", "80011", "800111", "8001111"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3",
          leadingDigits: ["845", "8454", "84546", "845464"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["800"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{5})(\\d{4,5})",
          format: "$1 $2",
          leadingDigits: [
            "1(?:38|5[23]|69|76|94)",
            "1(?:(?:38|69)7|5(?:24|39)|768|946)",
            "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{5,6})",
          format: "$1 $2",
          leadingDigits: ["1(?:[2-69][02-9]|[78])"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[1389]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    DE: {
      regionCode: "DE",
      countryCode: 49,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern:
          /^[2579]\d{5,14}|49(?:[34]0|69|8\d)\d\d?|49(?:37|49|60|7[089]|9\d)\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\d{1,8}|(?:1|[368]\d|4[0-8])\d{3,13}|49(?:[015]\d|2[13]|31|[46][1-8])\d{1,9}$/,
        possibleLengths: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      },
      fixedLine: {
        pattern:
          /^32\d{9,11}|49[1-6]\d{10}|322\d{6}|49[0-7]\d{3,9}|(?:[34]0|[68]9)\d{3,13}|(?:2(?:0[1-689]|[1-3569]\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\d|[589][0-7]|6[0-8]|7[0-467]))\d{3,12}$/,
        example: "30123456",
        possibleLengths: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        possibleLengthsLocalOnly: [2, 3, 4]
      },
      mobile: {
        pattern: /^1(?:(?:5(?:[0-25-9]\d\d|3(?:10|33))|7[26-9]\d\d)\d{6}|6[023]\d{7,8})|17\d{8}$/,
        example: "15123456789",
        possibleLengths: [10, 11]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{3,13})",
          format: "$1 $2",
          leadingDigits: ["3[02]|40|[68]9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{6})",
          format: "$1",
          leadingDigits: ["227", "2277"]
        },
        {
          pattern: "(\\d{3})(\\d{3,12})",
          format: "$1 $2",
          leadingDigits: [
            "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
            "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{2,11})",
          format: "$1 $2",
          leadingDigits: [
            "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
            "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["138"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{5})(\\d{2,10})",
          format: "$1 $2",
          leadingDigits: ["3"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{5,11})",
          format: "$1 $2",
          leadingDigits: ["181"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d)(\\d{4,10})",
          format: "$1 $2 $3",
          leadingDigits: ["1(?:3|80)|9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{7,8})",
          format: "$1 $2",
          leadingDigits: ["1[67]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{7,12})",
          format: "$1 $2",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{5})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["185", "1850", "18500"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["18[68]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["15[1279]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{5})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["15[03568]", "15(?:[0568]|3[13])"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{8})",
          format: "$1 $2",
          leadingDigits: ["18"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{7,8})",
          format: "$1 $2 $3",
          leadingDigits: ["1(?:6[023]|7)"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{7})",
          format: "$1 $2 $3",
          leadingDigits: ["15[279]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{8})",
          format: "$1 $2 $3",
          leadingDigits: ["15"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    FR: {
      regionCode: "FR",
      countryCode: 33,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[1-9]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern: /^(?:26[013-9]|59[1-35-9])\d{6}|(?:[13]\d|2[0-57-9]|4[1-9]|5[0-8])\d{7}$/,
        example: "123456789",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:6(?:[0-24-8]\d|3[0-8]|9[589])|7[3-9]\d)\d{6}$/,
        example: "612345678",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^9\d{8}$/,
        example: "912345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})",
          format: "$1",
          leadingDigits: ["10"]
        },
        {
          pattern: "(\\d{3})(\\d{3})",
          format: "$1 $2",
          leadingDigits: ["1"]
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP $FG"
        },
        {
          pattern: "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4 $5",
          leadingDigits: ["[1-79]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    IT: {
      regionCode: "IT",
      countryCode: 39,
      internationalPrefix: "00",
      mainCountryForCode: true,
      generalDesc: {
        pattern:
          /^0\d{5,11}|1\d{8,10}|3(?:[0-8]\d{7,10}|9\d{7,8})|(?:43|55|70)\d{8}|8\d{5}(?:\d{2,4})?$/,
        possibleLengths: [6, 7, 8, 9, 10, 11, 12]
      },
      fixedLine: {
        pattern:
          /^0(?:669[0-79]\d{1,6}|831\d{2,8})|0(?:1(?:[0159]\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\d\d|3(?:[0159]\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\d|6[0-8])|7(?:[0159]\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\d{2,7}$/,
        example: "0212345678",
        possibleLengths: [6, 7, 8, 9, 10, 11, 12]
      },
      mobile: {
        pattern: /^3[2-9]\d{7,8}|(?:31|43)\d{8}$/,
        example: "3123456789",
        possibleLengths: [9, 10]
      },
      voip: {
        pattern: /^55\d{8}$/,
        example: "5512345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{4,5})",
          format: "$1",
          leadingDigits: ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]
        },
        {
          pattern: "(\\d{6})",
          format: "$1",
          leadingDigits: ["1(?:1|92)"]
        },
        {
          pattern: "(\\d{2})(\\d{4,6})",
          format: "$1 $2",
          leadingDigits: ["0[26]"]
        },
        {
          pattern: "(\\d{3})(\\d{3,6})",
          format: "$1 $2",
          leadingDigits: [
            "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
            "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"
          ]
        },
        {
          pattern: "(\\d{4})(\\d{2,6})",
          format: "$1 $2",
          leadingDigits: ["0(?:[13-579][2-46-8]|8[236-8])"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["894"]
        },
        {
          pattern: "(\\d{2})(\\d{3,4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["0[26]|5"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["1(?:44|[679])|[378]|43"]
        },
        {
          pattern: "(\\d{3})(\\d{3,4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["0[13-57-9][0159]|14"]
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{5})",
          format: "$1 $2 $3",
          leadingDigits: ["0[26]"]
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4,5})",
          format: "$1 $2 $3",
          leadingDigits: ["[03]"]
        }
      ]
    },
    ES: {
      regionCode: "ES",
      countryCode: 34,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[5-9]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern:
          /^96906(?:0[0-8]|1[1-9]|[2-9]\d)\d\d|9(?:69(?:0[0-57-9]|[1-9]\d)|73(?:[0-8]\d|9[1-9]))\d{4}|(?:8(?:[1356]\d|[28][0-8]|[47][1-9])|9(?:[135]\d|[268][0-8]|4[1-9]|7[124-9]))\d{6}$/,
        example: "810123456",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^96906(?:09|10)\d\d|(?:590(?:10[0-2]|600)|97390\d)\d{3}|(?:6\d|7[1-48])\d{7}$/,
        example: "612345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})",
          format: "$1",
          leadingDigits: ["905"]
        },
        {
          pattern: "(\\d{6})",
          format: "$1",
          leadingDigits: ["[79]9"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[89]00"]
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[5-9]"]
        }
      ]
    },
    NL: {
      regionCode: "NL",
      countryCode: 31,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[124-7]\d\d|3(?:[02-9]\d|1[0-8]))\d{6}|8\d{6,9}|9\d{6,10}|1\d{4,5}$/,
        possibleLengths: [9, 11]
      },
      fixedLine: {
        pattern:
          /^(?:1(?:[035]\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\d\d)\d{6}$/,
        example: "101234567",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:6[1-58]|970\d)\d{7}$/,
        example: "612345678",
        possibleLengths: [9, 11]
      },
      voip: {
        pattern: /^(?:85|91)\d{7}$/,
        example: "851234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})",
          format: "$1",
          leadingDigits: ["1[238]|[34]"]
        },
        {
          pattern: "(\\d{2})(\\d{3,4})",
          format: "$1 $2",
          leadingDigits: ["14"]
        },
        {
          pattern: "(\\d{6})",
          format: "$1",
          leadingDigits: ["1"]
        },
        {
          pattern: "(\\d{3})(\\d{4,7})",
          format: "$1 $2",
          leadingDigits: ["[89]0"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["66"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{8})",
          format: "$1 $2",
          leadingDigits: ["6"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[1-578]|91"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{5})",
          format: "$1 $2 $3",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    BE: {
      regionCode: "BE",
      countryCode: 32,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^4\d{8}|[1-9]\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern:
          /^80[2-8]\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\d|6[013-57-9]|71|8[1-79]|9[2-4])\d{6}$/,
        example: "12345678",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^4[5-9]\d{7}$/,
        example: "470123456",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["(?:80|9)0"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[239]|4[23]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[15-8]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["4"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    AT: {
      regionCode: "AT",
      countryCode: 43,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern:
          /^1\d{3,12}|2\d{6,12}|43(?:(?:0\d|5[02-9])\d{3,9}|2\d{4,5}|[3467]\d{4}|8\d{4,6}|9\d{4,7})|5\d{4,12}|8\d{7,12}|9\d{8,12}|(?:[367]\d|4[0-24-9])\d{4,11}$/,
        possibleLengths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      fixedLine: {
        pattern:
          /^1(?:11\d|[2-9]\d{3,11})|(?:316|463)\d{3,10}|648[34]\d{3,9}|(?:51|66|73)2\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-7]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\d{4,10}$/,
        example: "1234567890",
        possibleLengths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        possibleLengthsLocalOnly: [3]
      },
      mobile: {
        pattern: /^6(?:485|(?:5[0-3579]|6[013-9]|[7-9]\d)\d)\d{3,9}$/,
        example: "664123456",
        possibleLengths: [7, 8, 9, 10, 11, 12, 13]
      },
      voip: {
        pattern: /^5(?:0[1-9]|17|[79]\d)\d{2,10}|7[28]0\d{6,10}$/,
        example: "780123456",
        possibleLengths: [5, 6, 7, 8, 9, 10, 11, 12, 13]
      },
      formats: [
        {
          pattern: "(\\d{4})",
          format: "$1",
          leadingDigits: ["14"]
        },
        {
          pattern: "(\\d)(\\d{3,12})",
          format: "$1 $2",
          leadingDigits: ["1(?:11|[2-9])"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})",
          format: "$1 $2",
          leadingDigits: ["517"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3,5})",
          format: "$1 $2",
          leadingDigits: ["5[079]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{6})",
          format: "$1",
          leadingDigits: ["[18]"]
        },
        {
          pattern: "(\\d{3})(\\d{3,10})",
          format: "$1 $2",
          leadingDigits: [
            "(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
            "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3,9})",
          format: "$1 $2",
          leadingDigits: ["[2-467]|5[2-6]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4,7})",
          format: "$1 $2 $3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    CH: {
      regionCode: "CH",
      countryCode: 41,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^8\d{11}|[2-9]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern: /^(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\d{7}$/,
        example: "212345678",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:6[89]|7[235-9])\d{7}$/,
        example: "781234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["8[047]|90"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[2-79]|81"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4 $5",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    CA: {
      regionCode: "CA",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      generalDesc: {
        pattern: /^[2-9]\d{9}|3\d{6}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\d{6}$/,
        example: "5062345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\d{6}$/,
        example: "5062345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^600[2-9]\d{6}$/,
        example: "6002012345",
        possibleLengths: [10]
      }
    },
    AU: {
      regionCode: "AU",
      countryCode: 61,
      internationalPrefix: "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
      nationalPrefix: "0",
      nationalPrefixForParsing: "(183[12])|0",
      preferredInternationalPrefix: "0011",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^1(?:[0-79]\d{7}(?:\d(?:\d{2})?)?|8[0-24-9]\d{7})|[2-478]\d{8}|1\d{4,7}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern:
          /^(?:(?:241|349)0\d\d|8(?:51(?:0(?:0[03-9]|[12479]\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\d|7[89]|9[0-4])|[34]\d\d)|91(?:(?:[0-58]\d|6[0135-9])\d|7(?:0[0-24-9]|[1-9]\d)|9(?:[0-46-9]\d|5[0-79]))))\d{3}|(?:2(?:[0-26-9]\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\d|2[0-8])|8(?:55|6[0-8]|[78]\d|9[02-9]))\d{6}$/,
        example: "212345678",
        possibleLengths: [9],
        possibleLengthsLocalOnly: [8]
      },
      mobile: {
        pattern:
          /^4(?:79[01]|83[0-36-9]|95[0-3])\d{5}|4(?:[0-36]\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\d{6}$/,
        example: "412345678",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^14(?:5(?:1[0458]|[23][458])|71\d)\d{4}$/,
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
    },
    JP: {
      regionCode: "JP",
      countryCode: 81,
      internationalPrefix: "010",
      nationalPrefix: "0",
      nationalPrefixForParsing: "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0",
      nationalPrefixTransformRule: "$1",
      generalDesc: {
        pattern: /^00[1-9]\d{6,14}|[25-9]\d{9}|(?:00|[1-9]\d\d)\d{6}$/,
        possibleLengths: [9, 10]
      },
      fixedLine: {
        pattern:
          /^(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\d|4(?:[2-578]\d|6[02-8]|9[2-59])|5(?:[2-589]\d|6[1-9]|7[2-8])|7(?:[25-9]\d|3[4-9]|4[02-9])|8(?:[2679]\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\d|[679][1-9]))\d{6}$/,
        example: "312345678",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:601[0-4]0|[7-9]0[1-9]\d\d)\d{5}$/,
        example: "9012345678",
        possibleLengths: [10]
      },
      voip: {
        pattern: /^50[1-9]\d{7}$/,
        example: "5012345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["007", "0077", "00777", "00777[01]"]
        },
        {
          pattern: "(\\d{8,10})",
          format: "$1",
          leadingDigits: ["000"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1-$2-$3",
          leadingDigits: ["(?:12|57|99)0"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d)(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: [
            "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
            "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
            "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["60"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{4})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: [
            "3|4(?:2[09]|7[01])|6[1-9]",
            "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: [
            "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{3,4})",
          format: "$1-$2-$3",
          leadingDigits: ["007", "0077"]
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["008"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["800"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[25-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3,4})",
          format: "$1-$2-$3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{4})(\\d{4})(\\d{4,5})",
          format: "$1-$2-$3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{4})(\\d{5})(\\d{5,6})",
          format: "$1-$2-$3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{4})(\\d{6})(\\d{6,7})",
          format: "$1-$2-$3",
          leadingDigits: ["0"]
        }
      ]
    },
    KR: {
      regionCode: "KR",
      countryCode: 82,
      internationalPrefix: "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
      nationalPrefix: "0",
      nationalPrefixForParsing: "0(8(?:[1-46-8]|5\\d\\d))?",
      generalDesc: {
        pattern:
          /^00[1-9]\d{8,11}|(?:[12]|5\d{3})\d{7}|[13-6]\d{9}|(?:[1-6]\d|80)\d{7}|[3-6]\d{4,5}|(?:00|7)0\d{8}$/,
        possibleLengths: [5, 6, 8, 9, 10]
      },
      fixedLine: {
        pattern: /^(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\d{2,3}$/,
        example: "22123456",
        possibleLengths: [5, 6, 8, 9, 10],
        possibleLengthsLocalOnly: [3, 4, 7]
      },
      mobile: {
        pattern:
          /^1(?:05(?:[0-8]\d|9[0-6])|22[13]\d)\d{4,5}|1(?:0[0-46-9]|[16-9]\d|2[013-9])\d{6,7}$/,
        example: "1020000000",
        possibleLengths: [9, 10]
      },
      voip: {
        pattern: /^70\d{8}$/,
        example: "7012345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{5})",
          format: "$1",
          leadingDigits: ["1[016-9]1", "1[016-9]11", "1[016-9]114"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3,4})",
          format: "$1-$2",
          leadingDigits: ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["1"]
        },
        {
          pattern: "(\\d)(\\d{3,4})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["2"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[36]0|8"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3,4})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[1346]|5[1-5]"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[57]"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{5})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["003", "0030"]
        },
        {
          pattern: "(\\d{2})(\\d{5})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$NP$CC-$FG"
        },
        {
          pattern: "(\\d{5})(\\d{3,4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{5})(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["0"]
        }
      ]
    },
    CN: {
      regionCode: "CN",
      countryCode: 86,
      internationalPrefix: "00|1(?:[12]\\d|79)\\d\\d00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "(1(?:[12]\\d|79)\\d\\d)|0",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern:
          /^(?:(?:1[03-689]|2\d)\d\d|6)\d{8}|1\d{10}|[126]\d{6}(?:\d(?:\d{2})?)?|86\d{5,6}|(?:[3-579]\d|8[0-57-9])\d{5,9}$/,
        possibleLengths: [7, 8, 9, 10, 11]
      },
      fixedLine: {
        pattern:
          /^(?:10(?:[02-79]\d\d|[18](?:0[1-9]|[1-9]\d))|2(?:[02-57-9]\d{3}|1(?:[18](?:0[1-9]|[1-9]\d)|[2-79]\d\d))|(?:41[03]|8078|9(?:78|94))\d\d)\d{5}|(?:10|2[0-57-9])(?:1(?:00|23)\d\d|95\d{3,4})|(?:41[03]|9(?:78|94))(?:100\d\d|95\d{3,4})|8078123|(?:43[35]|754|851)\d{7,8}|(?:43[35]|754|851)(?:1(?:00\d|23)\d|95\d{3,4})|(?:3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\d{7}|1(?:0(?:0\d\d(?:\d{3})?|[1-9]\d{5})|[13-9]\d{6}|2(?:[0-24-9]\d{5}|3\d(?:\d{4})?))|9(?:[0-46-9]\d{6}|5\d{3}(?:\d(?:\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\d|7[02-68]|9[1-68])|4(?:1[24-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|3\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-8]\d{6}|1(?:0(?:0\d\d(?:\d{2})?|[1-9]\d{4})|[13-9]\d{5}|2(?:[0-24-9]\d{4}|3\d(?:\d{3})?))|9(?:[0-46-9]\d{5}|5\d{3,5}))$/,
        example: "1012345678",
        possibleLengths: [7, 8, 9, 10, 11],
        possibleLengthsLocalOnly: [5, 6]
      },
      mobile: {
        pattern: /^1740[0-5]\d{6}|1(?:[38]\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\d{8}$/,
        example: "13123456789",
        possibleLengths: [11]
      },
      formats: [
        {
          pattern: "(\\d{5,6})",
          format: "$1",
          leadingDigits: [
            "1(?:00|2[13])|9[56]",
            "1(?:00|2(?:1|39))|9[56]",
            "1(?:00|2(?:1|395))|9[56]"
          ]
        },
        {
          pattern: "(\\d{5,6})",
          format: "$1",
          leadingDigits: [
            "1(?:0|23)|781|[1-9]12",
            "1(?:0|23)|7812|[1-9]123",
            "1(?:0|23(?:[0-8]|9[0-46-9]))|78123|[1-9]123"
          ]
        },
        {
          pattern: "(\\d{2})(\\d{5,6})",
          format: "$1 $2",
          leadingDigits: [
            "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
            "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: [
            "[1-9]",
            "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|[3-9]",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))",
            "1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:0(?:[0-689]|7[0-79])|1[01459]|2[0-489]|[46]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))"
          ]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["16[08]"]
        },
        {
          pattern: "(\\d{3})(\\d{5,6})",
          format: "$1 $2",
          leadingDigits: [
            "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
            "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
            "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
            "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: [
            "[1-9]",
            "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[0-8]|9[0-47-9])|6)|[3-9]",
            "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|26|3(?:[0268]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23][0-8])|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:33|85[23]9)[0-46-9]|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
            "1(?:0[02-8]|[1-9])|2(?:[0-57-9][0-8]|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:10|2[0-57-9])9[0-47-9]|(?:101|58|85[23]10)[1-9]|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"
          ]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["(?:4|80)0"]
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: [
            "10|2(?:[02-57-9]|1[1-9])",
            "10|2(?:[02-57-9]|1[1-9])",
            "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: [
            "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{7,8})",
          format: "$1 $2",
          leadingDigits: ["9"]
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["80"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[3-578]"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1[3-9]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[12]"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        }
      ]
    },
    IN: {
      regionCode: "IN",
      countryCode: 91,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:000800|[2-9]\d\d)\d{7}|1\d{7,12}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^(?:2717(?:[2-7]\d|95)|6828[235-7]\d)\d{4}|(?:170[24]|280[13468]|4(?:20[24]|72[2-8])|552[1-7])\d{6}|(?:271[0-689]|682[0-79]|782[0-6])[2-7]\d{5}|(?:2(?:[02][2-79]|90)|3(?:23|80)|683|79[1-7])\d{7}|(?:11|33|4[04]|80)[2-7]\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\d)\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[14-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\d[2-7]\d{5}$/,
        example: "7410410123",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [6, 7, 8]
      },
      mobile: {
        pattern:
          /^(?:6(?:1279|828[01489])|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\d{5}|(?:160[01]|6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\d|7[02-8])\d{5}|(?:6(?:[09]\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\d\d)\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\d|7(?:[235689]\d|4[0189])|8(?:[14-6]\d|2[0-79]))|7(?:1(?:[013-8]\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\d|5[0-367])|70[13-7]|881))[0189]\d{5}$/,
        example: "8123456789",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{7})",
          format: "$1",
          leadingDigits: ["575"]
        },
        {
          pattern: "(\\d{8})",
          format: "$1",
          leadingDigits: [
            "5(?:0|2[23]|3[03]|[67]1|88)",
            "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
            "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"
          ],
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{4})(\\d{4,5})",
          format: "$1 $2",
          leadingDigits: ["180", "1800"],
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["140"],
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: [
            "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
            "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
            "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: [
            "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: [
            "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
            "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
            "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689])\\d|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{5})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["16|[6-9]"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{4})(\\d{2,4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["18[06]", "18[06]0"],
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["18"],
          nationalPrefixOptional: true
        }
      ]
    },
    BR: {
      regionCode: "BR",
      countryCode: 55,
      internationalPrefix: "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
      nationalPrefix: "0",
      nationalPrefixForParsing: "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
      nationalPrefixTransformRule: "$2",
      generalDesc: {
        pattern:
          /^[1-467]\d{9,10}|55[0-46-9]\d{8}|[34]\d{7}|55\d{7,8}|(?:5[0-46-9]|[89]\d)\d{7,9}$/,
        possibleLengths: [10, 11]
      },
      fixedLine: {
        pattern: /^(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\d{7}$/,
        example: "1123456789",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [8]
      },
      mobile: {
        pattern: /^(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\d)\d{7}$/,
        example: "11961234567",
        possibleLengths: [10, 11],
        possibleLengthsLocalOnly: [8, 9]
      },
      formats: [
        {
          pattern: "(\\d{3,6})",
          format: "$1",
          leadingDigits: [
            "1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"
          ]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]
        },
        {
          pattern: "(\\d{3})(\\d{2,3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["(?:[358]|90)0"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{5})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["9"]
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
          nationalPrefixFormattingRule: "($FG)",
          domesticCarrierCodeFormattingRule: "$NP $CC ($FG)"
        },
        {
          pattern: "(\\d{2})(\\d{5})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: ["[16][1-9]|[2-57-9]"],
          nationalPrefixFormattingRule: "($FG)",
          domesticCarrierCodeFormattingRule: "$NP $CC ($FG)"
        }
      ]
    },
    MX: {
      regionCode: "MX",
      countryCode: 52,
      internationalPrefix: "0[09]",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-9]\d{9}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:0[01]|2\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\d|8[1-35-9]|9[2-689])|5(?:[56]\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-36-9]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\d|5[13-9]|8[1-69]|9[17])|8(?:1\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\d|7[12]|8[1-8]))\d{7}$/,
        example: "2001234567",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7, 8]
      },
      mobile: {
        pattern:
          /^(?:2(?:2\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[267][1-9]|3[1-8]|[45]\d|8[1-35-9]|9[2-689])|5(?:[56]\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-36-9]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\d|5[13-9]|8[1-69]|9[17])|8(?:1\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\d|7[12]|8[1-8]))\d{7}$/,
        example: "2221234567",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7, 8]
      },
      formats: [
        {
          pattern: "(\\d{5})",
          format: "$1",
          leadingDigits: ["53"]
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["33|5[56]|81"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-9]"]
        }
      ]
    },
    RU: {
      regionCode: "RU",
      countryCode: 7,
      internationalPrefix: "810",
      nationalPrefix: "8",
      preferredInternationalPrefix: "8~10",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^8\d{13}|[347-9]\d{9}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^336(?:[013-9]\d|2[013-9])\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\d{7}$/,
        example: "3011234567",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^9\d{9}$/,
        example: "9123456789",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})",
          format: "$1-$2-$3",
          leadingDigits: ["[0-79]"]
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: [
            "7(?:1[0-8]|2[1-9])",
            "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
            "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"
          ],
          nationalPrefixFormattingRule: "$NP ($FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{5})(\\d)(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: [
            "7(?:1[0-68]|2[1-9])",
            "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
            "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"
          ],
          nationalPrefixFormattingRule: "$NP ($FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "$NP ($FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2-$3-$4",
          leadingDigits: ["[349]|8(?:[02-7]|1[1-8])"],
          nationalPrefixFormattingRule: "$NP ($FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP ($FG)"
        }
      ]
    },
    PL: {
      regionCode: "PL",
      countryCode: 48,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:6|8\d\d)\d{7}|[1-9]\d{6}(?:\d{2})?|[26]\d{5}$/,
        possibleLengths: [7, 9]
      },
      fixedLine: {
        pattern:
          /^47\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\d{6}|1(?:[0-8]\d{5}|9\d{3}(?:\d{2})?))$/,
        example: "123456789",
        possibleLengths: [7, 9]
      },
      mobile: {
        pattern:
          /^2131[89]\d{4}|21(?:1[013-5]|2\d|3[2-9])\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\d{7}$/,
        example: "512345678",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^39\d{7}$/,
        example: "391234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{5})",
          format: "$1",
          leadingDigits: ["19"]
        },
        {
          pattern: "(\\d{3})(\\d{3})",
          format: "$1 $2",
          leadingDigits: ["11|20|64"]
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: [
            "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
            "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"
          ]
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2,3})",
          format: "$1 $2 $3",
          leadingDigits: ["64"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["1[2-8]|[2-7]|8[1-79]|9[145]"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        }
      ]
    },
    SE: {
      regionCode: "SE",
      countryCode: 46,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[26]\d\d|9)\d{9}|[1-9]\d{8}|[1-689]\d{7}|[1-4689]\d{6}|2\d{5}$/,
        possibleLengths: [7, 8, 9]
      },
      fixedLine: {
        pattern:
          /^(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\d)\d|90[1-9])\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\d{5,6}$/,
        example: "8123456",
        possibleLengths: [7, 8, 9]
      },
      mobile: {
        pattern: /^7[02369]\d{7}$/,
        example: "701234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{2,3})(\\d{2})",
          format: "$1-$2 $3",
          leadingDigits: ["20"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["9(?:00|39|44|9)"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{2})",
          format: "$1-$2 $3",
          leadingDigits: ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
          format: "$1-$2 $3 $4",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2,3})(\\d{2})",
          format: "$1-$2 $3",
          leadingDigits: [
            "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2,3})(\\d{3})",
          format: "$1-$2 $3",
          leadingDigits: ["9(?:00|39|44)"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
          format: "$1-$2 $3 $4",
          leadingDigits: ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1-$2 $3 $4",
          leadingDigits: ["10|7"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{3})(\\d{2})",
          format: "$1-$2 $3 $4",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1-$2 $3 $4",
          leadingDigits: [
            "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
          format: "$1-$2 $3 $4",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1-$2 $3 $4 $5",
          leadingDigits: ["[26]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    NO: {
      regionCode: "NO",
      countryCode: 47,
      internationalPrefix: "00",
      mainCountryForCode: true,
      leadingDigits: "[02-689]|7[0-8]",
      generalDesc: {
        pattern: /^(?:0|[2-9]\d{3})\d{4}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\d{6}$/,
        example: "21234567",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:4[015-8]|9\d)\d{6}$/,
        example: "40612345",
        possibleLengths: [8]
      },
      voip: {
        pattern: /^85[0-5]\d{5}$/,
        example: "85012345",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[2-79]"]
        }
      ]
    },
    DK: {
      regionCode: "DK",
      countryCode: 45,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-9]\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:[0-59][1-9]|[6-8]\d)|3(?:[0-3][1-9]|4[13]|5[1-58]|6[1347-9]|7\d|8[1-8]|9[1-79])|4(?:[0-25][1-9]|[34][2-9]|6[13-579]|7[13579]|8[1-47]|9[127])|5(?:[0-36][1-9]|4[146-9]|5[3-57-9]|7[568]|8[1-358]|9[1-69])|6(?:[0135][1-9]|2[1-68]|4[2-8]|6[1689]|[78]\d|9[15689])|7(?:[0-69][1-9]|7[3-9]|8[147])|8(?:[16-9][1-9]|2[1-58])|9(?:[1-47-9][1-9]|6\d))\d{5}$/,
        example: "32123456",
        possibleLengths: [8]
      },
      mobile: {
        pattern:
          /^(?:2[6-8]|37|6[78]|96)\d{6}|(?:2[0-59]|3[0-689]|[457]\d|6[0-69]|8[126-9]|9[1-47-9])[1-9]\d{5}$/,
        example: "34412345",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[2-9]"]
        }
      ]
    },
    FI: {
      regionCode: "FI",
      countryCode: 358,
      internationalPrefix: "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
      nationalPrefix: "0",
      preferredInternationalPrefix: "00",
      mainCountryForCode: true,
      leadingDigits: "1[03-79]|[2-9]",
      generalDesc: {
        pattern: /^[1-35689]\d{4}|7\d{10,11}|(?:[124-7]\d|3[0-46-9])\d{8}|[1-9]\d{5,8}$/,
        possibleLengths: [5, 6, 7, 8, 9, 10]
      },
      fixedLine: {
        pattern: /^1[3-7][1-8]\d{3,6}|(?:19[1-8]|[23568][1-8]\d|9(?:00|[1-8]\d))\d{2,6}$/,
        example: "131234567",
        possibleLengths: [5, 6, 7, 8, 9]
      },
      mobile: {
        pattern: /^4946\d{2,6}|(?:4[0-8]|50)\d{4,8}$/,
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
    },
    IE: {
      regionCode: "IE",
      countryCode: 353,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:1\d|[2569])\d{6,8}|4\d{6,9}|7\d{8}|8\d{8,9}$/,
        possibleLengths: [7, 8, 9, 10]
      },
      fixedLine: {
        pattern:
          /^(?:1\d|21)\d{6,7}|(?:2[24-9]|4(?:0[24]|5\d|7)|5(?:0[45]|1\d|8)|6(?:1\d|[237-9])|9(?:1\d|[35-9]))\d{5}|(?:23|4(?:[1-469]|8\d)|5[23679]|6[4-6]|7[14]|9[04])\d{7}$/,
        example: "2212345",
        possibleLengths: [7, 8, 9, 10],
        possibleLengthsLocalOnly: [5, 6]
      },
      mobile: {
        pattern: /^8(?:22|[35-9]\d)\d{6}$/,
        example: "850123456",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^76\d{7}$/,
        example: "761234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["2[24-9]|47|58|6[237-9]|9[35-9]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{3})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["[45]0"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d)(\\d{3,4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2569]|4[1-69]|7[14]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["70"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["81"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[78]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["1"]
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["4"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    PT: {
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
    },
    GR: {
      regionCode: "GR",
      countryCode: 30,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^5005000\d{3}|8\d{9,11}|(?:[269]\d|70)\d{8}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^2(?:1\d\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\d|2[1-5]|[34][1-4]|9[1-57]))\d{6}$/,
        example: "2123456789",
        possibleLengths: [10]
      },
      mobile: {
        pattern: /^68[57-9]\d{7}|(?:69|94)\d{8}$/,
        example: "6912345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["21|7"]
        },
        {
          pattern: "(\\d{4})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2689]"]
        },
        {
          pattern: "(\\d{3})(\\d{3,4})(\\d{5})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        }
      ]
    },
    CZ: {
      regionCode: "CZ",
      countryCode: 420,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[2-578]\d|60)\d{7}|9\d{8,11}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern: /^(?:2\d|3[1257-9]|4[16-9]|5[13-9])\d{7}$/,
        example: "212345678",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^7(?:060\d|19(?:[0-5]\d|6[0-6]))\d{4}|(?:60[1-8]|7(?:0[2-5]|[2379]\d))\d{6}$/,
        example: "601123456",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^9[17]0\d{6}$/,
        example: "910123456",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-8]|9[015-7]"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["96"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["9"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["9"]
        }
      ]
    },
    RO: {
      regionCode: "RO",
      countryCode: 40,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[236-8]\d|90)\d{7}|[23]\d{5}$/,
        possibleLengths: [6, 9]
      },
      fixedLine: {
        pattern: /^[23][13-6]\d{7}|(?:2(?:19\d|[3-6]\d9)|31\d\d)\d\d$/,
        example: "211234567",
        possibleLengths: [6, 9]
      },
      mobile: {
        pattern:
          /^(?:630|702)0\d{5}|(?:6(?:00|2\d)|7(?:0[013-9]|1[0-3]|[2-7]\d|8[03-8]|9[0-39]))\d{6}$/,
        example: "712034567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{3})",
          format: "$1 $2",
          leadingDigits: ["2[3-6]", "2[3-6]\\d9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["219|31"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[23]1"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[236-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    HU: {
      regionCode: "HU",
      countryCode: 36,
      internationalPrefix: "00",
      nationalPrefix: "06",
      generalDesc: {
        pattern: /^[235-7]\d{8}|[1-9]\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^(?:1\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\d{6}$/,
        example: "12345678",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [6, 7]
      },
      mobile: {
        pattern: /^(?:[257]0|3[01])\d{7}$/,
        example: "201234567",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^21\d{7}$/,
        example: "211234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "($NP $FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
          nationalPrefixFormattingRule: "($NP $FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-9]"],
          nationalPrefixFormattingRule: "$NP $FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    1: ["US", "CA"],
    7: ["RU"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO"],
    48: ["PL"],
    49: ["DE"],
    52: ["MX"],
    55: ["BR"],
    61: ["AU"],
    81: ["JP"],
    82: ["KR"],
    86: ["CN"],
    91: ["IN"],
    351: ["PT"],
    353: ["IE"],
    358: ["FI"],
    420: ["CZ"]
  }
}

export default bundle
