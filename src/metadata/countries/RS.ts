/**
 * Phone number metadata for RS
 * Country calling code: +381
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "RS",
  countryCode: 381,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern:
      /^38[02-9]\d{6,9}|6\d{7,9}|90\d{4,8}|38\d{5,6}|(?:7\d\d|800)\d{3,9}|(?:[12]\d|3[0-79])\d{5,10}$/,
    possibleLengths: 8064 // bits: 7,8,9,10,11,12
  },
  fixedLine: {
    pattern:
      /^(?:11[1-9]\d|(?:2[389]|39)(?:0[2-9]|[2-9]\d))\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\d{4,9}$/,
    example: "10234567",
    possibleLengths: 8064, // bits: 7,8,9,10,11,12
    possibleLengthsLocalOnly: 112 // bits: 4,5,6
  },
  mobile: {
    pattern: /^6(?:[0-689]|7\d)\d{6,7}$/,
    example: "601234567",
    possibleLengths: 1792 // bits: 8,9,10
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3,9})$/,
      format: "$1 $2",
      leadingDigits: /^(?:2[389]|39)0|[7-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{5,10})$/,
      format: "$1 $2",
      leadingDigits: /^[1-36]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
