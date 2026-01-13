/**
 * Phone number metadata for LU
 * Country calling code: +352
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
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
}

export default metadata
