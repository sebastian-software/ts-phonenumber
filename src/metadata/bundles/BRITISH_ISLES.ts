/**
 * BRITISH_ISLES - British Isles (UK, Ireland, Channel Islands, Isle of Man)
 * Regions: GB, IE, GG, JE, IM
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
    GB: {
      regionCode: "GB",
      countryCode: 44,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "0|180020",
      mainCountryForCode: true,
      generalDesc: {
        pattern: /^[1-357-9]\d{9}|[18]\d{8}|8\d{6}$/,
        possibleLengths: 1536 // bits: 9,10
      },
      fixedLine: {
        pattern:
          /^(?:1(?:1(?:3(?:[0-58]\d\d|73[0-5])|4(?:(?:[0-5]\d|70)\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\d|6(?:[0-4]\d|5[01]))\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\d)\d|1(?:[0-7]\d|8[0-3]))|(?:3(?:0\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\d)\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\d{3})\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\d)|76\d)|6(?:26[06-9]|686))|6(?:06(?:4\d|7[4-79])|295[5-7]|35[34]\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\d{3}$/,
        example: "1212345678",
        possibleLengths: 1536, // bits: 9,10
        possibleLengthsLocalOnly: 496 // bits: 4,5,6,7,8
      },
      mobile: {
        pattern:
          /^7(?:457[0-57-9]|700[01]|911[028])\d{5}|7(?:[1-3]\d\d|4(?:[0-46-9]\d|5[0-689])|5(?:0[0-8]|[13-9]\d|2[0-35-9])|7(?:0[1-9]|[1-7]\d|8[02-9]|9[0-689])|8(?:[014-9]\d|[23][0-8])|9(?:[024-9]\d|1[02-9]|3[0-689]))\d{6}$/,
        example: "7400123456",
        possibleLengths: 1024 // bits: 10
      },
      voip: {
        pattern: /^56\d{8}$/,
        example: "5612345678",
        possibleLengths: 1024 // bits: 10
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{4})$/,
          format: "$1 $2",
          leadingDigits: /^(?:800|8001|80011|800111|8001111)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:845|8454|84546|845464)/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^800/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{5})(\d{4,5})$/,
          format: "$1 $2",
          leadingDigits:
            /^(?:1(?:38|5[23]|69|76|94)|1(?:(?:38|69)7|5(?:24|39)|768|946)|1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467))/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{5,6})$/,
          format: "$1 $2",
          leadingDigits: /^1(?:[2-69][02-9]|[78])/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{4})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^(?:[25]|7(?:0|6[02-9])|[25]|7(?:0|6(?:[03-9]|2[356])))/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{4})(\d{6})$/,
          format: "$1 $2",
          leadingDigits: /^7/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{3})(\d{4})$/,
          format: "$1 $2 $3",
          leadingDigits: /^[1389]/,
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
    GG: {
      regionCode: "GG",
      countryCode: 44,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "([25-9]\\d{5})$|0|180020",
      nationalPrefixTransformRule: "1481$1",
      generalDesc: {
        pattern: /^(?:1481|[357-9]\d{3})\d{6}|8\d{6}(?:\d{2})?$/,
        possibleLengths: 1024 // bits: 10
      },
      fixedLine: {
        pattern: /^1481[25-9]\d{5}$/,
        example: "1481256789",
        possibleLengths: 1024, // bits: 10
        possibleLengthsLocalOnly: 64 // bits: 6
      },
      mobile: {
        pattern: /^7(?:(?:781|839)\d|911[17])\d{5}$/,
        example: "7781123456",
        possibleLengths: 1024 // bits: 10
      },
      voip: {
        pattern: /^56\d{8}$/,
        example: "5612345678",
        possibleLengths: 1024 // bits: 10
      }
    },
    JE: {
      regionCode: "JE",
      countryCode: 44,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "([0-24-8]\\d{5})$|0|180020",
      nationalPrefixTransformRule: "1534$1",
      generalDesc: {
        pattern: /^1534\d{6}|(?:[3578]\d|90)\d{8}$/,
        possibleLengths: 1024 // bits: 10
      },
      fixedLine: {
        pattern: /^1534[0-24-8]\d{5}$/,
        example: "1534456789",
        possibleLengths: 1024, // bits: 10
        possibleLengthsLocalOnly: 64 // bits: 6
      },
      mobile: {
        pattern: /^7(?:(?:(?:50|82)9|937)\d|7(?:00[378]|97\d))\d{5}$/,
        example: "7797712345",
        possibleLengths: 1024 // bits: 10
      },
      voip: {
        pattern: /^56\d{8}$/,
        example: "5612345678",
        possibleLengths: 1024 // bits: 10
      }
    },
    IM: {
      regionCode: "IM",
      countryCode: 44,
      internationalPrefix: "00",
      nationalPrefix: "0",
      nationalPrefixForParsing: "([25-8]\\d{5})$|0|180020",
      nationalPrefixTransformRule: "1624$1",
      leadingDigits: /^74576|(?:16|7[56])24/,
      generalDesc: {
        pattern: /^1624\d{6}|(?:[3578]\d|90)\d{8}$/,
        possibleLengths: 1024 // bits: 10
      },
      fixedLine: {
        pattern: /^1624(?:230|[5-8]\d\d)\d{3}$/,
        example: "1624756789",
        possibleLengths: 1024, // bits: 10
        possibleLengthsLocalOnly: 64 // bits: 6
      },
      mobile: {
        pattern: /^76245[06]\d{4}|7(?:4576|[59]24\d|624[0-4689])\d{5}$/,
        example: "7924123456",
        possibleLengths: 1024 // bits: 10
      },
      voip: {
        pattern: /^56\d{8}$/,
        example: "5612345678",
        possibleLengths: 1024 // bits: 10
      }
    }
  },
  countryCodeToRegions: {
    44: ["GB", "GG", "JE", "IM"],
    353: ["IE"]
  }
}

export default bundle
