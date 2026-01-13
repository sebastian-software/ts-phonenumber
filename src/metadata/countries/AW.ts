/**
 * Phone number metadata for AW
 * Country calling code: +297
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "AW",
  countryCode: 297,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[25-79]\d\d|800)\d{4}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^5(?:2\d|8[1-9])\d{4}$/,
    example: "5212345",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern:
      /^(?:290|5[69]\d|6(?:[03]0|22|4[0-2]|[69]\d)|7(?:[34]\d|7[07])|9(?:6[45]|9[4-8]))\d{4}$/,
    example: "5601234",
    possibleLengths: 128 // bits: 7
  },
  voip: {
    pattern: /^(?:28\d|501)\d{4}$/,
    example: "5011234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[25-9]/
    }
  ]
}

export default metadata
