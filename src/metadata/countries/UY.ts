/**
 * Phone number metadata for UY
 * Country calling code: +598
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "UY",
  countryCode: 598,
  internationalPrefix: "0(?:0|1[3-9]\\d)",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: "(?:1(?:770|9(?:20|[89]7))|(?:2\\d|4[2-7])\\d\\d)\\d{4}",
    example: "21231234",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "9[1-9]\\d{6}",
    example: "94231234",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4,5})",
      format: "$1",
      leadingDigits: ["21"]
    },
    {
      pattern: "(\\d{3})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["0"]
    },
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[49]0|8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[124]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2,4})",
      format: "$1 $2 $3",
      leadingDigits: ["0"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
