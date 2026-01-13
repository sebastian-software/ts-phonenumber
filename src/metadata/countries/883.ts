/**
 * Phone number metadata for 883
 * Country calling code: +883
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "883",
  countryCode: 883,
  sameMobileAndFixedLinePattern: true,
  generalDesc: {
    pattern: "(?:[1-4]\\d|51)\\d{6,10}",
    possibleLengths: [8, 9, 10, 11, 12]
  },
  voip: {
    pattern:
      "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
    example: "510012345"
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{3})(\\d{2,8})",
      format: "$1 $2 $3",
      leadingDigits: ["[14]|2[24-689]|3[02-689]|51[24-9]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["510"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["21"]
    },
    {
      pattern: "(\\d{4})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["51[13]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3 $4",
      leadingDigits: ["[235]"]
    }
  ]
}

export default metadata
