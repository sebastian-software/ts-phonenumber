/**
 * Phone number metadata for VG
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VG",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-578]\\d{6})$|1",
  nationalPrefixTransformRule: "284$1",
  leadingDigits: /^284/,
  generalDesc: {
    pattern: /^(?:284|[58]\d\d|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\d{4}$/,
    example: "2842291234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern:
      /^284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\d{4}$/,
    example: "2843001234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
