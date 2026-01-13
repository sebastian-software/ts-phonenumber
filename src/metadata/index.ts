/**
 * Metadata module exports.
 */

export type { PhoneNumberDesc, NumberFormat, RegionMetadata, MetadataBundle } from "./types.js"

export {
  loadRegionMetadata,
  loadMetadataBundle,
  getRegionsForCountryCode,
  getCachedRegionMetadata,
  clearMetadataCache,
  preloadRegions,
  registerMetadata
} from "./loader.js"

// Bundle exports
export { bundles, type BundleName } from "./bundles/index.js"
