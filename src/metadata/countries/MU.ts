/**
 * Phone number metadata for MU
 * Country calling code: +230
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MU",
  countryCode: 230,
  internationalPrefix: "0(?:0|[24-7]0|3[03])",
  preferredInternationalPrefix: "020",
  generalDesc: {
    pattern: /^(?:[57]|8\d\d)\d{7}|[2-468]\d{6}$/,
    possibleLengths: 384 // bits: 7,8
  },
  fixedLine: {
    pattern:
      /^(?:2(?:[0346-8]\d|1[0-8])|4(?:[013568]\d|2[4-8]|71|90)|54(?:[3-5]\d|71)|6\d\d|8(?:14|3[129]))\d{4}$/,
    example: "54480123",
    possibleLengths: 384 // bits: 7,8
  },
  mobile: {
    pattern:
      /^5(?:4(?:2[1-389]|7[1-9])|87[15-8])\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\d|8[0-689]|9[0-8])|7(?:0[0-7]|3[013]))\d{5}$/,
    example: "52512345",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^3(?:20|9\d)\d{4}$/,
    example: "3201234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[2-46]|8[013]/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[57]/
    },
    {
      pattern: /^(\d{5})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^8/
    }
  ]
}

export default metadata
