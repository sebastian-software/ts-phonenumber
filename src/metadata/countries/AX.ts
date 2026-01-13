/**
 * Phone number metadata for AX
 * Country calling code: +358
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AX",
  countryCode: 358,
  internationalPrefix: "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  leadingDigits: "18",
  generalDesc: {
    pattern:
      "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
    possibleLengths: [6, 7, 8, 9, 10]
  },
  fixedLine: {
    pattern: "18[1-8]\\d{3,6}",
    example: "181234567",
    possibleLengths: [6, 7, 8, 9]
  },
  mobile: {
    pattern: "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",
    example: "412345678",
    possibleLengths: [6, 7, 8, 9, 10]
  }
}

export default metadata
