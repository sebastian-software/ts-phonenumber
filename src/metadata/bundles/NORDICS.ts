/**
 * NORDICS - Nordic countries (Denmark, Finland, Iceland, Norway, Sweden)
 * Regions: DK, FI, IS, NO, SE
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
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
    IS: {
      regionCode: "IS",
      countryCode: 354,
      internationalPrefix: "00|1(?:0(?:01|[12]0)|100)",
      preferredInternationalPrefix: "00",
      generalDesc: {
        pattern: /^(?:38\d|[4-9])\d{6}$/,
        possibleLengths: [7, 9]
      },
      fixedLine: {
        pattern:
          /^(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\d|8[0-36-8])|5(?:05|[156]\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\d{4}$/,
        example: "4101234",
        possibleLengths: [7]
      },
      mobile: {
        pattern:
          /^(?:38[589]\d\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\d)|7(?:5[057]|[6-9]\d)|8(?:2[0-59]|[3-69]\d|8[238]))\d{4}$/,
        example: "6111234",
        possibleLengths: [7, 9]
      },
      voip: {
        pattern: /^49[0-24-79]\d{4}$/,
        example: "4921234",
        possibleLengths: [7]
      },
      formats: [
        {
          pattern: "(\\d{3})(\\d{4})",
          format: "$1 $2",
          leadingDigits: ["[4-9]"]
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["3"]
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
    }
  },
  countryCodeToRegions: {
    45: ["DK"],
    46: ["SE"],
    47: ["NO"],
    354: ["IS"],
    358: ["FI"]
  }
}

export default bundle
