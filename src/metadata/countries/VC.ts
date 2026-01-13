/**
 * Phone number metadata for VC
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VC",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-7]\\d{6})$|1",
  nationalPrefixTransformRule: "784$1",
  leadingDigits: "784",
  generalDesc: {
    pattern: /^(?:[58]\d\d|784|900)\d{7}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      /^784(?:266|3(?:6[6-9]|7\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\d{4}$/,
    example: "7842661234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\d{4}$/,
    example: "7844301234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  voip: {
    pattern: /^78451[0-2]\d{4}$/,
    example: "7845101234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
