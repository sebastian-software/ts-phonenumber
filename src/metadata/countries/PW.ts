/**
 * Phone number metadata for PW
 * Country calling code: +680
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PW",
  countryCode: 680,
  internationalPrefix: "01[12]",
  generalDesc: {
    pattern: "(?:[24-8]\\d\\d|345|900)\\d{4}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern:
      "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",
    example: "2771234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:(?:46|83)[0-5]|(?:6[2-4689]|78)0)\\d{4}|(?:45|77|88)\\d{5}",
    example: "6201234",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1 $2",
      leadingDigits: ["[2-9]"]
    }
  ]
}

export default metadata
