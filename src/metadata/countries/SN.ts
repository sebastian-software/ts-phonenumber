/**
 * Phone number metadata for SN
 * Country calling code: +221
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SN",
  countryCode: 221,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[378]\d|93)\d{7}$/,
    possibleLengths: [9]
  },
  fixedLine: {
    pattern: /^3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\d{5}$/,
    example: "301012345",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^7(?:[015-8]\d|21|90)\d{6}$/,
    example: "701234567",
    possibleLengths: [9]
  },
  voip: {
    pattern: /^(?:3(?:392|9[01]\d)\d|93(?:3[13]0|929))\d{4}$/,
    example: "933301234",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["8"]
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[379]"]
    }
  ]
}

export default metadata
