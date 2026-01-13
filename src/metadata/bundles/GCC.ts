/**
 * GCC - Gulf Cooperation Council
 * Regions: AE, SA, QA, KW, BH, OM
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
    }
  },
  countryCodeToRegions: {
    965: ["KW"],
    966: ["SA"],
    968: ["OM"],
    971: ["AE"],
    973: ["BH"],
    974: ["QA"]
  }
}

export default bundle
