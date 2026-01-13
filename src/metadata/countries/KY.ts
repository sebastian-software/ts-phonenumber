/**
 * Phone number metadata for KY
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "KY",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "345$1",
  leadingDigits: "345",
  generalDesc: {
    pattern: "(?:345|[58]\\d\\d|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|4[89]|88)|9(?:14|4[035-9]))\\d{4}",
    example: "3452221234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}",
    example: "3453231234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
