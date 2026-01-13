/**
 * Phone number metadata for GG
 * Country calling code: +44
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "GG",
  countryCode: 44,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([25-9]\\d{5})$|0|180020",
  nationalPrefixTransformRule: "1481$1",
  generalDesc: {
    pattern: /^(?:1481|[357-9]\d{3})\d{6}|8\d{6}(?:\d{2})?$/,
    possibleLengths: 1024 // bits: 10
  },
  fixedLine: {
    pattern: /^1481[25-9]\d{5}$/,
    example: "1481256789",
    possibleLengths: 1024, // bits: 10
    possibleLengthsLocalOnly: 64 // bits: 6
  },
  mobile: {
    pattern: /^7(?:(?:781|839)\d|911[17])\d{5}$/,
    example: "7781123456",
    possibleLengths: 1024 // bits: 10
  },
  voip: {
    pattern: /^56\d{8}$/,
    example: "5612345678",
    possibleLengths: 1024 // bits: 10
  }
}

export default metadata
