/**
 * Phone number metadata for PK
 * Country calling code: +92
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PK",
  countryCode: 92,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern:
      /^122\d{6}|[24-8]\d{10,11}|9(?:[013-9]\d{8,10}|2(?:[01]\d\d|2(?:[06-8]\d|1[01]))\d{7})|(?:[2-8]\d{3}|92(?:[0-7]\d|8[1-9]))\d{6}|[24-9]\d{8}|[89]\d{7}$/,
    possibleLengths: 1536 // bits: 9,10
  },
  fixedLine: {
    pattern:
      /^(?:(?:21|42)[2-9]|58[126])\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\d{5,6}$/,
    example: "2123456789",
    possibleLengths: 1536, // bits: 9,10
    possibleLengthsLocalOnly: 480 // bits: 5,6,7,8
  },
  mobile: {
    pattern: /^3(?:[0-247]\d|3[0-79]|55|64)\d{7}$/,
    example: "3012345678",
    possibleLengths: 1024 // bits: 10
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{3})(\d{2,7})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[89]0/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{4})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^1/
    },
    {
      pattern: /^(\d{3})(\d{6,7})$/,
      format: "$1 $2",
      leadingDigits:
        /^(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])|9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9])/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{2})(\d{7,8})$/,
      format: "$1 $2",
      leadingDigits: /^(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{5})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^58/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{3})(\d{7})$/,
      format: "$1 $2",
      leadingDigits: /^3/,
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91/,
      nationalPrefixFormattingRule: "($NP$FG)"
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^[24-9]/,
      nationalPrefixFormattingRule: "($NP$FG)"
    }
  ]
}

export default metadata
