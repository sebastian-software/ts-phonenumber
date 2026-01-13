/**
 * Phone number metadata for AI
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AI",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([2457]\\d{6})$|1",
  nationalPrefixTransformRule: "264$1",
  leadingDigits: "264",
  generalDesc: {
    pattern: "(?:264|[58]\\d\\d|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: "264(?:292|4(?:6[12]|9[78]))\\d{4}",
    example: "2644612345",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",
    example: "2642351234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
