/**
 * Phone number metadata for SK
 * Country calling code: +421
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SK",
  countryCode: 421,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[2-689]\d{8}|[2-59]\d{6}|[2-5]\d{5}$/,
    possibleLengths: 704 // bits: 6,7,9
  },
  fixedLine: {
    pattern:
      /^(?:2(?:16|[2-9]\d{3})|(?:(?:[3-5][1-8]\d|819)\d|601[1-5])\d)\d{4}|(?:2|[3-5][1-8])1[67]\d{3}|[3-5][1-8]16\d\d$/,
    example: "221234567",
    possibleLengths: 704 // bits: 6,7,9
  },
  mobile: {
    pattern: /^909[1-9]\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\d)\d{6}$/,
    example: "912123456",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^6(?:02|5[0-4]|9[0-6])\d{6}$/,
    example: "690123456",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d)(\d{2})(\d{3,4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^21/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{2})(\d{2,3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^(?:[3-5][1-8]1|[3-5][1-8]1[67])/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{3})$/,
      format: "$1 $2",
      leadingDigits: /^(?:909|9090)/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d)(\d{3})(\d{3})(\d{2})$/,
      format: "$1/$2 $3 $4",
      leadingDigits: /^2/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[689]/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
      format: "$1/$2 $3 $4",
      leadingDigits: /^[3-5]/,
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
