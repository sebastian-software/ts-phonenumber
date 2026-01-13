/**
 * Phone number metadata for JE
 * Country calling code: +44
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "JE",
  countryCode: 44,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([0-24-8]\\d{5})$|0|180020",
  nationalPrefixTransformRule: "1534$1",
  generalDesc: {
    pattern: /^1534\d{6}|(?:[3578]\d|90)\d{8}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern: /^1534[0-24-8]\d{5}$/,
    example: "1534456789",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [6]
  },
  mobile: {
    pattern: /^7(?:(?:(?:50|82)9|937)\d|7(?:00[378]|97\d))\d{5}$/,
    example: "7797712345",
    possibleLengths: [10]
  },
  voip: {
    pattern: /^56\d{8}$/,
    example: "5612345678",
    possibleLengths: [10]
  }
}

export default metadata
