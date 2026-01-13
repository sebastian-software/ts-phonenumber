/**
 * Phone number test fixtures.
 * Auto-generated from libphonenumber test data.
 * Do not edit manually.
 */

import type { PhoneNumberFixture } from "./test-utils.js"

export const ALPHA_NUMERIC_NUMBER: PhoneNumberFixture = {
  countryCode: 1,
  nationalNumber: "80074935247"
}

export const AE_UAN: PhoneNumberFixture = { countryCode: 971, nationalNumber: "600123456" }

export const AR_MOBILE: PhoneNumberFixture = { countryCode: 54, nationalNumber: "91187654321" }

export const AR_NUMBER: PhoneNumberFixture = { countryCode: 54, nationalNumber: "1187654321" }

export const AU_NUMBER: PhoneNumberFixture = { countryCode: 61, nationalNumber: "236618300" }

export const BS_MOBILE: PhoneNumberFixture = { countryCode: 1, nationalNumber: "2423570000" }

export const BS_NUMBER: PhoneNumberFixture = { countryCode: 1, nationalNumber: "2423651234" }

export const CO_FIXED_LINE: PhoneNumberFixture = { countryCode: 57, nationalNumber: "6012345678" }

export const DE_NUMBER: PhoneNumberFixture = { countryCode: 49, nationalNumber: "30123456" }

export const DE_SHORT_NUMBER: PhoneNumberFixture = { countryCode: 49, nationalNumber: "1234" }

export const GB_MOBILE: PhoneNumberFixture = { countryCode: 44, nationalNumber: "7912345678" }

export const GB_NUMBER: PhoneNumberFixture = { countryCode: 44, nationalNumber: "2070313000" }

export const IT_MOBILE: PhoneNumberFixture = { countryCode: 39, nationalNumber: "345678901" }

export const IT_NUMBER: PhoneNumberFixture = {
  countryCode: 39,
  nationalNumber: "236618300",
  italianLeadingZero: true
}

export const JP_STAR_NUMBER: PhoneNumberFixture = { countryCode: 81, nationalNumber: "2345" }

export const MX_MOBILE1: PhoneNumberFixture = { countryCode: 52, nationalNumber: "12345678900" }

export const MX_MOBILE2: PhoneNumberFixture = { countryCode: 52, nationalNumber: "15512345678" }

export const MX_NUMBER1: PhoneNumberFixture = { countryCode: 52, nationalNumber: "3312345678" }

export const MX_NUMBER2: PhoneNumberFixture = { countryCode: 52, nationalNumber: "8211234567" }

export const NZ_NUMBER: PhoneNumberFixture = { countryCode: 64, nationalNumber: "33316005" }

export const SG_NUMBER: PhoneNumberFixture = { countryCode: 65, nationalNumber: "65218000" }

export const US_LONG_NUMBER: PhoneNumberFixture = { countryCode: 1, nationalNumber: "65025300001" }

export const US_NUMBER: PhoneNumberFixture = { countryCode: 1, nationalNumber: "6502530000" }

export const US_PREMIUM: PhoneNumberFixture = { countryCode: 1, nationalNumber: "9002530000" }

export const US_LOCAL_NUMBER: PhoneNumberFixture = { countryCode: 1, nationalNumber: "2530000" }

export const US_SHORT_BY_ONE_NUMBER: PhoneNumberFixture = {
  countryCode: 1,
  nationalNumber: "650253000"
}

export const US_TOLLFREE: PhoneNumberFixture = { countryCode: 1, nationalNumber: "8002530000" }

export const US_SPOOF: PhoneNumberFixture = { countryCode: 1, nationalNumber: "0" }

export const US_SPOOF_WITH_RAW_INPUT: PhoneNumberFixture = {
  countryCode: 1,
  nationalNumber: "0",
  rawInput: "000-000-0000"
}

export const UZ_FIXED_LINE: PhoneNumberFixture = { countryCode: 998, nationalNumber: "612201234" }

export const UZ_MOBILE: PhoneNumberFixture = { countryCode: 998, nationalNumber: "950123456" }

export const INTERNATIONAL_TOLL_FREE: PhoneNumberFixture = {
  countryCode: 800,
  nationalNumber: "12345678"
}

export const INTERNATIONAL_TOLL_FREE_TOO_LONG: PhoneNumberFixture = {
  countryCode: 800,
  nationalNumber: "123456789"
}

export const UNIVERSAL_PREMIUM_RATE: PhoneNumberFixture = {
  countryCode: 979,
  nationalNumber: "123456789"
}

export const UNKNOWN_COUNTRY_CODE_NO_RAW_INPUT: PhoneNumberFixture = {
  countryCode: 2,
  nationalNumber: "12345"
}
