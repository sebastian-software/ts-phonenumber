/**
 * Phone number metadata for SX
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SX",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "(5\\d{6})$|1",
  nationalPrefixTransformRule: "721$1",
  leadingDigits: /^721/,
  generalDesc: {
    pattern: /^7215\d{6}|(?:[58]\d\d|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^7215(?:4[2-8]|8[239]|9[056])\d{4}$/,
    example: "7215425678",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^7215(?:1[02]|2\d|5[034679]|8[014-8])\d{4}$/,
    example: "7215205678",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
