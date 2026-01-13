/**
 * Phone number metadata for IS
 * Country calling code: +354
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IS",
  countryCode: 354,
  internationalPrefix: "00|1(?:0(?:01|[12]0)|100)",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: "(?:38\\d|[4-9])\\d{6}",
    possibleLengths: [7, 9]
  },
  fixedLine: {
    pattern:
      "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}",
    example: "4101234",
    possibleLengths: [7]
  },
  mobile: {
    pattern:
      "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}",
    example: "6111234",
    possibleLengths: [7, 9]
  },
  voip: {
    pattern: "49[0-24-79]\\d{4}",
    example: "4921234",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[4-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["3"]
    }
  ]
}

export default metadata
