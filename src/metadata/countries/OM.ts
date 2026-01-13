/**
 * Phone number metadata for OM
 * Country calling code: +968
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "OM",
  countryCode: 968,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:1505|[279]\d{3}|500)\d{4}|800\d{5,6}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^2[1-6]\d{6}$/,
    example: "23123456",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^(?:1505|90[1-9]\d)\d{4}|(?:7[124-9]|9[1-9])\d{6}$/,
    example: "92123456",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4,6})$/,
      format: "$1 $2",
      leadingDigits: /^[58]/
    },
    {
      pattern: /^(\d{2})(\d{6})$/,
      format: "$1 $2",
      leadingDigits: /^2/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[179]/
    }
  ]
}

export default metadata
