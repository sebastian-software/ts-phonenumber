/**
 * Phone number metadata for SI
 * Country calling code: +386
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SI",
  countryCode: 386,
  internationalPrefix: "00|10(?:22|66|88|99)",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^[1-7]\d{7}|8\d{4,7}|90\d{4,6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^(?:[1-357][2-8]|4[24-8])\d{6}$/,
    example: "12345678",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^65(?:[178]\d|5[56]|6[01])\d{4}|(?:[37][01]|4[0139]|51|6[489])\d{6}$/,
    example: "31234567",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^(?:59\d\d|8(?:1(?:[67]\d|8[0-589])|2(?:0\d|2[0-37-9]|8[0-2489])|3[389]\d))\d{4}$/,
    example: "59012345",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{3,6})",
      format: "$1 $2",
      leadingDigits: ["8[09]|9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["59|8"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[37][01]|4[0139]|51|6"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[1-57]"],
      nationalPrefixFormattingRule: "($NP$FG)"
    }
  ]
}

export default metadata
