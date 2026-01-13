/**
 * Phone number metadata for 882
 * Country calling code: +882
 *
 * Auto-generated from libphonenumber metadata.
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "882",
  countryCode: 882,
  generalDesc: {
    pattern: "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
    possibleLengths: [7, 8, 9, 10, 11, 12]
  },
  mobile: {
    pattern: "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
    example: "3421234",
    possibleLengths: [7, 8, 9, 10, 12]
  },
  voip: {
    pattern:
      "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",
    example: "390123456789"
  },
  formats: [
    {
      pattern: "(\\d{2})(\\d{5})",
      format: "$1 $2",
      leadingDigits: ["16|342"]
    },
    {
      pattern: "(\\d{2})(\\d{6})",
      format: "$1 $2",
      leadingDigits: ["49"]
    },
    {
      pattern: "(\\d{2})(\\d{2})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["1[36]|9"]
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["3[23]"]
    },
    {
      pattern: "(\\d{2})(\\d{3,4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["16"]
    },
    {
      pattern: "(\\d{2})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["10|23|3(?:[15]|4[57])|4|51"]
    },
    {
      pattern: "(\\d{3})(\\d{4})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["34"]
    },
    {
      pattern: "(\\d{2})(\\d{4,5})(\\d{5})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-35]"]
    }
  ]
}

export default metadata
