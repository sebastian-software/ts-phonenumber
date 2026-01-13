/**
 * Phone number metadata for PA
 * Country calling code: +507
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "PA",
  countryCode: 507,
  internationalPrefix: "00",
  generalDesc: {
    pattern: "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
    possibleLengths: [7, 8]
  },
  fixedLine: {
    pattern:
      "(?:1(?:0\\d|1[0479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[047-9]\\d|1[0-8]|2[0-5]|33|5[0-35]|6[068])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[4-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
    example: "2001234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: "(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}",
    example: "61234567",
    possibleLengths: [7, 8]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[1-57-9]"]
    },
    {
      pattern: "(\\d{4})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[68]"]
    },
    {
      pattern: "(\\d{3})(\\d{3})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["8"]
    }
  ]
}

export default metadata
