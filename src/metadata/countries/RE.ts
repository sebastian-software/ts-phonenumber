/**
 * Phone number metadata for RE
 * Country calling code: +262
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "RE",
  countryCode: 262,
  internationalPrefix: "00",
  nationalPrefix: "0",
  mainCountryForCode: true,
  generalDesc: {
    pattern: "709\\d{6}|(?:26|[689]\\d)\\d{7}",
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: "26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}",
    example: "262161234",
    possibleLengths: [9]
  },
  mobile: {
    pattern:
      "(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}",
    example: "692123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: "9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}",
    example: "939901234",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[26-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
