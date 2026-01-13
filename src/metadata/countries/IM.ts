/**
 * Phone number metadata for IM
 * Country calling code: +44
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "IM",
  countryCode: 44,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([25-8]\\d{5})$|0|180020",
  nationalPrefixTransformRule: "1624$1",
  leadingDigits: "74576|(?:16|7[56])24",
  generalDesc: {
    pattern: /^1624\d{6}|(?:[3578]\d|90)\d{8}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^1624(?:230|[5-8]\d\d)\d{3}$/,
    example: "1624756789",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: /^76245[06]\d{4}|7(?:4576|[59]24\d|624[0-4689])\d{5}$/,
    example: "7924123456",
    possibleLengths: [10]
  },
  voip: {
    pattern: /^56\d{8}$/,
    example: "5612345678",
    possibleLengths: [10]
  }
}

export default metadata
