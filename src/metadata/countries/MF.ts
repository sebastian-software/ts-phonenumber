/**
 * Phone number metadata for MF
 * Country calling code: +590
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MF",
  countryCode: 590,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: "590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}",
    example: "590271234",
    possibleLengths: [9]
  },
  mobile: {
    pattern:
      "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
    example: "690001234",
    possibleLengths: [9]
  },
  voip: {
    pattern: "9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}",
    example: "976012345",
    possibleLengths: [9]
  }
}

export default metadata
