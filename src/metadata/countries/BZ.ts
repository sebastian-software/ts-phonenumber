/**
 * Phone number metadata for BZ
 * Country calling code: +501
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "BZ",
  countryCode: 501,
  internationalPrefix: "00",
  generalDesc: {
    pattern: /^(?:0800\d|[2-8])\d{6}$/,
    possibleLengths: [7]
  },
  fixedLine: {
    pattern: /^(?:2(?:[02]\d|36|[68]0)|[3-58](?:[02]\d|[68]0)|7(?:[02]\d|32|[68]0))\d{4}$/,
    example: "2221234",
    possibleLengths: [7]
  },
  mobile: {
    pattern: /^6[0-35-7]\d{5}$/,
    example: "6221234",
    possibleLengths: [7]
  },
  formats: [
    {
      pattern: "(\\d{3})(\\d{4})",
      format: "$1-$2",
      leadingDigits: ["[2-8]"]
    },
    {
      pattern: "(\\d)(\\d{3})(\\d{4})(\\d{3})",
      format: "$1-$2-$3-$4",
      leadingDigits: ["0"]
    }
  ]
}

export default metadata
