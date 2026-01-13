/**
 * Phone number metadata for PH
 * Country calling code: +63
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
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
    pattern: /^(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\d|4[2-9]|8[135-9]|9[1-9]))\d{7}$/,
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
}

export default metadata
