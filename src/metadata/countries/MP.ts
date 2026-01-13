/**
 * Phone number metadata for MP
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MP",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "670$1",
  leadingDigits: "670",
  generalDesc: {
    pattern: "[58]\\d{9}|(?:67|90)0\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
    example: "6702345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
    example: "6702345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
