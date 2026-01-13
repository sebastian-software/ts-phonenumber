/**
 * Phone number metadata for KW
 * Country calling code: +965
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KW",
  countryCode: 965,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^18\d{5}|(?:[2569]\d|41)\d{6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^2(?:[23]\d\d|4(?:[1-35-9]\d|44)|5(?:0[034]|[2-46]\d|5[1-3]|7[1-7]))\d{4}$/,
    example: "22345678",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern:
      /^(?:41\d\d|5(?:(?:[05]\d|1[0-7]|6[56])\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\d)\d|1(?:00|11|6[16])|2[26]2|3[36]3|4[46]4|7(?:0[013-9]|[67]\d)|8[68]8|9(?:[069]\d|3[039]))|9(?:(?:[04679]\d|8[057-9])\d|1(?:00|1[01]|99)|2(?:00|2\d)|3(?:00|3[03])|5(?:00|5\d)))\d{4}$/,
    example: "50012345",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{3,4})$/,
      format: "$1 $2",
      leadingDigits: /^[169]|2(?:[235]|4[1-35-9])|52/
    },
    {
      pattern: /^(\d{3})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^[245]/
    }
  ]
}

export default metadata
