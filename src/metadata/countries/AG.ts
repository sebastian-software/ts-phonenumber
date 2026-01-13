/**
 * Phone number metadata for AG
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AG",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([457]\\d{6})$|1",
  nationalPrefixTransformRule: "268$1",
  leadingDigits: "268",
  generalDesc: {
    pattern: /^(?:268|[58]\d\d|900)\d{7}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^268(?:4(?:6[0-38]|84)|56[0-2])\d{4}$/,
    example: "2684601234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    example: "2684641234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  voip: {
    pattern: /^26848[01]\d{4}$/,
    example: "2684801234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
