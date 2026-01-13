/**
 * Phone number metadata for CC
 * Country calling code: +61
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CC",
  countryCode: 61,
  internationalPrefix: "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([59]\\d{7})$|0",
  nationalPrefixTransformRule: "8$1",
  preferredInternationalPrefix: "0011",
  generalDesc: {
    pattern: "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern:
      "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
    example: "891621234",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [8]
  },
  mobile: {
    pattern:
      "4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",
    example: "412345678",
    possibleLengths: [9]
  },
  voip: {
    pattern: "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",
    example: "147101234",
    possibleLengths: [9]
  }
}

export default metadata
