/**
 * Phone number metadata for CA
 * Country calling code: +1
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "CA",
  countryCode: 1,
  internationalPrefix: "011",
  nationalPrefix: "1",
  generalDesc: {
    pattern: /^[2-9]\d{9}|3\d{6}$/,
    possibleLengths: [10]
  },
  fixedLine: {
    pattern:
      /^(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\d{6}$/,
    example: "5062345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern:
      /^(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\d{6}$/,
    example: "5062345678",
    possibleLengths: [10],
    possibleLengthsLocalOnly: [7]
  },
  voip: {
    pattern: /^600[2-9]\d{6}$/,
    example: "6002012345",
    possibleLengths: [10]
  }
}

export default metadata
