/**
 * Phone number metadata for YT
 * Country calling code: +262
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "YT",
  countryCode: 262,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^7093\d{5}|(?:80|9\d)\d{7}|(?:26|63)9\d{6}$/,
    possibleLengths: 512 // bits: 9
  },
  fixedLine: {
    pattern: /^269(?:0[0-467]|15|5[0-4]|6\d|[78]0)\d{4}$/,
    example: "269601234",
    possibleLengths: 512 // bits: 9
  },
  mobile: {
    pattern: /^(?:639(?:0[0-79]|1[019]|[267]\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\d{4}$/,
    example: "639012345",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^9(?:(?:39|47)8[01]|769\d)\d{4}$/,
    example: "939801234",
    possibleLengths: 512 // bits: 9
  }
}

export default metadata
