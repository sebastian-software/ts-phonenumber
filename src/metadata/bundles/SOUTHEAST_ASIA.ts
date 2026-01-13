/**
 * SOUTHEAST_ASIA - Southeast Asian markets
 * Regions: SG, MY, TH, ID, PH, VN, MM, KH, LA, BN
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
    SG: {
      regionCode: "SG",
      countryCode: 65,
      internationalPrefix: "0[0-3]\\d",
      generalDesc: {
        pattern: /^(?:(?:1\d|8)\d\d|7000)\d{7}|[3689]\d{7}$/,
        possibleLengths: 256 // bits: 8
      },
      fixedLine: {
        pattern: /^662[0-24-9]\d{4}|6(?:[0-578]\d|6[013-57-9]|9[0-35-9])\d{5}$/,
        example: "61234567",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^89(?:8[02-9]|9[0-4])\d{4}|(?:8(?:0[1-9]|[1-8]\d|9[0-7])|9[0-8]\d)\d{5}$/,
        example: "81234567",
        possibleLengths: 256 // bits: 8
      },
      voip: {
        pattern: /^(?:3[12]\d|666)\d{5}$/,
        example: "31234567",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d{4,5})$/,
          format: "$1",
          leadingDigits: /^(?:1[013-9]|77|1(?:[013-8]|9(?:0[1-9]|[1-9]))|77)/
        },
        {
          pattern: /^(\d{4})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^[369]|8(?:0[1-9]|[1-9])/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/
        },
        {
          pattern: /^(\d{4})(\d{4})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^7/
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/
        }
      ]
    },
    MY: {
      regionCode: "MY",
      countryCode: 60,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^1\d{8,9}|(?:3\d|[4-9])\d{7}$/,
        possibleLengths: 1792 // bits: 8,9,10
      },
      fixedLine: {
        pattern:
          /^427[01]\d{4}|(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\d|9[0-57])\d|4(?:2[0-689]|[3-79]\d|8[1-35689])|5(?:2[0-589]|[3468]\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\d|[3489][0-8]))\d{5}$/,
        example: "323856789",
        possibleLengths: 768, // bits: 8,9
        possibleLengthsLocalOnly: 192 // bits: 6,7
      },
      mobile: {
        pattern:
          /^1(?:1888[689]|4400|8(?:47|8[27])[0-4])\d{4}|1(?:0(?:[23568]\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\d\d|6(?:0[5-9]|[1-9]\d)|7(?:[0-4]\d|5[0-7]))|(?:[269]\d|[37][1-9]|4[235-9])\d|5(?:31|9\d\d)|8(?:1[23]|[236]\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\d{5}$/,
        example: "123456789",
        possibleLengths: 1536 // bits: 9,10
      },
      voip: {
        pattern:
          /^15(?:4(?:6[0-4]\d|8(?:0[125]|[17]\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\d))\d{4}$/,
        example: "1546012345",
        possibleLengths: 1024 // bits: 10
      },
      formats: [
        {
          pattern: /^(\d)(\d{3})(\d{4})$/,
          format: "$1-$2 $3",
          leadingDigits: /^[4-79]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1-$2 $3",
          leadingDigits:
            /^(?:1(?:[02469]|[378][1-9]|53)|8|1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{4})(\d{4})$/,
          format: "$1-$2 $3",
          leadingDigits: /^3/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{2})(\d{4})$/,
          format: "$1-$2-$3-$4",
          leadingDigits: /^1(?:[367]|80)/
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1-$2 $3",
          leadingDigits: /^15/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{4})$/,
          format: "$1-$2 $3",
          leadingDigits: /^1/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    TH: {
      regionCode: "TH",
      countryCode: 66,
      internationalPrefix: "00[1-9]",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:001800|[2-57]|[689]\d)\d{7}|1\d{7,9}$/,
        possibleLengths: 768 // bits: 8,9
      },
      fixedLine: {
        pattern: /^(?:1[0689]|2\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\d{6}$/,
        example: "21234567",
        possibleLengths: 256 // bits: 8
      },
      mobile: {
        pattern: /^67(?:1[0-8]|2[4-7])\d{5}|(?:14|6[1-6]|[89]\d)\d{7}$/,
        example: "812345678",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^6[08]\d{7}$/,
        example: "601234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d)(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[13-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/
        }
      ]
    },
    ID: {
      regionCode: "ID",
      countryCode: 62,
      internationalPrefix: "00[89]",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^00[1-9]\d{9,14}|(?:[1-36]|8\d{5})\d{6}|00\d{9}|[1-9]\d{8,10}|[2-9]\d{7}$/,
        possibleLengths: 8064 // bits: 7,8,9,10,11,12
      },
      fixedLine: {
        pattern:
          /^2[124]\d{7,8}|619\d{8}|2(?:1(?:14|500)|2\d{3})\d{3}|61\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\d{5,8}$/,
        example: "218350123",
        possibleLengths: 3968, // bits: 7,8,9,10,11
        possibleLengthsLocalOnly: 96 // bits: 5,6
      },
      mobile: {
        pattern: /^8[1-35-9]\d{7,10}$/,
        example: "812345678",
        possibleLengths: 7680 // bits: 9,10,11,12
      },
      formats: [
        {
          pattern: /^(\d)(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^15/
        },
        {
          pattern: /^(\d{2})(\d{5,9})$/,
          format: "$1 $2",
          leadingDigits: /^2[124]|[36]1/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{3})(\d{5,7})$/,
          format: "$1 $2",
          leadingDigits: /^800/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{5,8})$/,
          format: "$1 $2",
          leadingDigits: /^[2-79]/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{3})(\d{3,4})(\d{3})$/,
          format: "$1-$2-$3",
          leadingDigits: /^8[1-35-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{6,8})$/,
          format: "$1 $2",
          leadingDigits: /^1/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^804/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d)(\d{3})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^80/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{4})(\d{4,5})$/,
          format: "$1-$2-$3",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})(\d{2,8})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^001/
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{3})(\d{4})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^0/
        }
      ]
    },
    PH: {
      regionCode: "PH",
      countryCode: 63,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^(?:[2-7]|9\d)\d{8}|2\d{5}|(?:1800|8)\d{7,9}$/,
        possibleLengths: 1856 // bits: 6,8,9,10
      },
      fixedLine: {
        pattern:
          /^(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\d{3}|88(?:22\d\d|42))\d{4}|(?:2|8[2-8]\d\d)\d{5}$/,
        example: "232345678",
        possibleLengths: 1856, // bits: 6,8,9,10
        possibleLengthsLocalOnly: 176 // bits: 4,5,7
      },
      mobile: {
        pattern:
          /^(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\d|4[2-9]|8[135-9]|9[1-9]))\d{7}$/,
        example: "9051234567",
        possibleLengths: 1024 // bits: 10
      },
      formats: [
        {
          pattern: /^(\d)(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{4})(\d{4,6})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2|3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13])))/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{5})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^(?:346|4(?:27|9[35])|883|3469|4(?:279|9(?:30|56))|8834)/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d)(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[3-7]|8[2-8]/,
          nationalPrefixFormattingRule: "($NP$FG)"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[89]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/
        },
        {
          pattern: /^(\d{4})(\d{1,2})(\d{3})(\d{4})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^1/
        }
      ]
    },
    VN: {
      regionCode: "VN",
      countryCode: 84,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[12]\d{9}|[135-9]\d{8}|[16]\d{7}|[16-8]\d{6}$/,
        possibleLengths: 1536 // bits: 9,10
      },
      fixedLine: {
        pattern:
          /^2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\d{7}$/,
        example: "2101234567",
        possibleLengths: 1024 // bits: 10
      },
      mobile: {
        pattern:
          /^(?:5(?:2[238]|59)|89[6-9]|99[013-9])\d{6}|(?:3\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\d{7}$/,
        example: "912345678",
        possibleLengths: 512 // bits: 9
      },
      voip: {
        pattern: /^672\d{6}$/,
        example: "672012345",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^[17]99/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{2})(\d{5})$/,
          format: "$1 $2",
          leadingDigits: /^80/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{3})(\d{4,5})$/,
          format: "$1 $2",
          leadingDigits: /^69/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{4})(\d{4,6})$/,
          format: "$1 $2",
          leadingDigits: /^1/,
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^6/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[357-9]/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2[48]/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        },
        {
          pattern: /^(\d{3})(\d{4})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG",
          nationalPrefixOptional: true
        }
      ]
    },
    MM: {
      regionCode: "MM",
      countryCode: 95,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^1\d{5,7}|95\d{6}|(?:[4-7]|9[0-46-9])\d{6,8}|(?:2|8\d)\d{5,8}$/,
        possibleLengths: 1984 // bits: 6,7,8,9,10
      },
      fixedLine: {
        pattern:
          /^(?:1(?:(?:12|[28]\d|3[56]|7[3-6]|9[0-6])\d|4(?:2[29]|7[0-2]|83)|6)|2(?:2(?:00|8[34])|4(?:0\d|22|7[0-2]|83)|51\d\d)|4(?:2(?:2\d\d|48[013])|3(?:20\d|4(?:70|83)|56)|420\d|5(?:2\d|470))|6(?:0(?:[23]|88\d)|(?:124|[56]2\d)\d|2472|3(?:20\d|470)|4(?:2[04]\d|472)|7(?:3\d\d|4[67]0|8(?:[01459]\d|8))))\d{4}|5(?:2(?:2\d{5,6}|47[02]\d{4})|(?:3472|4(?:2(?:1|86)|470)|522\d|6(?:20\d|483)|7(?:20\d|48[01])|8(?:20\d|47[02])|9(?:20\d|470))\d{4})|7(?:(?:0470|4(?:25\d|470)|5(?:202|470|96\d))\d{4}|1(?:20\d{4,5}|4(?:70|83)\d{4}))|8(?:1(?:2\d{5,6}|4(?:10|7[01]\d)\d{3})|2(?:2\d{5,6}|(?:320|490\d)\d{3})|(?:3(?:2\d\d|470)|4[24-7]|5(?:(?:2\d|51)\d|4(?:[1-35-9]\d|4[0-57-9]))|6[23])\d{4})|(?:1[2-6]\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|(?:[35]2|64)\d))\d{4}|25\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\d{4}$/,
        example: "1234567",
        possibleLengths: 960, // bits: 6,7,8,9
        possibleLengthsLocalOnly: 32 // bits: 5
      },
      mobile: {
        pattern:
          /^(?:17[01]|9(?:2(?:[0-4]|[56]\d\d)|(?:3(?:[0-36]|4\d)|(?:6\d|8[89]|9[4-8])\d|7(?:3|40|[5-9]\d))\d|4(?:(?:[0245]\d|[1379])\d|88)|5[0-6])\d)\d{4}|9[69]1\d{6}|9(?:[68]\d|9[089])\d{5}$/,
        example: "92123456",
        possibleLengths: 1920 // bits: 7,8,9,10
      },
      voip: {
        pattern: /^1333\d{4}$/,
        example: "13331234",
        possibleLengths: 256 // bits: 8
      },
      formats: [
        {
          pattern: /^(\d)(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^16|2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits:
            /^4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:[12]|452|678|86|[12]|452|6788|86)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[4-7]|8[1-35]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{4,6})$/,
          format: "$1 $2 $3",
          leadingDigits: /^9(?:2[0-4]|[35-9]|4[137-9])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^92/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d)(\d{5})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^9/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    KH: {
      regionCode: "KH",
      countryCode: 855,
      internationalPrefix: "00[14-9]",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^1\d{9}|[1-9]\d{7,8}$/,
        possibleLengths: 768 // bits: 8,9
      },
      fixedLine: {
        pattern:
          /^23(?:4(?:[2-4]|[56]\d)|[568]\d\d)\d{4}|23[236-9]\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\d)\d{5}|6\d{5,6})$/,
        example: "23756789",
        possibleLengths: 768, // bits: 8,9
        possibleLengthsLocalOnly: 192 // bits: 6,7
      },
      mobile: {
        pattern:
          /^(?:(?:1[28]|3[18]|9[67])\d|6[016-9]|7(?:[07-9]|[16]\d)|8(?:[013-79]|8\d))\d{6}|(?:1\d|9[0-57-9])\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\d{5}$/,
        example: "91234567",
        possibleLengths: 768 // bits: 8,9
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3})(\d{3,4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[1-9]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^1/
        }
      ]
    },
    LA: {
      regionCode: "LA",
      countryCode: 856,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^[23]\d{9}|3\d{8}|(?:[235-8]\d|41)\d{6}$/,
        possibleLengths: 1792 // bits: 8,9,10
      },
      fixedLine: {
        pattern: /^(?:2[13]|[35-7][14]|41|8[1468])\d{6}$/,
        example: "21212862",
        possibleLengths: 256, // bits: 8
        possibleLengthsLocalOnly: 64 // bits: 6
      },
      mobile: {
        pattern: /^(?:20(?:[23579]\d|8[78])|30[24]\d)\d{6}|30\d{7}$/,
        example: "2023123456",
        possibleLengths: 1536 // bits: 9,10
      },
      formats: [
        {
          pattern: /^(\d{2})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^2[13]|3[14]|[4-8]/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{2})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^3/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{2})(\d{3})(\d{3})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[23]/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    },
    BN: {
      regionCode: "BN",
      countryCode: 673,
      internationalPrefix: "00",
      generalDesc: {
        pattern: /^[2-578]\d{6}$/,
        possibleLengths: 128 // bits: 7
      },
      fixedLine: {
        pattern: /^22[0-7]\d{4}|(?:2[013-9]|[34]\d|5[0-25-9])\d{5}$/,
        example: "2345678",
        possibleLengths: 128 // bits: 7
      },
      mobile: {
        pattern: /^(?:22[89]|[78]\d\d)\d{4}$/,
        example: "7123456",
        possibleLengths: 128 // bits: 7
      },
      voip: {
        pattern: /^5[34]\d{5}$/,
        example: "5345678",
        possibleLengths: 128 // bits: 7
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^[2-578]/
        }
      ]
    }
  },
  countryCodeToRegions: {
    60: ["MY"],
    62: ["ID"],
    63: ["PH"],
    65: ["SG"],
    66: ["TH"],
    84: ["VN"],
    95: ["MM"],
    673: ["BN"],
    855: ["KH"],
    856: ["LA"]
  }
}

export default bundle
