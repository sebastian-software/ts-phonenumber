/**
 * Phone number metadata for ID
 * Country calling code: +62
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
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
}

export default metadata
