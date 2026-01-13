/**
 * Phone number metadata for TC
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TC",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-479]\\d{6})$|1",
  nationalPrefixTransformRule: "649$1",
  leadingDigits: /^649/,
  generalDesc: {
    pattern: /^(?:[58]\d\d|649|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^649(?:266|712|9(?:4\d|50))\d{4}$/,
    example: "6497121234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^649(?:2(?:3[129]|4[1-79])|3\d\d|4[34][1-3])\d{4}$/,
    example: "6492311234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  voip: {
    pattern: /^649(?:71[01]|966)\d{4}$/,
    example: "6497101234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
