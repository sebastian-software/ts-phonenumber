/**
 * Phone number metadata for RO
 * Country calling code: +40
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "RO",
  countryCode: 40,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
    possibleLengths: [6, 9]
  },
  fixedLine: {
    pattern: "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",
    example: "211234567",
    possibleLengths: [6, 9]
  },
  mobile: {
    pattern:
      "(?:630|702)0\\d{5}|(?:6(?:00|2\\d)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}",
    example: "712034567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})",
      format: "$1 $2",
      leadingDigits: ["2[3-6]", "2[3-6]\\d9"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["219|31"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[23]1"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[236-9]"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
