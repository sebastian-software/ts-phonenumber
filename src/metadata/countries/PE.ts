/**
 * Phone number metadata for PE
 * Country calling code: +51
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PE",
  countryCode: 51,
  internationalPrefix: "00|19(?:1[124]|77|90)00",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[14-8]|9\d)\d{7}$/,
    possibleLengths: 768 // bits: 8,9
  },
  fixedLine: {
    pattern:
      /^(?:(?:(?:4[34]|5[14])[0-8]|687)\d|7(?:173|(?:3[0-8]|55)\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[0569]|[56]0)))\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\d{6}$/,
    example: "11234567",
    possibleLengths: 256, // bits: 8
    possibleLengthsLocalOnly: 192 // bits: 6,7
  },
  mobile: {
    pattern: /^9\d{8}$/,
    example: "912345678",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^80/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d)(\d{7})$/,
      format: "$1 $2",
      leadingDigits: /^1/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{2})(\d{6})$/,
      format: "$1 $2",
      leadingDigits: /^[4-8]/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^9/
    }
  ]
}

export default metadata
