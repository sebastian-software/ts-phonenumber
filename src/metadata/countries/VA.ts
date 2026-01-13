/**
 * Phone number metadata for VA
 * Country calling code: +39
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VA",
  countryCode: 39,
  internationalPrefix: "00",
  leadingDigits: /^06698/,
  generalDesc: {
    pattern: /^0\d{5,10}|3[0-8]\d{7,10}|55\d{8}|8\d{5}(?:\d{2,4})?|(?:1\d|39)\d{7,8}$/,
    possibleLengths: 4032 // bits: 6,7,8,9,10,11
  },
  fixedLine: {
    pattern: /^06698\d{1,6}$/,
    example: "0669812345",
    possibleLengths: 4032 // bits: 6,7,8,9,10,11
  },
  mobile: {
    pattern: /^3[1-9]\d{8}|3[2-9]\d{7}$/,
    example: "3123456789",
    possibleLengths: 1536 // bits: 9,10
  },
  voip: {
    pattern: /^55\d{8}$/,
    example: "5512345678",
    possibleLengths: 1024 // bits: 10
  }
}

export default metadata
