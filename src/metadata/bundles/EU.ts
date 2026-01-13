/**
 * EU - European Union member states (27 countries)
 * Regions: AT, BE, BG, HR, CY, CZ, DK, EE, FI, FR, DE, GR, HU, IE, IT, LV, LT, LU, MT, NL, PL, PT, RO, SK, SI, ES, SE
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
    AT: {
      regionCode: "AT",
      countryCode: 43,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern:
          /^1\d{3,12}|2\d{6,12}|43(?:(?:0\d|5[02-9])\d{3,9}|2\d{4,5}|[3467]\d{4}|8\d{4,6}|9\d{4,7})|5\d{4,12}|8\d{7,12}|9\d{8,12}|(?:[367]\d|4[0-24-9])\d{4,11}$/,
        possibleLengths: 16368 // bits: 4,5,6,7,8,9,10,11,12,13
      },
      fixedLine: {
        pattern:
          /^1(?:11\d|[2-9]\d{3,11})|(?:316|463)\d{3,10}|648[34]\d{3,9}|(?:51|66|73)2\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-7]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\d{4,10}$/,
        example: "1234567890",
        possibleLengths: 16368, // bits: 4,5,6,7,8,9,10,11,12,13
        possibleLengthsLocalOnly: 8 // bits: 3
      },
      mobile: {
        pattern: /^6(?:485|(?:5[0-3579]|6[013-9]|[7-9]\d)\d)\d{3,9}$/,
        example: "664123456",
        possibleLengths: 16256 // bits: 7,8,9,10,11,12,13
      },
      voip: {
        pattern: /^5(?:0[1-9]|17|[79]\d)\d{2,10}|7[28]0\d{6,10}$/,
        example: "780123456",
        possibleLengths: 16352 // bits: 5,6,7,8,9,10,11,12,13
      },
      formats: [
        {
          pattern: /^(\d{4})$/,
          format: "$1",
          leadingDigits: /^14/
        },
        {
          pattern: /^(\d)(\d{3,12})$/,
          format: "$1 $2",
          leadingDigits: /^1(?:11|[2-9])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})$/,
          format: "$1 $2",
          leadingDigits: /^517/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3,5})$/,
          format: "$1 $2",
          leadingDigits: /^5[079]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^[18]/
        },
        {
          pattern: /^(\d{3})(\d{3,10})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]|(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3,9})$/,
          format: "$1 $2",
          leadingDigits: /^[2-467]|5[2-6]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^5/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{4,7})$/,
          format: "$1 $2 $3",
          leadingDigits: /^5/,
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
        possibleLengths: 768 // bits: 8,9
      },
      fixedLine: {
        pattern:
          /^80[2-8]\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\d|6[013-57-9]|71|8[1-79]|9[2-4])\d{6}$/,
        example: "12345678",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^4[5-9]\d{7}$/,
        example: "470123456",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:80|9)0/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[239]|4[23]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[15-8]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^4/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    BG: {
      regionCode: "BG",
      countryCode: 359,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^00800\d{7}|[2-7]\d{6,7}|[89]\d{6,8}|2\d{5}$/,
        possibleLengths: 960 // bits: 6,7,8,9
      },
      fixedLine: {
        pattern:
          /^2\d{5,7}|(?:43[1-6]|70[1-9])\d{4,5}|(?:[36]\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\d{5,6}$/,
        example: "2123456",
        possibleLengths: 448, // bits: 6,7,8
        possibleLengthsLocalOnly: 48 // bits: 4,5
      },
      mobile: {
        pattern: /^(?:43[07-9]|99[69]\d)\d{5}|(?:8[7-9]|98)\d{7}$/,
        example: "43012345",
        possibleLengths: 768 // bits: 8,9
      },
      formats: [
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^1/
        },
        {
          pattern: /^(\d)(\d)(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^43[1-6]|70[1-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2,3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:70|8)0/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{2})$/,
          format: "$1 $2 $3",
          leadingDigits: /^43[1-7]|7/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[48]|9[08]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^9/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    HR: {
      regionCode: "HR",
      countryCode: 385,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[2-69]\d{8}|80\d{5,7}|[1-79]\d{7}|6\d{6}$/,
        possibleLengths: 768 // bits: 8,9
      },
      fixedLine: {
        pattern: /^1\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\d{6,7}$/,
        example: "12345678",
        possibleLengths: 768, // bits: 8,9
        possibleLengthsLocalOnly: 192 // bits: 6,7
      },
      mobile: {
        pattern:
          /^9(?:(?:0[1-9]|[12589]\d)\d\d|7(?:[0679]\d\d|5(?:[01]\d|44|55|77|9[5-79])))\d{4}|98\d{6}$/,
        example: "921234567",
        possibleLengths: 768 // bits: 8,9
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^6[01]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2,3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{4})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^6|7[245]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^9/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2-57]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    CY: {
      regionCode: "CY",
      countryCode: 357,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[279]\d|[58]0)\d{6}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^2[2-6]\d{6}$/,
        example: "22345678",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^9(?:10|[4-79]\d)\d{5}$/,
        example: "96123456",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^[257-9]/
        }
      ]
    },
    CZ: {
      regionCode: "CZ",
      countryCode: 420,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[2-578]\d|60)\d{7}|9\d{8,11}$/,
        possibleLengths: 512 // bits: 9
      },
      fixedLine: {
        pattern: /^(?:2\d|3[1257-9]|4[16-9]|5[13-9])\d{7}$/,
        example: "212345678",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern: /^7(?:060\d|19(?:[0-5]\d|6[0-6]))\d{4}|(?:60[1-8]|7(?:0[2-5]|[2379]\d))\d{6}$/,
        example: "601123456",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^9[17]0\d{6}$/,
        example: "910123456",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2-8]|9[015-7]/
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^96/
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^9/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^9/
        }
      ]
    },
    DK: {
      regionCode: "DK",
      countryCode: 45,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-9]\d{7}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern:
          /^(?:2(?:[0-59][1-9]|[6-8]\d)|3(?:[0-3][1-9]|4[13]|5[1-58]|6[1347-9]|7\d|8[1-8]|9[1-79])|4(?:[0-25][1-9]|[34][2-9]|6[13-579]|7[13579]|8[1-47]|9[127])|5(?:[0-36][1-9]|4[146-9]|5[3-57-9]|7[568]|8[1-358]|9[1-69])|6(?:[0135][1-9]|2[1-68]|4[2-8]|6[1689]|[78]\d|9[15689])|7(?:[0-69][1-9]|7[3-9]|8[147])|8(?:[16-9][1-9]|2[1-58])|9(?:[1-47-9][1-9]|6\d))\d{5}$/,
        example: "32123456",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern:
          /^(?:2[6-8]|37|6[78]|96)\d{6}|(?:2[0-59]|3[0-689]|[457]\d|6[0-69]|8[126-9]|9[1-47-9])[1-9]\d{5}$/,
        example: "34412345",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[2-9]/
        }
      ]
    },
    EE: {
      regionCode: "EE",
      countryCode: 372,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^8\d{9}|[4578]\d{7}|(?:[3-8]\d|90)\d{5}$/,
        possibleLengths: 384 // bits: 7,8
      },
      fixedLine: {
        pattern: /^(?:3[23589]|4[3-8]|6\d|7[1-9]|88)\d{5}$/,
        example: "3212345",
        possibleLengths: 128 // bits: 7
      },
      mobile: {
        pattern:
          /^(?:5\d{5}|8(?:1(?:0(?:0(?:00|[178]\d)|[3-9]\d\d)|(?:1(?:0[2-6]|1\d)|[2-79]\d\d)\d)|2(?:0(?:0(?:00|4\d)|(?:19|[2-7]\d)\d)|(?:(?:[124-69]\d|3[5-9])\d|7(?:[0-79]\d|8[013-9])|8(?:[2-6]\d|7[01]))\d)|[349]\d{4}))\d\d|5(?:(?:[02]\d|5[0-478])\d|1(?:[0-8]\d|95)|6(?:4[0-4]|5[1-589]))\d{3}$/,
        example: "51234567",
        possibleLengths: 384 // bits: 7,8
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88|[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88)/
        },
        {
          pattern: /^(\d{4})(\d{3,4})$/,
          format: "$1 $2",
          leadingDigits: /^(?:[45]|8(?:00|[1-49])|[45]|8(?:00[1-9]|[1-49]))/
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^7/
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/
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
      leadingDigits: /^1[03-79]|[2-9]/,
      generalDesc: {
        pattern: /^[1-35689]\d{4}|7\d{10,11}|(?:[124-7]\d|3[0-46-9])\d{8}|[1-9]\d{5,8}$/,
        possibleLengths: 2016 // bits: 5,6,7,8,9,10
      },
      fixedLine: {
        pattern: /^1[3-7][1-8]\d{3,6}|(?:19[1-8]|[23568][1-8]\d|9(?:00|[1-8]\d))\d{2,6}$/,
        example: "131234567",
        possibleLengths: 992 // bits: 5,6,7,8,9
      },
      mobile: {
        pattern: /^4946\d{2,6}|(?:4[0-8]|50)\d{4,8}$/,
        example: "412345678",
        possibleLengths: 1984 // bits: 6,7,8,9,10
      },
      formats: [
        {
          pattern: /^(\d{5})$/,
          format: "$1",
          leadingDigits: /^75[12]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{5})$/,
          format: "$1",
          leadingDigits: /^20[2-59]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^11/
        },
        {
          pattern: /^(\d{3})(\d{3,7})$/,
          format: "$1 $2",
          leadingDigits: /^(?:[1-3]0|[68])0|70[07-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{4,8})$/,
          format: "$1 $2",
          leadingDigits: /^[14]|2[09]|50|7[135]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{6,10})$/,
          format: "$1 $2",
          leadingDigits: /^7/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{4,9})$/,
          format: "$1 $2",
          leadingDigits: /^(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9/,
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
        possibleLengths: 512 // bits: 9
      },
      fixedLine: {
        pattern: /^(?:26[013-9]|59[1-35-9])\d{6}|(?:[13]\d|2[0-57-9]|4[1-9]|5[0-8])\d{7}$/,
        example: "123456789",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern: /^(?:6(?:[0-24-8]\d|3[0-8]|9[589])|7[3-9]\d)\d{6}$/,
        example: "612345678",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^9\d{8}$/,
        example: "912345678",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{4})$/,
          format: "$1",
          leadingDigits: /^10/
        },
        {
          pattern: /^(\d{3})(\d{3})$/,
          format: "$1 $2",
          leadingDigits: /^1/
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP $FG"
        },
        {
          pattern: /^(\d)(\d{2})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4 $5",
          leadingDigits: /^[1-79]/,
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
        possibleLengths: 65504 // bits: 5,6,7,8,9,10,11,12,13,14,15
      },
      fixedLine: {
        pattern:
          /^32\d{9,11}|49[1-6]\d{10}|322\d{6}|49[0-7]\d{3,9}|(?:[34]0|[68]9)\d{3,13}|(?:2(?:0[1-689]|[1-3569]\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\d|[589][0-7]|6[0-8]|7[0-467]))\d{3,12}$/,
        example: "30123456",
        possibleLengths: 65504, // bits: 5,6,7,8,9,10,11,12,13,14,15
        possibleLengthsLocalOnly: 28 // bits: 2,3,4
      },
      mobile: {
        pattern: /^1(?:(?:5(?:[0-25-9]\d\d|3(?:10|33))|7[26-9]\d\d)\d{6}|6[023]\d{7,8})|17\d{8}$/,
        example: "15123456789",
        possibleLengths: 3072 // bits: 10,11
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3,13})$/,
          format: "$1 $2",
          leadingDigits: /^3[02]|40|[68]9/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^(?:227|2277)/
        },
        {
          pattern: /^(\d{3})(\d{3,12})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1|2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{2,11})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^138/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{5})(\d{2,10})$/,
          format: "$1 $2",
          leadingDigits: /^3/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{5,11})$/,
          format: "$1 $2",
          leadingDigits: /^181/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d)(\d{4,10})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1(?:3|80)|9/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{7,8})$/,
          format: "$1 $2",
          leadingDigits: /^1[67]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{7,12})$/,
          format: "$1 $2",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{5})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^(?:185|1850|18500)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^7/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{7})$/,
          format: "$1 $2",
          leadingDigits: /^18[68]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{7})$/,
          format: "$1 $2",
          leadingDigits: /^15[1279]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{5})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^(?:15[03568]|15(?:[0568]|3[13]))/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{8})$/,
          format: "$1 $2",
          leadingDigits: /^18/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{7,8})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1(?:6[023]|7)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{2})(\d{7})$/,
          format: "$1 $2 $3",
          leadingDigits: /^15[279]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{8})$/,
          format: "$1 $2 $3",
          leadingDigits: /^15/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    GR: {
      regionCode: "GR",
      countryCode: 30,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^5005000\d{3}|8\d{9,11}|(?:[269]\d|70)\d{8}$/,
        possibleLengths: 1024 // bits: 10
      },
      fixedLine: {
        pattern:
          /^2(?:1\d\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\d|2[1-5]|[34][1-4]|9[1-57]))\d{6}$/,
        example: "2123456789",
        possibleLengths: 1024 // bits: 10
      },
      mobile: {
        pattern: /^68[57-9]\d{7}|(?:69|94)\d{8}$/,
        example: "6912345678",
        possibleLengths: 1024 // bits: 10
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^21|7/
        },
        {
          pattern: /^(\d{4})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2689]/
        },
        {
          pattern: /^(\d{3})(\d{3,4})(\d{5})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/
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
        possibleLengths: 768 // bits: 8,9
      },
      fixedLine: {
        pattern: /^(?:1\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\d{6}$/,
        example: "12345678",
        possibleLengths: 256, // bits: 8
        possibleLengthsLocalOnly: 192 // bits: 6,7
      },
      mobile: {
        pattern: /^(?:[257]0|3[01])\d{7}$/,
        example: "201234567",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^21\d{7}$/,
        example: "211234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d)(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/,
          nationalPrefixFormattingRule: "($NP $FG)"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]/,
          nationalPrefixFormattingRule: "($NP $FG)"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2-9]/,
          nationalPrefixFormattingRule: "$NP $FG"
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
        possibleLengths: 1920 // bits: 7,8,9,10
      },
      fixedLine: {
        pattern:
          /^(?:1\d|21)\d{6,7}|(?:2[24-9]|4(?:0[24]|5\d|7)|5(?:0[45]|1\d|8)|6(?:1\d|[237-9])|9(?:1\d|[35-9]))\d{5}|(?:23|4(?:[1-469]|8\d)|5[23679]|6[4-6]|7[14]|9[04])\d{7}$/,
        example: "2212345",
        possibleLengths: 1920, // bits: 7,8,9,10
        possibleLengthsLocalOnly: 96 // bits: 5,6
      },
      mobile: {
        pattern: /^8(?:22|[35-9]\d)\d{6}$/,
        example: "850123456",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^76\d{7}$/,
        example: "761234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^2[24-9]|47|58|6[237-9]|9[35-9]/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{3})(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^[45]0/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d)(\d{3,4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2569]|4[1-69]|7[14]/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^70/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^81/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[78]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^4/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{2})(\d)(\d{3})(\d{4})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^8/,
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
        possibleLengths: 8128 // bits: 6,7,8,9,10,11,12
      },
      fixedLine: {
        pattern:
          /^0(?:669[0-79]\d{1,6}|831\d{2,8})|0(?:1(?:[0159]\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\d\d|3(?:[0159]\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\d|6[0-8])|7(?:[0159]\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\d{2,7}$/,
        example: "0212345678",
        possibleLengths: 8128 // bits: 6,7,8,9,10,11,12
      },
      mobile: {
        pattern: /^3[2-9]\d{7,8}|(?:31|43)\d{8}$/,
        example: "3123456789",
        possibleLengths: 1536 // bits: 9,10
      },
      voip: {
        pattern: /^55\d{8}$/,
        example: "5512345678",
        possibleLengths: 1024 // bits: 10
      },
      formats: [
        {
          pattern: /^(\d{4,5})$/,
          format: "$1",
          leadingDigits: /^(?:1(?:0|9[246])|1(?:0|9(?:2[2-9]|[46])))/
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^1(?:1|92)/
        },
        {
          pattern: /^(\d{2})(\d{4,6})$/,
          format: "$1 $2",
          leadingDigits: /^0[26]/
        },
        {
          pattern: /^(\d{3})(\d{3,6})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:0[13-57-9][0159]|8(?:03|4[17]|9[2-5])|0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4])))/
        },
        {
          pattern: /^(\d{4})(\d{2,6})$/,
          format: "$1 $2",
          leadingDigits: /^0(?:[13-579][2-46-8]|8[236-8])/
        },
        {
          pattern: /^(\d{4})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^894/
        },
        {
          pattern: /^(\d{2})(\d{3,4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^0[26]|5/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1(?:44|[679])|[378]|43/
        },
        {
          pattern: /^(\d{3})(\d{3,4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^0[13-57-9][0159]|14/
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{5})$/,
          format: "$1 $2 $3",
          leadingDigits: /^0[26]/
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^0/
        },
        {
          pattern: /^(\d{3})(\d{4})(\d{4,5})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[03]/
        }
      ]
    },
    LV: {
      regionCode: "LV",
      countryCode: 371,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:[268]\d|78|90)\d{6}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^6\d{7}$/,
        example: "63123456",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^2333[0-8]\d{3}|2(?:[0-24-9]\d\d|3(?:0[07]|[14-9]\d|2[02-9]|3[0-24-9]))\d{4}$/,
        example: "21234567",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[2679]|8[01]/
        }
      ]
    },
    LT: {
      regionCode: "LT",
      countryCode: 370,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "[08]",
      generalDesc: {
        pattern: /^(?:[3469]\d|52|[78]0)\d{6}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^(?:3[1478]|4[124-6]|52)\d{6}$/,
        example: "31234567",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^6\d{7}$/,
        example: "61234567",
        possibleLengths: 256 // bits: 8
      },
      voip: {
        pattern: /^[89]01\d{5}$/,
        example: "80123456",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d)(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^52[0-7]/,
          nationalPrefixFormattingRule: "($NP-$FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[7-9]/,
          nationalPrefixFormattingRule: "$NP $FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{2})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^37|4(?:[15]|6[1-8])/,
          nationalPrefixFormattingRule: "($NP-$FG)",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{3})(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^[3-6]/,
          nationalPrefixFormattingRule: "($NP-$FG)",
          nationalPrefixOptional: true
        }
      ]
    },
    LU: {
      regionCode: "LU",
      countryCode: 352,
      internationalPrefix: "00",
      nationalPrefixForParsing: "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
      generalDesc: {
        pattern: /^35[013-9]\d{4,8}|6\d{8}|35\d{2,4}|(?:[2457-9]\d|3[0-46-9])\d{2,9}$/,
        possibleLengths: 4080 // bits: 4,5,6,7,8,9,10,11
      },
      fixedLine: {
        pattern:
          /^(?:35[013-9]|80[2-9]|90[89])\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\d|8[13-9]|9[2-579])\d{2,9}$/,
        example: "27123456",
        possibleLengths: 4080 // bits: 4,5,6,7,8,9,10,11
      },
      mobile: {
        pattern: /^6(?:[269][18]|5[1568]|7[189]|81)\d{6}$/,
        example: "628123456",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^20(?:1\d{5}|[2-689]\d{1,7})$/,
        example: "20201234",
        possibleLengths: 2032 // bits: 4,5,6,7,8,9,10
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3})$/,
          format: "$1 $2",
          leadingDigits: /^2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^20[2-689]/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{1,2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^2(?:[0367]|4[3-8])/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^80[01]|90[015]/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^20/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^6/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{1,2})$/,
          format: "$1 $2 $3 $4 $5",
          leadingDigits: /^2(?:[0367]|4[3-8])/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{1,5})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]/,
          domesticCarrierCodeFormattingRule: "$CC $FG"
        }
      ]
    },
    MT: {
      regionCode: "MT",
      countryCode: 356,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^3550\d{4}|(?:[2579]\d\d|800)\d{5}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^20(?:3[1-4]|6[059])\d{4}|2(?:0[19]|[1-357]\d|60)\d{5}$/,
        example: "21001234",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^(?:7(?:210|[79]\d\d)|9(?:[29]\d\d|69[67]|8(?:1[1-3]|89|97)))\d{4}$/,
        example: "96961234",
        possibleLengths: 256 // bits: 8
      },
      voip: {
        pattern: /^3550\d{4}$/,
        example: "35501234",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{4})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^[2357-9]/
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
        possibleLengths: 2560 // bits: 9,11
      },
      fixedLine: {
        pattern:
          /^(?:1(?:[035]\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\d\d)\d{6}$/,
        example: "101234567",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern: /^(?:6[1-58]|970\d)\d{7}$/,
        example: "612345678",
        possibleLengths: 2560 // bits: 9,11
      },
      voip: {
        pattern: /^(?:85|91)\d{7}$/,
        example: "851234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{4})$/,
          format: "$1",
          leadingDigits: /^1[238]|[34]/
        },
        {
          pattern: /^(\d{2})(\d{3,4})$/,
          format: "$1 $2",
          leadingDigits: /^14/
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^1/
        },
        {
          pattern: /^(\d{3})(\d{4,7})$/,
          format: "$1 $2",
          leadingDigits: /^[89]0/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{7})$/,
          format: "$1 $2",
          leadingDigits: /^66/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{8})$/,
          format: "$1 $2",
          leadingDigits: /^6/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1[16-8]|2[259]|3[124]|4[17-9]|5[124679]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[1-578]|91/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{5})$/,
          format: "$1 $2 $3",
          leadingDigits: /^9/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    PL: {
      regionCode: "PL",
      countryCode: 48,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:6|8\d\d)\d{7}|[1-9]\d{6}(?:\d{2})?|[26]\d{5}$/,
        possibleLengths: 640 // bits: 7,9
      },
      fixedLine: {
        pattern:
          /^47\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\d{6}|1(?:[0-8]\d{5}|9\d{3}(?:\d{2})?))$/,
        example: "123456789",
        possibleLengths: 640 // bits: 7,9
      },
      mobile: {
        pattern:
          /^2131[89]\d{4}|21(?:1[013-5]|2\d|3[2-9])\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\d{7}$/,
        example: "512345678",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^39\d{7}$/,
        example: "391234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{5})$/,
          format: "$1",
          leadingDigits: /^19/
        },
        {
          pattern: /^(\d{3})(\d{3})$/,
          format: "$1 $2",
          leadingDigits: /^11|20|64/
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits:
            /^(?:(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19)/
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2,3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^64/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)/
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^1[2-8]|[2-7]|8[1-79]|9[145]/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/
        }
      ]
    },
    PT: {
      regionCode: "PT",
      countryCode: 351,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^1693\d{5}|(?:[26-9]\d|30)\d{7}$/,
        possibleLengths: 512 // bits: 9
      },
      fixedLine: {
        pattern: /^2(?:[12]\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\d{6}$/,
        example: "212345678",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern:
          /^6(?:[06]92(?:30|9\d)|[35]92(?:[049]\d|3[034]))\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\d\d|480))\d{5}$/,
        example: "912345678",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^30\d{7}$/,
        example: "301234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2[12]/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^16|[236-9]/
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
        possibleLengths: 576 // bits: 6,9
      },
      fixedLine: {
        pattern: /^[23][13-6]\d{7}|(?:2(?:19\d|[3-6]\d9)|31\d\d)\d\d$/,
        example: "211234567",
        possibleLengths: 576 // bits: 6,9
      },
      mobile: {
        pattern:
          /^(?:630|702)0\d{5}|(?:6(?:00|2\d)|7(?:0[013-9]|1[0-3]|[2-7]\d|8[03-8]|9[0-39]))\d{6}$/,
        example: "712034567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{3})$/,
          format: "$1 $2",
          leadingDigits: /^(?:2[3-6]|2[3-6]\d9)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^219|31/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[23]1/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[236-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    SK: {
      regionCode: "SK",
      countryCode: 421,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[2-689]\d{8}|[2-59]\d{6}|[2-5]\d{5}$/,
        possibleLengths: 704 // bits: 6,7,9
      },
      fixedLine: {
        pattern:
          /^(?:2(?:16|[2-9]\d{3})|(?:(?:[3-5][1-8]\d|819)\d|601[1-5])\d)\d{4}|(?:2|[3-5][1-8])1[67]\d{3}|[3-5][1-8]16\d\d$/,
        example: "221234567",
        possibleLengths: 704 // bits: 6,7,9
      },
      mobile: {
        pattern: /^909[1-9]\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\d)\d{6}$/,
        example: "912123456",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^6(?:02|5[0-4]|9[0-6])\d{6}$/,
        example: "690123456",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d)(\d{2})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^21/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2,3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:[3-5][1-8]1|[3-5][1-8]1[67])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3})$/,
          format: "$1 $2",
          leadingDigits: /^(?:909|9090)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{3})(\d{2})$/,
          format: "$1/$2 $3 $4",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[689]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1/$2 $3 $4",
          leadingDigits: /^[3-5]/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    SI: {
      regionCode: "SI",
      countryCode: 386,
      internationalPrefix: "00|10(?:22|66|88|99)",
      nationalPrefix: "0",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern: /^[1-7]\d{7}|8\d{4,7}|90\d{4,6}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^(?:[1-357][2-8]|4[24-8])\d{6}$/,
        example: "12345678",
        possibleLengths: 256, // bits: 8
        possibleLengthsLocalOnly: 128 // bits: 7
      },
      mobile: {
        pattern: /^65(?:[178]\d|5[56]|6[01])\d{4}|(?:[37][01]|4[0139]|51|6[489])\d{6}$/,
        example: "31234567",
        possibleLengths: 256 // bits: 8
      },
      voip: {
        pattern:
          /^(?:59\d\d|8(?:1(?:[67]\d|8[0-589])|2(?:0\d|2[0-37-9]|8[0-2489])|3[389]\d))\d{4}$/,
        example: "59012345",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3,6})$/,
          format: "$1 $2",
          leadingDigits: /^8[09]|9/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^59|8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[37][01]|4[0139]|51|6/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[1-57]/,
          nationalPrefixFormattingRule: "($NP$FG)"
        }
      ]
    },
    ES: {
      regionCode: "ES",
      countryCode: 34,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[5-9]\d{8}$/,
        possibleLengths: 512 // bits: 9
      },
      fixedLine: {
        pattern:
          /^96906(?:0[0-8]|1[1-9]|[2-9]\d)\d\d|9(?:69(?:0[0-57-9]|[1-9]\d)|73(?:[0-8]\d|9[1-9]))\d{4}|(?:8(?:[1356]\d|[28][0-8]|[47][1-9])|9(?:[135]\d|[268][0-8]|4[1-9]|7[124-9]))\d{6}$/,
        example: "810123456",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern: /^96906(?:09|10)\d\d|(?:590(?:10[0-2]|600)|97390\d)\d{3}|(?:6\d|7[1-48])\d{7}$/,
        example: "612345678",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{4})$/,
          format: "$1",
          leadingDigits: /^905/
        },
        {
          pattern: /^(\d{6})$/,
          format: "$1",
          leadingDigits: /^[79]9/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[89]00/
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[5-9]/
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
        possibleLengths: 896 // bits: 7,8,9
      },
      fixedLine: {
        pattern:
          /^(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\d)\d|90[1-9])\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\d{5,6}$/,
        example: "8123456",
        possibleLengths: 896 // bits: 7,8,9
      },
      mobile: {
        pattern: /^7[02369]\d{7}$/,
        example: "701234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{2,3})(\d{2})$/,
          format: "$1-$2 $3",
          leadingDigits: /^20/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1-$2",
          leadingDigits: /^9(?:00|39|44|9)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})$/,
          format: "$1-$2 $3",
          leadingDigits: /^[12][136]|3[356]|4[0246]|6[03]|90[1-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{2,3})(\d{2})(\d{2})$/,
          format: "$1-$2 $3 $4",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2,3})(\d{2})$/,
          format: "$1-$2 $3",
          leadingDigits:
            /^1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2,3})(\d{3})$/,
          format: "$1-$2 $3",
          leadingDigits: /^9(?:00|39|44)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2,3})(\d{2})(\d{2})$/,
          format: "$1-$2 $3 $4",
          leadingDigits: /^1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1-$2 $3 $4",
          leadingDigits: /^10|7/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{3})(\d{2})$/,
          format: "$1-$2 $3 $4",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
          format: "$1-$2 $3 $4",
          leadingDigits:
            /^[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})(\d{3})$/,
          format: "$1-$2 $3 $4",
          leadingDigits: /^9/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1-$2 $3 $4 $5",
          leadingDigits: /^[26]/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT"],
    40: ["RO"],
    43: ["AT"],
    45: ["DK"],
    46: ["SE"],
    48: ["PL"],
    49: ["DE"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    385: ["HR"],
    386: ["SI"],
    420: ["CZ"],
    421: ["SK"]
  }
}

export default bundle
