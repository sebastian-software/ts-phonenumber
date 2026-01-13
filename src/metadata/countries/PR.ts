/**
 * Phone number metadata for PR
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PR",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  leadingDigits: "787|939",
  generalDesc: {
    pattern: "(?:[589]\\d\\d|787)\\d{7}",
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: "(?:787|939)[2-9]\\d{6}",
    example: "7872345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: "(?:787|939)[2-9]\\d{6}",
    example: "7872345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  }
}

export default metadata
