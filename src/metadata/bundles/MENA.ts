/**
 * MENA - Middle East and North Africa
 * Regions: AE, SA, QA, KW, BH, OM, JO, LB, IL, PS, EG, MA, DZ, TN, LY, IQ, SY, YE
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
    AE: {
      regionCode: "AE",
      countryCode: 971,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[4-7]\d|9[0-689])\d{7}|800\d{2,9}|[2-4679]\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^[2-4679][2-8]\d{6}$/,
        example: "22345678",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^5[024-68]\d{7}$/,
        example: "501234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2,9})",
          format: "$1 $2",
          leadingDigits: ["60|8"]
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[236]|[479][2-8]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d)(\\d{5})",
          format: "$1 $2 $3",
          leadingDigits: ["[479]"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    SA: {
      regionCode: "SA",
      countryCode: 966,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[15]\d|800|92)\d{7}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern: /^1(?:1\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\d{6}$/,
        example: "112345678",
        possibleLengths: [9],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^579[01]\d{5}|5(?:[013-689]\d|7[0-8])\d{6}$/,
        example: "512345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["9"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        }
      ]
    },
    QA: {
      regionCode: "QA",
      countryCode: 974,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^800\d{4}|(?:2|800)\d{6}|(?:0080|[3-7])\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^4(?:(?:[014]\d\d|999)\d|2022)\d{3}$/,
        example: "44123456",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^[35-7]\d{7}$/,
        example: "33123456",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["2[136]|8"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[3-7]"]
        }
      ]
    },
    KW: {
      regionCode: "KW",
      countryCode: 965,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^18\d{5}|(?:[2569]\d|41)\d{6}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^2(?:[23]\d\d|4(?:[1-35-9]\d|44)|5(?:0[034]|[2-46]\d|5[1-3]|7[1-7]))\d{4}$/,
        example: "22345678",
        possibleLengths: [8]
      },
      mobile: {
        pattern:
          /^(?:41\d\d|5(?:(?:[05]\d|1[0-7]|6[56])\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\d)\d|1(?:00|11|6[16])|2[26]2|3[36]3|4[46]4|7(?:0[013-9]|[67]\d)|8[68]8|9(?:[069]\d|3[039]))|9(?:(?:[04679]\d|8[057-9])\d|1(?:00|1[01]|99)|2(?:00|2\d)|3(?:00|3[03])|5(?:00|5\d)))\d{4}$/,
        example: "50012345",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{3,4})",
          format: "$1 $2",
          leadingDigits: ["[169]|2(?:[235]|4[1-35-9])|52"]
        },
        {
          pattern: "(\\d{3})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["[245]"]
        }
      ]
    },
    BH: {
      regionCode: "BH",
      countryCode: 973,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[136-9]\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern:
          /^(?:1(?:3[1356]|6[0156]|7\d)\d|6(?:1[16]\d|500|6(?:0\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\d\d|1(?:11|78)))\d{4}$/,
        example: "17001234",
        possibleLengths: [8]
      },
      mobile: {
        pattern:
          /^(?:3(?:[0-79]\d|8[0-57-9])\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\d|7[0-689])))\d{4}$/,
        example: "36001234",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[13679]|8[02-4679]"]
        }
      ]
    },
    OM: {
      regionCode: "OM",
      countryCode: 968,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:1505|[279]\d{3}|500)\d{4}|800\d{5,6}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^2[1-6]\d{6}$/,
        example: "23123456",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:1505|90[1-9]\d)\d{4}|(?:7[124-9]|9[1-9])\d{6}$/,
        example: "92123456",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4,6})",
          format: "$1 $2",
          leadingDigits: ["[58]"]
        },
        {
          pattern: "(\\d{2})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["2"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[179]"]
        }
      ]
    },
    JO: {
      regionCode: "JO",
      countryCode: 962,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:(?:[2689]|7\d)\d|32|427|53)\d{6}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern:
          /^87(?:000|90[01])\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\d{4}$/,
        example: "62001234",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:427|7(?:[78][0-25-9]|9\d))\d{6}$/,
        example: "790123456",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2356]|87"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{3})(\\d{5,6})",
          format: "$1 $2",
          leadingDigits: ["[89]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["70"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[47]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    LB: {
      regionCode: "LB",
      countryCode: 961,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[27-9]\d{7}|[13-9]\d{6}$/,
        possibleLengths: [7, 8]
      },
      fixedLine: {
        pattern:
          /^7(?:62|8[0-6]|9[04-9])\d{4}|(?:[14-69]\d|2(?:[14-69]\d|[78][1-9])|7[2-57]|8[02-9])\d{5}$/,
        example: "1123456",
        possibleLengths: [7, 8]
      },
      mobile: {
        pattern: /^(?:(?:3|81)\d|7(?:[01]\d|6[013-9]|8[7-9]|9[0-4]))\d{5}$/,
        example: "71123456",
        possibleLengths: [7, 8]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[27-9]"]
        }
      ]
    },
    IL: {
      regionCode: "IL",
      countryCode: 972,
      internationalPrefix: "0(?:0|1[2-9])",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^1\d{6}(?:\d{3,5})?|[57]\d{8}|[1-489]\d{7}$/,
        possibleLengths: [8, 9, 11, 12]
      },
      fixedLine: {
        pattern: /^153\d{8,9}|29[1-9]\d{5}|(?:2[0-8]|[3489]\d)\d{6}$/,
        example: "21234567",
        possibleLengths: [8, 11, 12],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^55(?:4(?:0[0-2]|[16]0)|57[0-289])\d{4}|5(?:(?:[0-2][02-9]|[36]\d|[49][2-9]|8[3-7])\d|5(?:01|2\d|3[0-3]|4[3-5]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\d{5}$/,
        example: "502345678",
        possibleLengths: [9]
      },
      voip: {
        pattern:
          /^7(?:38(?:[05]\d|8[0138])|8(?:33|55|77|81)\d)\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\d|82|9[2-9])\d{6}$/,
        example: "771234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{3})",
          format: "$1-$2",
          leadingDigits: ["125"]
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{2})",
          format: "$1-$2-$3",
          leadingDigits: ["121"]
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[2-489]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[57]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3})",
          format: "$1-$2-$3",
          leadingDigits: ["12"]
        },
        {
          pattern: "(\\d{4})(\\d{6})",
          format: "$1-$2",
          leadingDigits: ["159"]
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{3})(\\d{3})",
          format: "$1-$2-$3-$4",
          leadingDigits: ["1[7-9]"]
        },
        {
          pattern: "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})",
          format: "$1-$2 $3-$4",
          leadingDigits: ["15"]
        }
      ]
    },
    PS: {
      regionCode: "PS",
      countryCode: 970,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[2489]2\d{6}|(?:1\d|5)\d{8}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\d{5}$/,
        example: "22234567",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^5[69]\d{7}$/,
        example: "599123456",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2489]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["5"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["1"]
        }
      ]
    },
    EG: {
      regionCode: "EG",
      countryCode: 20,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[189]\d{8,9}|[24-6]\d{8}|[135]\d{7}$/,
        possibleLengths: [8, 9, 10]
      },
      fixedLine: {
        pattern:
          /^13[23]\d{6}|(?:15|57)\d{6,7}|(?:2\d|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\d{7}$/,
        example: "234567890",
        possibleLengths: [8, 9],
        possibleLengthsLocalOnly: [6, 7]
      },
      mobile: {
        pattern: /^1[0-25]\d{8}$/,
        example: "1001234567",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{7,8})",
          format: "$1 $2",
          leadingDigits: ["[23]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{6,7})",
          format: "$1 $2",
          leadingDigits: ["1[35]|[4-6]|8[2468]|9[235-7]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[89]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{8})",
          format: "$1 $2",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    MA: {
      regionCode: "MA",
      countryCode: 212,
      internationalPrefix: "00",
      nationalPrefix: "0",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^[5-8]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern:
          /^5(?:(?:18|4[0679]|5[03])\d|2(?:[0-25-79]\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\d|5[02-9]|6[02-8]|8[014-9]|9[3-9]))\d{5}$/,
        example: "520123456",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:6(?:[0-79]\d|8[0-247-9])|7(?:[016-8]\d|2[0-8]|5[0-5]))\d{6}$/,
        example: "650123456",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^(?:592(?:4[0-2]|93)|80[89]\d\d)\d{4}$/,
        example: "592401234",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["5[45]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{5})",
          format: "$1-$2",
          leadingDigits: ["5(?:[19]|2[2-46-9]|3[3-9])|8(?:0[89]|92)"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{7})",
          format: "$1-$2",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{6})",
          format: "$1-$2",
          leadingDigits: ["[5-7]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    DZ: {
      regionCode: "DZ",
      countryCode: 213,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[1-4]|[5-79]\d|80)\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^9619\d{5}|(?:1\d|2[013-79]|3[0-8]|4[013-689])\d{6}$/,
        example: "12345678",
        possibleLengths: [8, 9]
      },
      mobile: {
        pattern: /^(?:5(?:4[0-29]|5\d|6[0-3])|6(?:[569]\d|7[0-6])|7[7-9]\d)\d{6}$/,
        example: "551234567",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^98[23]\d{6}$/,
        example: "983123456",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[1-4]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[5-8]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    TN: {
      regionCode: "TN",
      countryCode: 216,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-57-9]\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^81200\d{3}|(?:3[0-2]|7\d)\d{6}$/,
        example: "30010123",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^3(?:001|[12]40)\d{4}|(?:(?:[259]\d|4[0-8])\d|3(?:1[1-35]|6[0-4]|91))\d{5}$/,
        example: "20123456",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-57-9]"]
        }
      ]
    },
    LY: {
      regionCode: "LY",
      countryCode: 218,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[2-9]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:0[56]|[1-6]\d|7[124579]|8[124])|3(?:1\d|2[2356])|4(?:[17]\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\d|5[2-57]|8[1-5])|7(?:[13]\d|2[13-79])|8(?:[124]\d|5[124]|84))\d{6}$/,
        example: "212345678",
        possibleLengths: [9],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^9[1-6]\d{7}$/,
        example: "912345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{7})",
          format: "$1-$2",
          leadingDigits: ["[2-9]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    IQ: {
      regionCode: "IQ",
      countryCode: 964,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:1|7\d\d)\d{7}|[2-6]\d{7,8}$/,
        possibleLengths: [8, 9, 10]
      },
      fixedLine: {
        pattern: /^1\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\d{6,7}$/,
        example: "12345678",
        possibleLengths: [8, 9],
        possibleLengthsLocalOnly: [6, 7]
      },
      mobile: {
        pattern: /^7[3-9]\d{8}$/,
        example: "7912345678",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-6]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    SY: {
      regionCode: "SY",
      countryCode: 963,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[1-359]\d{8}|[1-5]\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^21\d{6,7}|(?:1(?:[14]\d|[2356])|2[235]|3(?:[13]\d|4)|4[134]|5[1-3])\d{6}$/,
        example: "112345678",
        possibleLengths: [8, 9],
        possibleLengthsLocalOnly: [6, 7]
      },
      mobile: {
        pattern: /^(?:50|9[1-9])\d{7}$/,
        example: "944567890",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["[1-4]|5[1-3]"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[59]"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        }
      ]
    },
    YE: {
      regionCode: "YE",
      countryCode: 967,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:1|7\d)\d{7}|[1-7]\d{6}$/,
        possibleLengths: [7, 8, 9]
      },
      fixedLine: {
        pattern:
          /^78[0-7]\d{4}|17\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\d{5}$/,
        example: "1234567",
        possibleLengths: [7, 8],
        possibleLengthsLocalOnly: [6]
      },
      mobile: {
        pattern: /^7[01378]\d{7}$/,
        example: "712345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["[1-6]|7(?:[24-6]|8[0-7])"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    20: ["EG"],
    212: ["MA"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"]
  }
}

export default bundle
