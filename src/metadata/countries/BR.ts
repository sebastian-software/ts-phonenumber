/**
 * Phone number metadata for BR
 * Country calling code: +55
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BR",
  countryCode: 55,
  internationalPrefix: "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
  nationalPrefix: "0",
  nationalPrefixForParsing: "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
  nationalPrefixTransformRule: "$2",
  generalDesc: {
    pattern:
      "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
    possibleLengths: [10, 11]
  },
  fixedLine: {
    pattern: "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",
    example: "1123456789",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [8]
  },
  mobile: {
    pattern: "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",
    example: "11961234567",
    possibleLengths: [10, 11],
    possibleLengthsLocalOnly: [8, 9]
  },
  formats: [
    {
      pattern: "(\\d{3,6})",
      format: "$1",
      leadingDigits: ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]
    },
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]
    },
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]
    },
    {
      pattern: "(\\d{3})(\\d{2,3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["(?:[358]|90)0"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{5})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["9"]
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{4})",
      format: "$1 $2-$3",
      leadingDigits: ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
      nationalPrefixFormattingRule: "($FG)",
      domesticCarrierCodeFormattingRule: "$NP $CC ($FG)"
    },
    {
      pattern: "(\\d{2})(\\d{5})(\\d{4})",
      format: "$1 $2-$3",
      leadingDigits: ["[16][1-9]|[2-57-9]"],
      nationalPrefixFormattingRule: "($FG)",
      domesticCarrierCodeFormattingRule: "$NP $CC ($FG)"
    }
  ]
}

export default metadata
