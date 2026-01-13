/**
 * Phone number metadata for GU
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GU",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "671$1",
  leadingDigits: /^671/,
  generalDesc: {
    pattern: /^(?:[58]\d\d|671|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern:
      /^671(?:2\d\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\d{4}$/,
    example: "6713001234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern:
      /^671(?:2\d\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[478])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\d{4}$/,
    example: "6713001234",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
