/**
 * Phone number metadata for MO
 * Country calling code: +853
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "MO",
  countryCode: 853,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^0800\d{3}|(?:28|[68]\d)\d{6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^(?:28[2-9]|8(?:11|[2-57-9]\d))\d{5}$/,
    example: "28212345",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern:
      /^6800[0-79]\d{3}|6(?:[235]\d\d|6(?:0[0-5]|[1-9]\d)|8(?:0[1-9]|[14-8]\d|2[5-9]|[39][0-4]))\d{4}$/,
    example: "66123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4})(\d{3})$/,
      format: "$1 $2",
      leadingDigits: /^0/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[268]/
    }
  ]
}

export default metadata
