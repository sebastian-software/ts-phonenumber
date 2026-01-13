/**
 * Phone number metadata for VE
 * Country calling code: +58
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VE",
  countryCode: 58,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[68]00\d{7}|(?:[24]\d|[59]0)\d{8}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^(?:2(?:12|3[457-9]|[467]\d|[58][1-9]|9[1-6])|[4-6]00)\d{7}$/,
    example: "2121234567",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^4(?:1[24-8]|2[246])\d{7}$/,
    example: "4121234567",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{7})",
      format: "$1-$2",
      leadingDigits: ["[24-689]"],
      nationalPrefixFormattingRule: "$NP$FG",
      domesticCarrierCodeFormattingRule: "$CC $FG"
    }
  ]
}

export default metadata
