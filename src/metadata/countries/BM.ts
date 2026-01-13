/**
 * Phone number metadata for BM
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BM",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "441$1",
  leadingDigits: /^441/,
  generalDesc: {
    pattern: /^(?:441|[58]\d\d|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^441(?:[46]\d\d|5(?:4\d|60|89))\d{4}$/,
    example: "4414123456",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^441(?:[2378]\d|5[0-39]|9[02])\d{5}$/,
    example: "4413701234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
