/**
 * Phone number metadata for AS
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AS",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([267]\\d{6})$|1",
  nationalPrefixTransformRule: "684$1",
  leadingDigits: "684",
  generalDesc: {
    pattern: "(?:[58]\\d\\d|684|900)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: "6846(?:22|33|44|55|77|88|9[19])\\d{4}",
    example: "6846221234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}",
    example: "6847331234",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
