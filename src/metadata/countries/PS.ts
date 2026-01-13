/**
 * Phone number metadata for PS
 * Country calling code: +970
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PS",
  countryCode: 970,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[2489]2\d{6}|(?:1\d|5)\d{8}$/,
    possibleLengths: [8, 9]
  },
  fixedLine: {
    pattern: /^(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\d{5}$/,
    example: "22234567",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^5[69]\d{7}$/,
    example: "599123456",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2489]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["5"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{4})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1"]
    }
  ]
}

export default metadata
