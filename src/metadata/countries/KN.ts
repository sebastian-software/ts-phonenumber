/**
 * Phone number metadata for KN
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KN",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-7]\\d{6})$|1",
  nationalPrefixTransformRule: "869$1",
  leadingDigits: "869",
  generalDesc: {
    pattern: /^(?:[58]\d\d|900)\d{7}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\d{4}$/,
    example: "8692361234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^869(?:48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    example: "8697652917",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
