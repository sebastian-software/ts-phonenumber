/**
 * Phone number metadata for ME
 * Country calling code: +382
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ME",
  countryCode: 382,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:20|[3-79]\d)\d{6}|80\d{6,7}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern:
      /^(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\d{5}$/,
    example: "30234567",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: /^6(?:[07-9]\d|3[024]|6[0-25])\d{5}$/,
    example: "60123456",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^78[1-49]\d{5}$/,
    example: "78108780",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3,4})",
      format: "$1 $2 $3",
      leadingDigits: ["[2-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
