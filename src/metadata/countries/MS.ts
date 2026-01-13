/**
 * Phone number metadata for MS
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MS",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  nationalPrefixForParsing: "([34]\\d{6})$|1",
  nationalPrefixTransformRule: "664$1",
  leadingDigits: /^664/,
  generalDesc: {
    pattern: /^(?:[58]\d\d|664|900)\d{7}$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^6644(?:1[0-3]|91)\d{4}$/,
    example: "6644912345",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^664(?:3(?:49|9[1-6])|49[2-6])\d{4}$/,
    example: "6644923456",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 128 // bits: 7
  }
}

export default metadata
