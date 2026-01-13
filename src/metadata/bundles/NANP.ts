/**
 * NANP - North American Numbering Plan (US, Canada, Caribbean)
 * Regions: US, CA, PR, VI, GU, AS, MP, AG, AI, BB, BM, BS, DM, DO, GD, JM, KN, KY, LC, MS, SX, TC, TT, VC, VG
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
    PR: {
      regionCode: "PR",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      leadingDigits: "787|939",
      generalDesc: {
        pattern: /^(?:[589]\d\d|787)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^(?:787|939)[2-9]\d{6}$/,
        example: "7872345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^(?:787|939)[2-9]\d{6}$/,
        example: "7872345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    VI: {
      regionCode: "VI",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "340$1",
      leadingDigits: "340",
      generalDesc: {
        pattern: /^[58]\d{9}|(?:34|90)0\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^340(?:2(?:0\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\d)|884|998)\d{4}$/,
        example: "3406421234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^340(?:2(?:0\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\d)|884|998)\d{4}$/,
        example: "3406421234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    GU: {
      regionCode: "GU",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "671$1",
      leadingDigits: "671",
      generalDesc: {
        pattern: /^(?:[58]\d\d|671|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^671(?:2\d\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\d{4}$/,
        example: "6713001234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^671(?:2\d\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\d{4}$/,
        example: "6713001234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    AS: {
      regionCode: "AS",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([267]\\d{6})$|1",
      nationalPrefixTransformRule: "684$1",
      leadingDigits: "684",
      generalDesc: {
        pattern: /^(?:[58]\d\d|684|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^6846(?:22|33|44|55|77|88|9[19])\d{4}$/,
        example: "6846221234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\d{4}$/,
        example: "6847331234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    MP: {
      regionCode: "MP",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "670$1",
      leadingDigits: "670",
      generalDesc: {
        pattern: /^[58]\d{9}|(?:67|90)0\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\d{4}$/,
        example: "6702345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\d{4}$/,
        example: "6702345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    AG: {
      regionCode: "AG",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([457]\\d{6})$|1",
      nationalPrefixTransformRule: "268$1",
      leadingDigits: "268",
      generalDesc: {
        pattern: /^(?:268|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^268(?:4(?:6[0-38]|84)|56[0-2])\d{4}$/,
        example: "2684601234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
        example: "2684641234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^26848[01]\d{4}$/,
        example: "2684801234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    AI: {
      regionCode: "AI",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2457]\\d{6})$|1",
      nationalPrefixTransformRule: "264$1",
      leadingDigits: "264",
      generalDesc: {
        pattern: /^(?:264|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^264(?:292|4(?:6[12]|9[78]))\d{4}$/,
        example: "2644612345",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\d{4}$/,
        example: "2642351234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    BB: {
      regionCode: "BB",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "246$1",
      leadingDigits: "246",
      generalDesc: {
        pattern: /^(?:246|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^246521[0369]\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\d|3[2-9])|5(?:20|[34]\d|54|7[1-3])|6(?:2\d|38)|7[35]7|9(?:1[89]|63))\d{4}$/,
        example: "2464123456",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^246(?:(?:2(?:[3568]\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\d)|69[5-7]|8(?:[2-5]\d|83))\d|52(?:1[147]|20))\d{3}$/,
        example: "2462501234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^24631\d{5}$/,
        example: "2463101234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    BM: {
      regionCode: "BM",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "441$1",
      leadingDigits: "441",
      generalDesc: {
        pattern: /^(?:441|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^441(?:[46]\d\d|5(?:4\d|60|89))\d{4}$/,
        example: "4414123456",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^441(?:[2378]\d|5[0-39]|9[02])\d{5}$/,
        example: "4413701234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    BS: {
      regionCode: "BS",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([3-8]\\d{6})$|1",
      nationalPrefixTransformRule: "242$1",
      leadingDigits: "242",
      generalDesc: {
        pattern: /^(?:242|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-5]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\d{4}$/,
        example: "2423456789",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\d|3[0-4]|[89]9))\d{4}$/,
        example: "2423591234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    DM: {
      regionCode: "DM",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-7]\\d{6})$|1",
      nationalPrefixTransformRule: "767$1",
      leadingDigits: "767",
      generalDesc: {
        pattern: /^(?:[58]\d\d|767|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\d{4}$/,
        example: "7674201234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\d{4}$/,
        example: "7672251234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    DO: {
      regionCode: "DO",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      leadingDigits: "8001|8[024]9",
      generalDesc: {
        pattern: /^(?:[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^8(?:[04]9[2-9]\d\d|29(?:2(?:[0-59]\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\d|4[7-9])|[45]\d\d|6(?:[0-27-9]\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\d{4}$/,
        example: "8092345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^8[024]9[2-9]\d{6}$/,
        example: "8092345678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    GD: {
      regionCode: "GD",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "473$1",
      leadingDigits: "473",
      generalDesc: {
        pattern: /^(?:473|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-4]|5[59]|73|90)|63[68]|7(?:58|84)|800|938)\d{4}$/,
        example: "4732691234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^473(?:4(?:0[2-79]|1[04-9]|2[0-5]|49|5[6-8])|5(?:2[01]|3[3-8])|901)\d{4}$/,
        example: "4734031234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    JM: {
      regionCode: "JM",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      leadingDigits: "658|876",
      generalDesc: {
        pattern: /^(?:[58]\d\d|658|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^8766060\d{3}|(?:658(?:2(?:[0-8]\d|9[0-46-9])|[3-9]\d\d)|876(?:52[35]|6(?:0[1-3579]|1[0235-9]|[23]\d|40|5[06]|6[2-589]|7[0-25-9]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\d|9[2-468])))\d{4}$/,
        example: "8765230123",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^(?:658295|876(?:2(?:0[1-9]|[13-9]\d|2[013-9])|[348]\d\d|5(?:0[1-9]|[1-9]\d)|6(?:4[89]|6[67])|7(?:0[07]|7\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\d{4}$/,
        example: "8762101234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    KN: {
      regionCode: "KN",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-7]\\d{6})$|1",
      nationalPrefixTransformRule: "869$1",
      leadingDigits: "869",
      generalDesc: {
        pattern: /^(?:[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\d{4}$/,
        example: "8692361234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^869(?:48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
        example: "8697652917",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    KY: {
      regionCode: "KY",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-9]\\d{6})$|1",
      nationalPrefixTransformRule: "345$1",
      leadingDigits: "345",
      generalDesc: {
        pattern: /^(?:345|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|4[89]|88)|9(?:14|4[035-9]))\d{4}$/,
        example: "3452221234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\d{4}$/,
        example: "3453231234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    LC: {
      regionCode: "LC",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-8]\\d{6})$|1",
      nationalPrefixTransformRule: "758$1",
      leadingDigits: "758",
      generalDesc: {
        pattern: /^(?:[58]\d\d|758|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^758(?:234|4(?:30|5\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\d{4}$/,
        example: "7584305678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\d|3[0-3])|812)\d{4}$/,
        example: "7582845678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    MS: {
      regionCode: "MS",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([34]\\d{6})$|1",
      nationalPrefixTransformRule: "664$1",
      leadingDigits: "664",
      generalDesc: {
        pattern: /^(?:[58]\d\d|664|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^6644(?:1[0-3]|91)\d{4}$/,
        example: "6644912345",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^664(?:3(?:49|9[1-6])|49[2-6])\d{4}$/,
        example: "6644923456",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    SX: {
      regionCode: "SX",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "(5\\d{6})$|1",
      nationalPrefixTransformRule: "721$1",
      leadingDigits: "721",
      generalDesc: {
        pattern: /^7215\d{6}|(?:[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^7215(?:4[2-8]|8[239]|9[056])\d{4}$/,
        example: "7215425678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^7215(?:1[02]|2\d|5[034679]|8[014-8])\d{4}$/,
        example: "7215205678",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    TC: {
      regionCode: "TC",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-479]\\d{6})$|1",
      nationalPrefixTransformRule: "649$1",
      leadingDigits: "649",
      generalDesc: {
        pattern: /^(?:[58]\d\d|649|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^649(?:266|712|9(?:4\d|50))\d{4}$/,
        example: "6497121234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^649(?:2(?:3[129]|4[1-79])|3\d\d|4[34][1-3])\d{4}$/,
        example: "6492311234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^649(?:71[01]|966)\d{4}$/,
        example: "6497101234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    TT: {
      regionCode: "TT",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-46-8]\\d{6})$|1",
      nationalPrefixTransformRule: "868$1",
      leadingDigits: "868",
      generalDesc: {
        pattern: /^(?:[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^868(?:2(?:01|1[5-9]|[23]\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\d|7[0-79])|82[124])\d{4}$/,
        example: "8682211234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^868(?:(?:2[5-9]|3\d)\d|4(?:3[0-6]|[6-9]\d)|6(?:20|78|8\d)|7(?:0[1-9]|1[02-9]|[2-9]\d))\d{4}$/,
        example: "8682911234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    VC: {
      regionCode: "VC",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-7]\\d{6})$|1",
      nationalPrefixTransformRule: "784$1",
      leadingDigits: "784",
      generalDesc: {
        pattern: /^(?:[58]\d\d|784|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern:
          /^784(?:266|3(?:6[6-9]|7\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\d{4}$/,
        example: "7842661234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\d{4}$/,
        example: "7844301234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      voip: {
        pattern: /^78451[0-2]\d{4}$/,
        example: "7845101234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    },
    VG: {
      regionCode: "VG",
      countryCode: 1,
      internationalPrefix: "011",
      nationalPrefix: "1",
      nationalPrefixForParsing: "([2-578]\\d{6})$|1",
      nationalPrefixTransformRule: "284$1",
      leadingDigits: "284",
      generalDesc: {
        pattern: /^(?:284|[58]\d\d|900)\d{7}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\d{4}$/,
        example: "2842291234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern:
          /^284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\d{4}$/,
        example: "2843001234",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      }
    }
  },
  countryCodeToRegions: {
    1: [
      "US",
      "CA",
      "PR",
      "VI",
      "GU",
      "AS",
      "MP",
      "AG",
      "AI",
      "BB",
      "BM",
      "BS",
      "DM",
      "DO",
      "GD",
      "JM",
      "KN",
      "KY",
      "LC",
      "MS",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG"
    ]
  }
}

export default bundle
