/**
 * BENELUX - Benelux countries (Belgium, Netherlands, Luxembourg)
 * Regions: BE, NL, LU
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
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
    LU: {
      regionCode: "LU",
      countryCode: 352,
      internationalPrefix: "00",
      nationalPrefixForParsing: "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
      generalDesc: {
        pattern: /^35[013-9]\d{4,8}|6\d{8}|35\d{2,4}|(?:[2457-9]\d|3[0-46-9])\d{2,9}$/,
        possibleLengths: [4, 5, 6, 7, 8, 9, 10, 11]
      },
      fixedLine: {
        pattern:
          /^(?:35[013-9]|80[2-9]|90[89])\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\d|8[13-9]|9[2-579])\d{2,9}$/,
        example: "27123456",
        possibleLengths: [4, 5, 6, 7, 8, 9, 10, 11]
      },
      mobile: {
        pattern: /^6(?:[269][18]|5[1568]|7[189]|81)\d{6}$/,
        example: "628123456",
        possibleLengths: [9]
      },
      voip: {
        pattern: /^20(?:1\d{5}|[2-689]\d{1,7})$/,
        example: "20201234",
        possibleLengths: [4, 5, 6, 7, 8, 9, 10]
      },
      formats: [
        {
          pattern: "(\\d{2})(\\d{3})",
          format: "$1 $2",
          leadingDigits: ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})",
          format: "$1 $2 $3",
          leadingDigits: ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["20[2-689]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["2(?:[0367]|4[3-8])"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{2})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["80[01]|90[015]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{3})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["20"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{3})(\\d{3})(\\d{3})",
          format: "$1 $2 $3",
          leadingDigits: ["6"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
          format: "$1 $2 $3 $4 $5",
          leadingDigits: ["2(?:[0367]|4[3-8])"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        },
        {
          pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
          format: "$1 $2 $3 $4",
          leadingDigits: ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
          domesticCarrierCodeFormattingRule: "$CC $FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    31: ["NL"],
    32: ["BE"],
    352: ["LU"]
  }
}

export default bundle
