/**
 * Phone number metadata for UA
 * Country calling code: +380
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "UA",
  countryCode: 380,
  internationalPrefix: "00",
  nationalPrefix: "0",
  preferredInternationalPrefix: "0~0",
  generalDesc: {
    pattern: /^[89]\d{9}|[3-9]\d{8}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\d{7}$/,
    example: "311234567",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 224 // bits: 5,6,7
  },
  mobile: {
    pattern: /^790\d{6}|(?:39|50|6[36-8]|7[1-357]|9[1-9])\d{7}$/,
    example: "501234567",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^89[1-579]\d{6}$/,
    example: "891234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits:
        /^(?:6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]|6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9])/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{5})$/,
      format: "$1 $2",
      leadingDigits:
        /^(?:3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])|3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459]))/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[3-7]|89|9[1-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
