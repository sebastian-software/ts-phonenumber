/**
 * Phone number metadata for CO
 * Country calling code: +57
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CO",
  countryCode: 57,
  internationalPrefix: "00(?:4(?:[14]4|56)|[579])",
  nationalPrefix: "0",
  nationalPrefixForParsing: "0([3579]|4(?:[14]4|56))?",
  generalDesc: {
    pattern: /^(?:46|60\d\d)\d{6}|(?:1\d|[39])\d{9}$/,
    possibleLengths: [8, 10]
  },
  fixedLine: {
    pattern:
      /^601055(?:[0-4]\d|50)\d\d|6010(?:[0-4]\d|5[0-4])\d{4}|(?:46|60(?:[18][1-9]|[24-7][2-9]))\d{6}$/,
    example: "6012345678",
    possibleLengths: [8, 10],
    possibleLengthsLocalOnly: [4, 7]
  },
  mobile: {
    pattern:
      /^333301[0-5]\d{3}|3333(?:00|2[5-9]|[3-9]\d)\d{4}|(?:3(?:(?:0[0-5]|1\d|5[01]|70)\d|2(?:[0-3]\d|4[1-9])|3(?:00|3[0-24-9]))|9(?:101|408))\d{6}$/,
    example: "3211234567",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["46"]
    },
    {
      pattern: "(\\d{3})(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["6|90"],
      nationalPrefixFormattingRule: "($FG)",
      domesticCarrierCodeFormattingRule: "$NP$CC $FG"
    },
    {
      pattern: "(\\d{3})(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["3[0-357]|9[14]"],
      domesticCarrierCodeFormattingRule: "$NP$CC $FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{7})",
      format: "$1-$2-$3",
      leadingDigits: ["1"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
