/**
 * Phone number metadata for SG
 * Country calling code: +65
 *
 * Auto-generated from libphonenumber PhoneNumberMetadata.xml
 * Do not edit manually.
 */

import type { RegionMetadata } from "../types.js"

const metadata: RegionMetadata = {
  regionCode: "SG",
  countryCode: 65,
  internationalPrefix: "0[0-3]\\d",
  generalDesc: {
    pattern: /^(?:(?:1\d|8)\d\d|7000)\d{7}|[3689]\d{7}$/,
    possibleLengths: 256 // bits: 8
  },
  fixedLine: {
    pattern: /^662[0-24-9]\d{4}|6(?:[0-578]\d|6[013-57-9]|9[0-35-9])\d{5}$/,
    example: "61234567",
    possibleLengths: 256 // bits: 8
  },
  mobile: {
    pattern: /^89(?:8[02-9]|9[0-4])\d{4}|(?:8(?:0[1-9]|[1-8]\d|9[0-7])|9[0-8]\d)\d{5}$/,
    example: "81234567",
    possibleLengths: 256 // bits: 8
  },
  voip: {
    pattern: /^(?:3[12]\d|666)\d{5}$/,
    example: "31234567",
    possibleLengths: 256 // bits: 8
  },
  formats: [
    {
      pattern: /^(\d{4,5})$/,
      format: "$1",
      leadingDigits: /^(?:1[013-9]|77|1(?:[013-8]|9(?:0[1-9]|[1-9]))|77)/
    },
    {
      pattern: /^(\d{4})(\d{4})$/,
      format: "$1 $2",
      leadingDigits: /^[369]|8(?:0[1-9]|[1-9])/
    },
    {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^8/
    },
    {
      pattern: /^(\d{4})(\d{4})(\d{3})$/,
      format: "$1 $2 $3",
      leadingDigits: /^7/
    },
    {
      pattern: /^(\d{4})(\d{3})(\d{4})$/,
      format: "$1 $2 $3",
      leadingDigits: /^1/
    }
  ]
}

export default metadata
