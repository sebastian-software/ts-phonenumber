/**
 * Phone number metadata for GD
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GD",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "473$1",
  leadingDigits: "473",
  generalDesc: {
    pattern: "(?:473|[58]\\d\\d|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-4]|5[59]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
    example: "4732691234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|49|5[6-8])|5(?:2[01]|3[3-8])|901)\\d{4}",
    example: "4734031234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
