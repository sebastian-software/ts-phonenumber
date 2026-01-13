/**
 * Phone number metadata for TR
 * Country calling code: +90
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "TR",
  countryCode: 90,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^4\d{6}|8\d{11,12}|(?:[2-58]\d\d|900)\d{7}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      /^(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\d{7}$/,
    example: "2123456789",
    possibleLengths: [10]
  },
  mobile: {
    pattern: /^561(?:011|61\d)\d{4}|5(?:0[15-7]|1[06]|24|[34]\d|5[1-59]|9[46])\d{7}$/,
    example: "5012345678",
    possibleLengths: [10]
  },
  voip: {
    pattern: /^850\d{7}$/,
    example: "8500123456",
    possibleLengths: [10]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d)(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["444"],
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["512|8[01589]|90"],
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"],
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[24][1-8]|3[1-9]"],
      nationalPrefixFormattingRule: "($NP$FG)",
      nationalPrefixOptional: true
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{6,7})",
      format: "$1 $2 $3",
      leadingDigits: ["80"],
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    }
  ]
}

export default metadata
