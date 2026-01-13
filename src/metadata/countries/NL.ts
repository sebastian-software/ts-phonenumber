/**
 * Phone number metadata for NL
 * Country calling code: +31
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "NL",
  countryCode: 31,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^(?:[124-7]\d\d|3(?:[02-9]\d|1[0-8]))\d{6}|8\d{6,9}|9\d{6,10}|1\d{4,5}$/,
    possibleLengths: [9, 11]
  },
  fixedLine: {
    pattern:
      /^(?:1(?:[035]\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\d\d)\d{6}$/,
    example: "101234567",
    possibleLengths: [9]
  },
  mobile: {
    pattern: /^(?:6[1-58]|970\d)\d{7}$/,
    example: "612345678",
    possibleLengths: [9, 11]
  },
  voip: {
    pattern: /^(?:85|91)\d{7}$/,
    example: "851234567",
    possibleLengths: [9]
  },
  formats: [
    {
      pattern: "(\\d{4})",
      format: "$1",
      leadingDigits: ["1[238]|[34]"]
    },
    {
      pattern: "(\\d{2})(\\d{3,4})",
      format: "$1 $2",
      leadingDigits: ["14"]
    },
    {
      pattern: "(\\d{6})",
      format: "$1",
      leadingDigits: ["1"]
    },
    {
      pattern: "(\\d{3})(\\d{4,7})",
      format: "$1 $2",
      leadingDigits: ["[89]0"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["66"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d)(\\d{8})",
      format: "$1 $2",
      leadingDigits: ["6"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{3})",
      format: "$1 $2 $3",
      leadingDigits: ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{2})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["[1-578]|91"],
      nationalPrefixFormattingRule: "$NP$FG"
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{5})",
      format: "$1 $2 $3",
      leadingDigits: ["9"],
      nationalPrefixFormattingRule: "$NP$FG"
    }
  ]
}

export default metadata
