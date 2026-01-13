/**
 * Phone number metadata for FM
 * Country calling code: +691
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "FM",
  countryCode: 691,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:[39]\d\d|820)\d{4}$/,
    possibleLengths: 128 // bits: 7
  },
  fixedLine: {
    pattern: /^31(?:00[67]|208|309)\d\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\d)\d)\d{3}$/,
    example: "3201234",
    possibleLengths: 128 // bits: 7
  },
  mobile: {
    pattern: /^31(?:00[67]|208|309)\d\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\d)\d)\d{3}$/,
    example: "3501234",
    possibleLengths: 128 // bits: 7
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[389]/
    }
  ]
}

export default metadata
