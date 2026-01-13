/**
 * Phone number metadata for CX
 * Country calling code: +61
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CX",
  countryCode: 61,
  internationalPrefix: "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
  nationalPrefix: "0",
  nationalPrefixForParsing: "([59]\\d{7})$|0",
  nationalPrefixTransformRule: "8$1",
  preferredInternationalPrefix: "0011",
  generalDesc: {
    pattern: /^1(?:[0-79]\d{8}(?:\d{2})?|8[0-24-9]\d{7})|[148]\d{8}|1\d{5,7}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern:
      /^8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\d|7(?:0[01]|1[0-2])|958))\d{3}$/,
    example: "891641234",
    possibleLengths: 512, // bits: 9
    possibleLengthsLocalOnly: 256 // bits: 8
  },
  mobile: {
    pattern:
      /^4(?:79[01]|83[0-36-9]|95[0-3])\d{5}|4(?:[0-36]\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\d{6}$/,
    example: "412345678",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^14(?:5(?:1[0458]|[23][458])|71\d)\d{4}$/,
    example: "147101234",
    possibleLengths: 512 // bits: 9
  }
}

export default metadata
