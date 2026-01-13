/**
 * Phone number metadata for TM
 * Country calling code: +993
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TM",
  countryCode: 993,
  internationalPrefix: "810",
  nationalPrefix: "8",
  preferredInternationalPrefix: "8~10",
  generalDesc: {
    pattern: /^(?:[1-6]\d|71)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern:
      /^(?:1(?:2\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\d|6[15])|5(?:22|5[7-9]|6[014-689]))\d{5}$/,
    example: "12345678",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^(?:6\d|71)\d{6}$/,
    example: "66123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2-$3-$4",
      leadingDigits: ["12"],
      nationalPrefixFormattingRule: "($NP $FG)"
    },
    {
      pattern: "(\\d{3})(\\d)(\\d{2})(\\d{2})",
      format: "$1 $2-$3-$4",
      leadingDigits: ["[1-5]"],
      nationalPrefixFormattingRule: "($NP $FG)"
    },
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["[67]"],
      nationalPrefixFormattingRule: "$NP $FG"
    }
  ]
}

export default metadata
