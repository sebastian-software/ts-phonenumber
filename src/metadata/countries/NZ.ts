/**
 * Phone number metadata for NZ
 * Country calling code: +64
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NZ",
  countryCode: 64,
  internationalPrefix: "0(?:0|161)",
  nationalPrefix: "0",
  preferredInternationalPrefix: "00",
  generalDesc: {
    pattern: /^[1289]\d{9}|50\d{5}(?:\d{2,3})?|[27-9]\d{7,8}|(?:[34]\d|6[0-35-9])\d{6}|8\d{4,6}$/,
    possibleLengths: 1792 // bits: 8,9,10
  },
  fixedLine: {
    pattern: /^240\d{5}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\d{6}$/,
    example: "32345678",
    possibleLengths: 256, // bits: 8
    possibleLengthsLocalOnly: 128 // bits: 7
  },
  mobile: {
    pattern: /^2(?:[0-27-9]\d|6)\d{6,7}|2(?:1\d|75)\d{5}$/,
    example: "211234567",
    possibleLengths: 1792 // bits: 8,9,10
  },
  formats: [
    {
      pattern: /^(\d{2})(\d{3,8})$/,
      format: "$1 $2",
      leadingDigits: /^8[1-79]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{2})(\d{2,3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^(?:50[036-8]|8|90|50(?:[0367]|88)|8|90)/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d)(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^24|[346]|7[2-57-9]|9[2-9]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2(?:10|74)|[589]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3,4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1|2[028]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3,5})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2(?:[169]|7[0-35-9])|7/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
