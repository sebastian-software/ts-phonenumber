/**
 * Phone number metadata for DM
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "DM",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-7]\\d{6})$|1",
  nationalPrefixTransformRule: "767$1",
  leadingDigits: "767",
  generalDesc: {
    pattern: "(?:[58]\\d\\d|767|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",
    example: "7674201234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}",
    example: "7672251234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
