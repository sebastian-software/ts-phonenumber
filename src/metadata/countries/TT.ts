/**
 * Phone number metadata for TT
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TT",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-46-8]\\d{6})$|1",
  nationalPrefixTransformRule: "868$1",
  leadingDigits: /^868/,
  generalDesc: {
    pattern: /^(?:[58]\d\d|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern:
      /^868(?:2(?:01|1[5-9]|[23]\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\d|7[0-79])|82[124])\d{4}$/,
    example: "8682211234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern:
      /^868(?:(?:2[5-9]|3\d)\d|4(?:3[0-6]|[6-9]\d)|6(?:20|78|8\d)|7(?:0[1-9]|1[02-9]|[2-9]\d))\d{4}$/,
    example: "8682911234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
