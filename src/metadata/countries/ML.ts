/**
 * Phone number metadata for ML
 * Country calling code: +223
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "ML",
  countryCode: 223,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^[24-9]\d{7}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern: /^2(?:07[0-8]|12[67])\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-59]))\d{5}$/,
    example: "20212345",
    possibleLengths: [8]
  },
  mobile: {
    pattern: /^2(?:0(?:01|79)|17\d)\d{4}|(?:5[0-3]|[679]\d|8[2-59])\d{6}$/,
    example: "65012345",
    possibleLengths: [8]
  },
  formats: [
    {
      pattern: "(\\d{4})",
      format: "$1",
      leadingDigits: ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[24-9]"]
    }
  ]
}

export default metadata
