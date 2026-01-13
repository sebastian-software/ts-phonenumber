/**
 * Phone number metadata for EH
 * Country calling code: +212
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "EH",
  countryCode: 212,
  internationalPrefix: "00",
  nationalPrefix: "0",
  leadingDigits: "528[89]",
  generalDesc: {
    pattern: /^[5-8]\d{8}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^528[89]\d{5}$/,
    example: "528812345",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^(?:6(?:[0-79]\d|8[0-247-9])|7(?:[016-8]\d|2[0-8]|5[0-5]))\d{6}$/,
    example: "650123456",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^(?:592(?:4[0-2]|93)|80[89]\d\d)\d{4}$/,
    example: "592401234",
    possibleLengths: [9]
  }
}

export default metadata
