/**
 * Phone number metadata for VN
 * Country calling code: +84
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "VN",
  countryCode: 84,
  internationalPrefix: "00",
  nationalPrefix: "0",
  generalDesc: {
    pattern: /^[12]\d{9}|[135-9]\d{8}|[16]\d{7}|[16-8]\d{6}$/,
    possibleLengths: 1536 // bits: 9,10
  },
  fixedLine: {
    pattern:
      /^2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\d{7}$/,
    example: "2101234567",
    possibleLengths: 1024 // bits: 10
  },
  mobile: {
    pattern:
      /^(?:5(?:2[238]|59)|89[6-9]|99[013-9])\d{6}|(?:3\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\d{7}$/,
    example: "912345678",
    possibleLengths: 512 // bits: 9
  },
  voip: {
    pattern: /^672\d{6}$/,
    example: "672012345",
    possibleLengths: 512 // bits: 9
  },
  formats: [
    {
      pattern: /^(\d{3})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[17]99/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{2})(\d{5})$/,
      format: "$1 $2",
      leadingDigits: /^80/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{3})(\d{4,5})$/,
      format: "$1 $2",
      leadingDigits: /^69/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{4})(\d{4,6})$/,
      format: "$1 $2",
      leadingDigits: /^1/,
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{2})(\d{3})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4",
      leadingDigits: /^6/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^[357-9]/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{2})(\d{4})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2[48]/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    },
    {
      pattern: /^(\d{3})(\d{4})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^2/,
      nationalPrefixFormattingRule: "$NP$FG",
      nationalPrefixOptional: true
    }
  ]
}

export default metadata
