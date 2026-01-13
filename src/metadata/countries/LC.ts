/**
 * Phone number metadata for LC
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LC",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-8]\\d{6})$|1",
  nationalPrefixTransformRule: "758$1",
  leadingDigits: "758",
  generalDesc: {
    pattern: /^(?:[58]\d\d|758|900)\d{7}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^758(?:234|4(?:30|5\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\d{4}$/,
    example: "7584305678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      /^758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\d|3[0-3])|812)\d{4}$/,
    example: "7582845678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
