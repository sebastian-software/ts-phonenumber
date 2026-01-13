/**
 * Phone number metadata for LT
 * Country calling code: +370
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "LT",
  countryCode: 370,
  internationalPrefix: "00",
  nationalPrefix: "0",
  nationalPrefixForParsing: "[08]",
  generalDesc: {
    pattern: /^(?:[3469]\d|52|[78]0)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^(?:3[1478]|4[124-6]|52)\d{6}$/,
    example: "31234567",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^6\d{7}$/,
    example: "61234567",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^[89]01\d{5}$/,
    example: "80123456",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["52[0-7]"],
      nationalPrefixFormattingRule: "($NP-$FG)",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["[7-9]"],
      nationalPrefixFormattingRule: "$NP $FG",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["37|4(?:[15]|6[1-8])"],
      nationalPrefixFormattingRule: "($NP-$FG)",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["[3-6]"],
      nationalPrefixFormattingRule: "($NP-$FG)",
      nationalPrefixOptional: true
    }
  ]
}

export default metadata
