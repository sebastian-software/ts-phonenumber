/**
 * DACH - German-speaking countries (Germany, Austria, Switzerland)
 * Regions: DE, AT, CH
 *
 * Auto-generated bundle with inline metadata.
 * Do not edit manually.
 */

import type { MetadataBundle } from "../types.js"

const bundle: MetadataBundle = {
  regions: {
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
    CH: {
      regionCode: "CH",
      countryCode: 41,
      internationalPrefix: "00",
      nationalPrefix: "0",
      generalDesc: {
        pattern: /^8\d{11}|[2-9]\d{8}$/,
        possibleLengths: 512 // bits: 9
      },
      fixedLine: {
        pattern: /^(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\d{7}$/,
        example: "212345678",
        possibleLengths: 512 // bits: 9
      },
      mobile: {
        pattern: /^(?:6[89]|7[235-9])\d{7}$/,
        example: "781234567",
        possibleLengths: 512 // bits: 9
      },
      formats: [
        {
          pattern: /^(\d{3})(\d{3})(\d{3})$/,
          format: "$1 $2 $3",
          leadingDigits: /^8[047]|90/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4",
          leadingDigits: /^[2-79]|81/,
          nationalPrefixFormattingRule: "$NP$FG"
        },
        {
          pattern: /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
          format: "$1 $2 $3 $4 $5",
          leadingDigits: /^8/,
          nationalPrefixFormattingRule: "$NP$FG"
        }
      ]
    }
  },
  countryCodeToRegions: {
    41: ["CH"],
    43: ["AT"],
    49: ["DE"]
  }
}

export default bundle
