/**
 * Phone number metadata for BB
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BB",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2-9]\\d{6})$|1",
  nationalPrefixTransformRule: "246$1",
  leadingDigits: "246",
  generalDesc: {
    pattern: "(?:246|[58]\\d\\d|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      "246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",
    example: "2464123456",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      "246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}",
    example: "2462501234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  voip: {
    pattern: "24631\\d{5}",
    example: "2463101234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
