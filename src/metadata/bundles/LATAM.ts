/**
 * LATAM - Latin America (Central & South America)
 * Regions: MX, GT, BZ, HN, SV, NI, CR, PA, CO, VE, EC, PE, BO, BR, PY, UY, AR, CL, CU, HT, GY, SR, GF
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
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
    GT: {
      regionCode: "GT",
      countryCode: 502,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^80\d{6}|(?:1\d{3}|[2-7])\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^[267][2-9]\d{6}$/,
        example: "22456789",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:[3-5]\d\d|80[0-4])\d{5}$/,
        example: "51234567",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[2-8]"]
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"]
        }
      ]
    },
    BZ: {
      regionCode: "BZ",
      countryCode: 501,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:0800\d|[2-8])\d{6}$/,
        possibleLengths: [7]
      },
      fixedLine: {
        pattern: /^(?:2(?:[02]\d|36|[68]0)|[3-58](?:[02]\d|[68]0)|7(?:[02]\d|32|[68]0))\d{4}$/,
        example: "2221234",
        possibleLengths: [7]
      },
      mobile: {
        pattern: /^6[0-35-7]\d{5}$/,
        example: "6221234",
        possibleLengths: [7]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[2-8]"]
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{4})(\\d{3})",
          format: "$1-$2-$3-$4",
          leadingDigits: ["0"]
        }
      ]
    },
    HN: {
      regionCode: "HN",
      countryCode: 504,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^8\d{10}|[237-9]\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern:
          /^2(?:2(?:0[0-59]|1[1-9]|[23]\d|4[02-7]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[578]|2[3-59]|3[13-9]|4[0-68]|5[1-3589])|5(?:0[2357-9]|1[1-356]|4[03-5]|5\d|6[014-69]|7[04]|80)|6(?:[056]\d|17|2[067]|3[047]|4[0-378]|[78][0-8]|9[01])|7(?:0[5-79]|6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\d{4}$/,
        example: "22123456",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^[37-9]\d{7}$/,
        example: "91234567",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[237-9]"]
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        }
      ]
    },
    SV: {
      regionCode: "SV",
      countryCode: 503,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[25-7]\d{7}|(?:80\d|900)\d{4}(?:\d{4})?$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern:
          /^2(?:79(?:0[0347-9]|[1-9]\d)|89(?:0[024589]|[1-9]\d))\d{3}|2(?:[1-69]\d|[78][0-8])\d{5}$/,
        example: "21234567",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^[5-7]\d{7}$/,
        example: "70123456",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[89]"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[25-7]"]
        },
        {
          pattern: "(\\d{3})(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[89]"]
        }
      ]
    },
    NI: {
      regionCode: "NI",
      countryCode: 505,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:1800|[25-8]\d{3})\d{4}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^2\d{7}$/,
        example: "21234567",
        possibleLengths: [8]
      },
      mobile: {
        pattern:
          /^(?:5(?:5[0-7]|[78]\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\d)\d)\d{5}$/,
        example: "81234567",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[125-8]"]
        }
      ]
    },
    CR: {
      regionCode: "CR",
      countryCode: 506,
      internationalPrefix: "00",
      nationalPrefixForParsing: "(19(?:0[0-2468]|1[09]|20|66|77|99))",
      generalDesc: {
        pattern: /^(?:8\d|90)\d{8}|(?:[24-8]\d{3}|3005)\d{4}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^210[7-9]\d{4}|2(?:[024-7]\d|1[1-9])\d{5}$/,
        example: "22123456",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:3005\d|6500[01])\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\d{6}$/,
        example: "83123456",
        possibleLengths: [8]
      },
      voip: {
        pattern: /^(?:210[0-6]|4\d{3}|5100)\d{4}$/,
        example: "40001234",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[2-7]|8[3-9]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[89]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        }
      ]
    },
    PA: {
      regionCode: "PA",
      countryCode: 507,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:00800|8\d{3})\d{6}|[68]\d{7}|[1-57-9]\d{6}$/,
        possibleLengths: [7, 8]
      },
      fixedLine: {
        pattern:
          /^(?:1(?:0\d|1[0479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\d|1[0-7]|4[013-9]|8[02-9])|3(?:[047-9]\d|1[0-8]|2[0-5]|33|5[0-35]|6[068])|4(?:00|3[0-579]|4\d|7[0-57-9])|5(?:[01]\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[4-9]|90)|8(?:09|2[89]|3\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\d))\d{4}$/,
        example: "2001234",
        possibleLengths: [7]
      },
      mobile: {
        pattern: /^(?:1[16]1|21[89]|6\d{3}|8(?:1[01]|7[23]))\d{4}$/,
        example: "61234567",
        possibleLengths: [7, 8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[1-57-9]"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[68]"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["8"]
        }
      ]
    },
    CO: {
      regionCode: "CO",
      countryCode: 57,
      internationalPrefix: "00(?:4(?:[14]4|56)|[579])",
      nationalPrefix: "0",
      nationalPrefixForParsing: "0([3579]|4(?:[14]4|56))?",
      generalDesc: {
        pattern: /^(?:46|60\d\d)\d{6}|(?:1\d|[39])\d{9}$/,
        possibleLengths: [8, 10]
      },
      fixedLine: {
        pattern:
          /^601055(?:[0-4]\d|50)\d\d|6010(?:[0-4]\d|5[0-4])\d{4}|(?:46|60(?:[18][1-9]|[24-7][2-9]))\d{6}$/,
        example: "6012345678",
        possibleLengths: [8, 10],
        possibleLengthsLocalOnly: [4, 7]
      },
      mobile: {
        pattern:
          /^333301[0-5]\d{3}|3333(?:00|2[5-9]|[3-9]\d)\d{4}|(?:3(?:(?:0[0-5]|1\d|5[01]|70)\d|2(?:[0-3]\d|4[1-9])|3(?:00|3[0-24-9]))|9(?:101|408))\d{6}$/,
        example: "3211234567",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["46"]
        },
        {
          pattern: "(\\d{3})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["6|90"],
          nationalPrefixFormattingRule: "($FG)",
          domesticCarrierCodeFormattingRule: "$NP$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["3[0-357]|9[14]"],
          domesticCarrierCodeFormattingRule: "$NP$CC $FG"
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{7})",
          format: "$1-$2-$3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    VE: {
      regionCode: "VE",
      countryCode: 58,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[68]00\d{7}|(?:[24]\d|[59]0)\d{8}$/,
        possibleLengths: [10]
      },
      fixedLine: {
        pattern: /^(?:2(?:12|3[457-9]|[467]\d|[58][1-9]|9[1-6])|[4-6]00)\d{7}$/,
        example: "2121234567",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^4(?:1[24-8]|2[246])\d{7}$/,
        example: "4121234567",
        possibleLengths: [10]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{7})",
          format: "$1-$2",
          leadingDigits: ["[24-689]"],
          nationalPrefixFormattingRule: "$NP$FG",
          domesticCarrierCodeFormattingRule: "$CC $FG"
        }
      ]
    },
    EC: {
      regionCode: "EC",
      countryCode: 593,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^1\d{9,10}|(?:[2-7]|9\d)\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern: /^[2-7][2-7]\d{6}$/,
        example: "22123456",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^964[0-2]\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\d)\d{6}$/,
        example: "991234567",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^[2-7]890\d{4}$/,
        example: "28901234",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[2-7]"]
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: ["[2-7]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"]
        }
      ]
    },
    PE: {
      regionCode: "PE",
      countryCode: 51,
      internationalPrefix: "00|19(?:1[124]|77|90)00",
      nationalPrefix: "0",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[14-8]|9\d)\d{7}$/,
        possibleLengths: [8, 9]
      },
      fixedLine: {
        pattern:
          /^(?:(?:(?:4[34]|5[14])[0-8]|687)\d|7(?:173|(?:3[0-8]|55)\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[0569]|[56]0)))\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\d{6}$/,
        example: "11234567",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [6, 7]
      },
      mobile: {
        pattern: /^9\d{8}$/,
        example: "912345678",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["80"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d)(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["[4-8]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["9"]
        }
      ]
    },
    BO: {
      regionCode: "BO",
      countryCode: 591,
      internationalPrefix: "00(?:1\\d)?",
      nationalPrefix: "0",
      nationalPrefixForParsing: "0(1\\d)?",
      generalDesc: {
        pattern: /^8001\d{5}|(?:[2-467]\d|50)\d{6}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:2\d\d|5(?:11|[258]\d|9[67])|6(?:12|2\d|9[34])|8(?:2[34]|39|62))|3(?:3\d\d|4(?:6\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\d\d|6(?:11|[24689]\d|72)))\d{4}$/,
        example: "22123456",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^[67]\d{7}$/,
        example: "71234567",
        possibleLengths: [8]
      },
      voip: {
        pattern: /^50\d{6}$/,
        example: "50123456",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      formats: [
        {
          pattern: "(\\d)(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["[235]|4[46]"],
          domesticCarrierCodeFormattingRule: "$NP$CC $FG"
        },
        {
          pattern: "(\\d{8})",
          format: "$1",
          leadingDigits: ["[67]"],
          domesticCarrierCodeFormattingRule: "$NP$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["8"],
          domesticCarrierCodeFormattingRule: "$NP$CC $FG"
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
    PY: {
      regionCode: "PY",
      countryCode: 595,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^59\d{4,6}|9\d{5,10}|(?:[2-46-8]\d|5[0-8])\d{4,7}$/,
        possibleLengths: [7, 8, 9]
      },
      fixedLine: {
        pattern:
          /^(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\d{5,7}|(?:2(?:2[4-68]|[4-68]\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\d|6[1-578]|75|8[0-8])|858)\d{5,6}$/,
        example: "212345678",
        possibleLengths: [7, 8, 9],
        possibleLengthsLocalOnly: [5, 6]
      },
      mobile: {
        pattern: /^9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\d{6}$/,
        example: "961456789",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^8700[0-4]\d{4}$/,
        example: "870012345",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{3,6})",
          format: "$1 $2",
          leadingDigits: ["[2-9]0"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{7})",
          format: "$1",
          leadingDigits: ["[15]"]
        },
        {
          pattern: "(\\d{2})(\\d{5})",
          format: "$1 $2",
          leadingDigits: ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{3})(\\d{4,5})",
          format: "$1 $2",
          leadingDigits: ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["87"]
        },
        {
          pattern: "(\\d{3})(\\d{6})",
          format: "$1 $2",
          leadingDigits: ["9(?:[5-79]|8[1-7])"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-8]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["9"]
        }
      ]
    },
    UY: {
      regionCode: "UY",
      countryCode: 598,
      internationalPrefix: "0(?:0|1[3-9]\\d)",
      nationalPrefix: "0",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern: /^0004\d{2,9}|[1249]\d{7}|2\d{3,4}|(?:[49]\d|80)\d{5}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^(?:1(?:770|9(?:20|[89]7))|(?:2\d|4[2-7])\d\d)\d{4}$/,
        example: "21231234",
        possibleLengths: [8],
        possibleLengthsLocalOnly: [7]
      },
      mobile: {
        pattern: /^9[1-9]\d{6}$/,
        example: "94231234",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{4,5})",
          format: "$1",
          leadingDigits: ["21"]
        },
        {
          pattern: "(\\d{3})(\\d{3,4})",
          format: "$1 $2",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[49]0|8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[124]"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{2,4})",
          format: "$1 $2 $3",
          leadingDigits: ["0"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["0"]
        }
      ]
    },
    AR: {
      regionCode: "AR",
      countryCode: 54,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing:
        "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
      nationalPrefixTransformRule: "9$1",
      generalDesc: {
        pattern: /^(?:11|[89]\d\d)\d{8}|[2368]\d{9}$/,
        possibleLengths: [10, 11]
      },
      fixedLine: {
        pattern:
          /^3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\d{5}|(?:2(?:657|9(?:54|66))|3(?:48[27]|7(?:55|77)|8(?:65|78)))[2-8]\d{5}|(?:2(?:284|3(?:02|23)|477|622|920)|3(?:4(?:46|89|92)|541))[2-7]\d{5}|(?:(?:11[1-8]|670)\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[25][4-6]|3[3-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-7]|3[4-6]|5[3-6]|7[2-6]|8[3-68])))\d{6}|(?:2(?:2(?:62|81)|320|9(?:42|83))|3(?:329|4(?:62|7[16])|5(?:43|64)|7(?:18|5[17])))[2-6]\d{5}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\d{5}|(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|64)|5(?:25|37|4[47]|71)|7(?:35|72)|825))[3-6]\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[035-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[3-5]|8[26])|8(?:2[67]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\d{5}$/,
        example: "1123456789",
        possibleLengths: [10],
        possibleLengthsLocalOnly: [6, 7, 8]
      },
      mobile: {
        pattern:
          /^93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|47[35]|9(?:[07]2|2[26]|34|46))|3327)[45]\d{5}|9(?:2(?:657|9(?:54|66))|3(?:48[27]|7(?:55|77)|8(?:65|78)))[2-8]\d{5}|9(?:2(?:284|3(?:02|23)|477|622|920)|3(?:4(?:46|89|92)|541))[2-7]\d{5}|(?:675\d|9(?:11[1-8]\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[25][4-6]|3[3-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-7]|3[4-6]|5[3-6]|7[2-6]|8[3-68]))))\d{6}|9(?:2(?:2(?:62|81)|320|9(?:42|83))|3(?:329|4(?:62|7[16])|5(?:43|64)|7(?:18|5[17])))[2-6]\d{5}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\d{5}|9(?:2(?:257|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|64)|5(?:25|37|4[47]|71)|7(?:35|72)|825))[3-6]\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[035-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[14]|4[13]|5[468]|7[3-5]|8[26])|8(?:2[67]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\d{5}$/,
        example: "91123456789",
        possibleLengths: [10, 11],
        possibleLengthsLocalOnly: [6, 7, 8]
      },
      formats: [
        {
          pattern: "(\\d{3})",
          format: "$1",
          leadingDigits: ["0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911"]
        },
        {
          pattern: "(\\d{2})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[1-9]"]
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[2-9]"]
        },
        {
          pattern: "(\\d{4})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[1-8]"]
        },
        {
          pattern: "(\\d{4})(\\d{2})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: [
            "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
            "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
            "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
            "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
          ],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{2})(\\d{4})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: ["1"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1-$2-$3",
          leadingDigits: ["[68]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{4})",
          format: "$1 $2-$3",
          leadingDigits: ["[23]"],
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: "(\\d)(\\d{4})(\\d{2})(\\d{4})",
          format: "$2 15-$3-$4",
          leadingDigits: [
            "9(?:2[2-469]|3[3-578])",
            "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
            "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
            "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
            "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
          ],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{2})(\\d{4})(\\d{4})",
          format: "$2 15-$3-$4",
          leadingDigits: ["91"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{5})",
          format: "$1-$2-$3",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d)(\\d{3})(\\d{3})(\\d{4})",
          format: "$2 15-$3-$4",
          leadingDigits: ["9"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    CL: {
      regionCode: "CL",
      countryCode: 56,
      internationalPrefix: "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
      generalDesc: {
        pattern: /^12300\d{6}|6\d{9,10}|[2-9]\d{8}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern:
          /^2(?:1982[0-6]|3314[05-9])\d{3}|(?:2(?:1(?:160|962)|3(?:(?:2\d|50)\d|3(?:[034679]\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-389])|600)|646[59])|(?:600|80[1-9])\d\d|9(?:(?:10[0-2]|7[1-9]\d)\d|3(?:[0-57-9]\d\d|6(?:0[02-9]|[1-9]\d))|6(?:[0-8]\d\d|9(?:[02-79]\d|1[05-9]))|9(?:[03-9]\d\d|1(?:[0235-9]\d|4[0-24-9])|2(?:[0-79]\d|8[0-46-9]))))\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\d{7}$/,
        example: "600123456",
        possibleLengths: [9]
      },
      mobile: {
        pattern:
          /^2(?:1982[0-6]|3314[05-9])\d{3}|(?:2(?:1(?:160|962)|3(?:(?:2\d|50)\d|3(?:[034679]\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-389])|600)|646[59])|80[1-8]\d\d|9(?:(?:10[0-2]|7[1-9]\d)\d|3(?:[0-57-9]\d\d|6(?:0[02-9]|[1-9]\d))|6(?:[0-8]\d\d|9(?:[02-79]\d|1[05-9]))|9(?:[03-9]\d\d|1(?:[0235-9]\d|4[0-24-9])|2(?:[0-79]\d|8[0-46-9]))))\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\d{7}$/,
        example: "221234567",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^44\d{7}$/,
        example: "441234567",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{4})",
          format: "$1",
          leadingDigits: ["1(?:[03-589]|21)|[29]0|78"]
        },
        {
          pattern: "(\\d{5})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["219", "2196"],
          nationalPrefixFormattingRule: "($FG)"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["60|809"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["44"]
        },
        {
          pattern: "(\\d)(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["2[1-36]"],
          nationalPrefixFormattingRule: "($FG)"
        },
        {
          pattern: "(\\d)(\\d{4})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["9(?:10|[2-9])"]
        },
        {
          pattern: "(\\d{2})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],
          nationalPrefixFormattingRule: "($FG)"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3,4})",
          format: "$1 $2 $3",
          leadingDigits: ["60|8"]
        },
        {
          pattern: "(\\d{4})(\\d{3})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["1"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{2})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["60"]
        }
      ]
    },
    CU: {
      regionCode: "CU",
      countryCode: 53,
      internationalPrefix: "119",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[2-7]|8\d\d)\d{7}|[2-47]\d{6}|[34]\d{5}$/,
        possibleLengths: [6, 7, 8, 10]
      },
      fixedLine: {
        pattern:
          /^(?:3[23]|4[89])\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\d)\d{6}|(?:2[1-4]|4[1257]|7\d)\d{5,6}$/,
        example: "71234567",
        possibleLengths: [6, 7, 8, 10],
        possibleLengthsLocalOnly: [4, 5]
      },
      mobile: {
        pattern: /^(?:5\d|6[2-4])\d{6}$/,
        example: "51234567",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{4,6})",
          format: "$1 $2",
          leadingDigits: ["2[1-4]|[34]"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d)(\\d{6,7})",
          format: "$1 $2",
          leadingDigits: ["7"],
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: "(\\d)(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["[56]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{7})",
          format: "$1 $2",
          leadingDigits: ["8"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    HT: {
      regionCode: "HT",
      countryCode: 509,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-589]\d{7}$/,
        possibleLengths: [8]
      },
      fixedLine: {
        pattern: /^2(?:2\d|5[1-5]|81|9[149])\d{5}$/,
        example: "22453300",
        possibleLengths: [8]
      },
      mobile: {
        pattern: /^(?:[34]\d|5[56])\d{6}$/,
        example: "34101234",
        possibleLengths: [8]
      },
      voip: {
        pattern: /^9(?:[67][0-4]|8[0-3589]|9\d)\d{5}$/,
        example: "98901234",
        possibleLengths: [8]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{2})(\\d{4})",
          format: "$1 $2 $3",
          leadingDigits: ["[2-589]"]
        }
      ]
    },
    GY: {
      regionCode: "GY",
      countryCode: 592,
      internationalPrefix: "001",
      generalDesc: {
        pattern: /^(?:[2-8]\d{3}|9008)\d{3}$/,
        possibleLengths: [7]
      },
      fixedLine: {
        pattern:
          /^(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\d|7[0-79])|3(?:2[25-9]|3\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\d{4}$/,
        example: "2201234",
        possibleLengths: [7]
      },
      mobile: {
        pattern: /^(?:51[01]|6\d\d|7(?:[0-5]\d|6[0-59]|70))\d{4}$/,
        example: "6091234",
        possibleLengths: [7]
      },
      voip: {
        pattern: /^515\d{4}$/,
        example: "5151234",
        possibleLengths: [7]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[2-9]"]
        }
      ]
    },
    SR: {
      regionCode: "SR",
      countryCode: 597,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[2-5]|[6-8]\d|90)\d{5}$/,
        possibleLengths: [6, 7]
      },
      fixedLine: {
        pattern: /^(?:2[1-3]|3[0-7]|4\d|5[2-58])\d{4}$/,
        example: "211234",
        possibleLengths: [6]
      },
      mobile: {
        pattern: /^(?:6[08]|7[124-7]|8[1-9])\d{5}$/,
        example: "7412345",
        possibleLengths: [7]
      },
      voip: {
        pattern: /^56\d{4}$/,
        example: "561234",
        possibleLengths: [6]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})",
          format: "$1-$2-$3",
          leadingDigits: ["56"]
        },
        {
          pattern: "(\\d{3})(\\d{3})",
          format: "$1-$2",
          leadingDigits: ["[2-5]"]
        },
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1-$2",
          leadingDigits: ["[6-9]"]
        }
      ]
    },
    GF: {
      regionCode: "GF",
      countryCode: 594,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[56]94\d|7093)\d{5}|(?:80|9\d)\d{7}$/,
        possibleLengths: [9]
      },
      fixedLine: {
        pattern: /^594(?:[02-49]\d|1[0-5]|5[6-9]|6[0-3]|80)\d{4}$/,
        example: "594101234",
        possibleLengths: [9]
      },
      mobile: {
        pattern: /^(?:694(?:[0-249]\d|3[0-8])|7093[0-3])\d{4}$/,
        example: "694201234",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^9(?:(?:396|76\d)\d|476[0-6])\d{4}$/,
        example: "976012345",
        possibleLengths: [9]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[5-7]|9[47]"],
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[89]"],
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    509: ["HT"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    597: ["SR"],
    598: ["UY"]
  }
}

export default bundle
