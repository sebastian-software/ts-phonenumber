/**
 * Phone number metadata for GP
 * Country calling code: +590
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GP",
  countryCode: 590,
  internationalPrefix: "00",
  nationalPrefix: "0",
  mainCountryForCode: true,
  generalDesc: {
    pattern: /^(?:590\d|7090)\d{5}|(?:69|80|9\d)\d{7}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\d)\d{4}$/,
    example: "590201234",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern:
      /^(?:69(?:0\d\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\d)|6(?:1[016-9]|5[0-4]|[67]\d))|7090[0-4])\d{4}$/,
    example: "690001234",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^9(?:(?:39[5-7]|76[018])\d|475[0-6])\d{4}$/,
    example: "976012345",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[5-79]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^8/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
