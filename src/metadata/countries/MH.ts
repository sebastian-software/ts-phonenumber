/**
 * Phone number metadata for MH
 * Country calling code: +692
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MH",
  countryCode: 692,
  internationalPrefix: "011",
  nationalPrefix: "1",
  generalDesc: {
    pattern: "329\\d{4}|(?:[256]\\d|45)\\d{5}",
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: "(?:247|528|625)\\d{4}",
    example: "2471234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:(?:23|54)5|329|45[35-8])\\d{4}",
    example: "2351234",
    possibleLengths: [7]
  },
  voip: {
    pattern: "635\\d{4}",
    example: "6351234",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[2-6]"]
    }
  ]
}

export default metadata
