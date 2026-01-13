/**
 * Phone number metadata for GR
 * Country calling code: +30
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GR",
  countryCode: 30,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^5005000\d{3}|8\d{9,11}|(?:[269]\d|70)\d{8}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern:
      /^2(?:1\d\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\d|2[1-5]|[34][1-4]|9[1-57]))\d{6}$/,
    example: "2123456789",
    possibleLengths: 1024 // bits: 10
  },
  mobile: {
    pattern: /^68[57-9]\d{7}|(?:69|94)\d{8}$/,
    example: "6912345678",
    possibleLengths: 1024 // bits: 10
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^21|7/
    },
    {
      pattern: /^(\d{4})(\d{6})$/,
      format: "$1 $2",
      leadingDigits: /^2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[2689]/
    },
    {
      pattern: /^(\d{3})(\d{3,4})(\d{5})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    }
  ]
}

export default metadata
