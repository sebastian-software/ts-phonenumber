/**
 * Phone number metadata for BO
 * Country calling code: +591
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BO",
  countryCode: 591,
  internationalPrefix: "00(?:1\\d)?",
  nationalPrefix: "0",
  nationalPrefixForParsing: "0(1\\d)?",
  generalDesc: {
    pattern: /^8001\d{5}|(?:[2-467]\d|50)\d{6}$/,
    possibleLengths: [8]
  },
  fixedLine: {
    pattern:
      /^(?:2(?:2\d\d|5(?:11|[258]\d|9[67])|6(?:12|2\d|9[34])|8(?:2[34]|39|62))|3(?:3\d\d|4(?:6\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\d\d|6(?:11|[24689]\d|72)))\d{4}$/,
    example: "22123456",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  mobile: {
    pattern: /^[67]\d{7}$/,
    example: "71234567",
    possibleLengths: [8]
  },
  voip: {
    pattern: /^50\d{6}$/,
    example: "50123456",
    possibleLengths: [8],
    possibleLengthsLocalOnly: [7]
  },
  formats: [
    {
      pattern: "(\\d)(\\d{7})",
      format: "$1 $2",
      leadingDigits: ["[235]|4[46]"],
      domesticCarrierCodeFormattingRule: "$NP$CC $FG"
    },
    {
      pattern: "(\\d{8})",
      format: "$1",
      leadingDigits: ["[67]"],
      domesticCarrierCodeFormattingRule: "$NP$CC $FG"
    },
    {
      pattern: "(\\d{3})(\\d{2})(\\d{4})",
      format: "$1 $2 $3",
      leadingDigits: ["8"],
      domesticCarrierCodeFormattingRule: "$NP$CC $FG"
    }
  ]
}

export default metadata
