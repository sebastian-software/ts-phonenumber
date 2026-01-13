/**
 * ts-phonenumber - TypeScript-first phone number parsing/formatting/validation library
 *
 * Based on Google's libphonenumber concepts, designed for modern Node.js and browsers.
 * Only supports LANDLINE, MOBILE, and VOIP number types.
 *
 * @packageDocumentation
 */

// Types
export {
  PhoneNumberType,
  PhoneNumberFormat,
  MatchType,
  type ParsedPhoneNumber,
  type ParseOptions,
  type FormatOptions,
  type ValidationResult
} from "./types.js"

// Core functions (async)
export { parse, parseSync } from "./parse.js"
export {
  validate,
  validateSync,
  isValidNumber,
  isValidNumberSync,
  isPossibleNumber,
  isPossibleNumberWithReason,
  PossibleNumberResult
} from "./validate.js"
export {
  format,
  formatSync,
  formatE164Only,
  formatInternationalOnly,
  formatNationalOnly
} from "./format.js"
export { getType, isMobile, isLandline, isVoIP } from "./getType.js"
export { isNumberMatch } from "./match.js"
export {
  getRegionCodeForNumber,
  getCountryCodeForRegion,
  getRegionsForCode,
  getMainCountryForCode
} from "./region.js"

// Metadata
export type {
  RegionMetadata,
  MetadataBundle,
  PhoneNumberDesc,
  NumberFormat
} from "./metadata/index.js"

export {
  loadRegionMetadata,
  loadMetadataBundle,
  registerBundle,
  preloadRegions,
  clearMetadataCache,
  registerMetadata,
  getCachedRegionMetadata,
  getRegionMetadataSync,
  isMetadataLoaded
} from "./metadata/index.js"
