/**
 * Phone number metadata for AF
 * Country calling code: +93
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AF",
  countryCode: 93,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[2-7]\d{8}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\d{6}$/,
    example: "234567890",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^7\d{8}$/,
    example: "701234567",
    possibleLengths: [9],
    possibleLengthsLocalOnly: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[1-9]"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-7]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
