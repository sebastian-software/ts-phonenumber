/**
 * Phone number metadata for PL
 * Country calling code: +48
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PL",
  countryCode: 48,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:6|8\d\d)\d{7}|[1-9]\d{6}(?:\d{2})?|[26]\d{5}$/,
    possibleLengths: 640 // bits: 7,9
  },
  fixedLine: {
    pattern:
      /^47\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\d{6}|1(?:[0-8]\d{5}|9\d{3}(?:\d{2})?))$/,
    example: "123456789",
    possibleLengths: 640 // bits: 7,9
  },
  mobile: {
    pattern: /^2131[89]\d{4}|21(?:1[013-5]|2\d|3[2-9])\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\d{7}$/,
    example: "512345678",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^39\d{7}$/,
    example: "391234567",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{5})$/,
      format: "$1",
      leadingDigits: /^19/
    },
    {
      pattern: /^(\d{3})(\d{3})$/,
      format: "$1 $2",
      leadingDigits: /^11|20|64/
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits:
        /^(?:(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19)/
    },
    {
      pattern: /^(\d{3})(\d{2})(\d{2,3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^64/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)/
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^1[2-8]|[2-7]|8[1-79]|9[145]/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    }
  ]
}

export default metadata
