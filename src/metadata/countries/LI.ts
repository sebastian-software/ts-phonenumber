/**
 * Phone number metadata for LI
 * Country calling code: +423
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LI",
  countryCode: 423,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "(1001)|0",
  generalDesc: {
    pattern: /^[68]\d{8}|(?:[2378]\d|90)\d{5}$/,
    possibleLengths: [7, 9]
  },
  fixedLine: {
    pattern:
      /^(?:2(?:01|1[27]|2[024]|3\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\d{4}$/,
    example: "2345678",
    possibleLengths: [7]
  },
  mobile: {
    pattern:
      /^(?:6(?:(?:4[5-9]|5\d)\d|6(?:[024-68]\d|1[01]|3[7-9]|70))\d|7(?:[37-9]\d|42|56))\d{4}$/,
    example: "660234567",
    possibleLengths: [7, 9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3",
      leadingDigits: ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["8"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["69"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["6"],
      domesticCarrierCodeFormattingRule: "$CC $FG"
    }
  ]
}

export default metadata
