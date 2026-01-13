/**
 * Metadata loader with caching support.
 * Loads region metadata on-demand via dynamic import() to enable code splitting.
 */

import type { MetadataBundle, RegionMetadata } from "./types.js"
import { countryCodeToRegions } from "./countryCodeMap.js"

/** Cache for loaded region metadata */
const regionCache = new Map<string, RegionMetadata>()

/** Cache for country code to region mappings (extends static map at runtime) */
const countryCodeCache = new Map<number, string[]>()

/** Pending loads to prevent duplicate requests */
const pendingLoads = new Map<string, Promise<RegionMetadata | undefined>>()

/**
 * Loads metadata for a specific region.
 * Uses dynamic import() to enable bundler code splitting.
 *
 * @param regionCode - ISO 3166-1 alpha-2 region code (e.g., "DE")
 * @returns The region metadata or undefined if not found
 */
export async function loadRegionMetadata(regionCode: string): Promise<RegionMetadata | undefined> {
  const normalizedCode = regionCode.toUpperCase()

  // Check cache first
  const cached = regionCache.get(normalizedCode)
  if (cached) {
    return cached
  }

  // Check if already loading
  const pending = pendingLoads.get(normalizedCode)
  if (pending) {
    return pending
  }

  // Load metadata dynamically
  const loadPromise = loadRegionMetadataInternal(normalizedCode)
  pendingLoads.set(normalizedCode, loadPromise)

  try {
    const metadata = await loadPromise
    /* v8 ignore next 8 - cache population from dynamic import, tests use registerMetadata */
    if (metadata) {
      regionCache.set(normalizedCode, metadata)
      // Update country code mapping
      const regions = countryCodeCache.get(metadata.countryCode) ?? []
      if (!regions.includes(normalizedCode)) {
        regions.push(normalizedCode)
        countryCodeCache.set(metadata.countryCode, regions)
      }
    }
    return metadata
  } finally {
    pendingLoads.delete(normalizedCode)
  }
}

/**
 * Internal function to load region metadata via dynamic import.
 */
async function loadRegionMetadataInternal(regionCode: string): Promise<RegionMetadata | undefined> {
  try {
    // Dynamic import for code splitting
    // The path will be resolved by the bundler
    const module = (await import(`./countries/${regionCode}.js`)) as { default: RegionMetadata }
    /* v8 ignore next - dynamic import success path, tests use registerMetadata */
    return module.default
  } catch {
    // Region not found or not supported
    return undefined
  }
}

/**
 * Loads a metadata bundle (e.g., for a country group like DACH or EU).
 *
 * @param bundleName - Name of the bundle (e.g., "DACH", "EU", "G7")
 * @returns The metadata bundle or undefined if not found
 */
export async function loadMetadataBundle(bundleName: string): Promise<MetadataBundle | undefined> {
  try {
    const module = (await import(`./groups/${bundleName}.js`)) as { default: MetadataBundle }

    /* v8 ignore start - bundle loading success path, tests use registerMetadata */
    // Populate caches
    const bundle = module.default
    for (const [code, metadata] of Object.entries(bundle.regions)) {
      regionCache.set(code, metadata)
    }
    for (const [countryCode, regions] of Object.entries(bundle.countryCodeToRegions)) {
      countryCodeCache.set(Number(countryCode), regions)
    }

    return bundle
    /* v8 ignore stop */
  } catch {
    return undefined
  }
}

/**
 * Gets region codes for a country calling code.
 * First checks the runtime cache, then falls back to static map.
 *
 * @param countryCode - The country calling code (e.g., 49)
 * @returns Array of region codes or undefined if unknown
 */
export function getRegionsForCountryCode(countryCode: number): string[] | undefined {
  // Check runtime cache first (populated by registerMetadata)
  const cached = countryCodeCache.get(countryCode)
  if (cached) {
    return cached
  }

  // Fall back to static map (auto-generated from XML)
  return countryCodeToRegions[countryCode]
}

/**
 * Gets cached metadata for a region.
 *
 * @param regionCode - ISO 3166-1 alpha-2 region code
 * @returns The cached metadata or undefined if not loaded
 */
export function getCachedRegionMetadata(regionCode: string): RegionMetadata | undefined {
  return regionCache.get(regionCode.toUpperCase())
}

/**
 * Clears all cached metadata.
 * Useful for testing or when switching between metadata versions.
 */
export function clearMetadataCache(): void {
  regionCache.clear()
  countryCodeCache.clear()
  pendingLoads.clear()
}

/**
 * Manually registers metadata for a region.
 * Useful for testing or when metadata is bundled differently.
 *
 * @param metadata - The region metadata to register
 */
export function registerMetadata(metadata: RegionMetadata): void {
  const code = metadata.regionCode.toUpperCase()
  regionCache.set(code, metadata)

  // Update country code mapping
  const regions = countryCodeCache.get(metadata.countryCode) ?? []
  if (!regions.includes(code)) {
    regions.push(code)
    countryCodeCache.set(metadata.countryCode, regions)
  }
}

/**
 * Preloads metadata for multiple regions.
 *
 * @param regionCodes - Array of region codes to preload
 * @returns Map of region code to metadata (undefined for failed loads)
 */
export async function preloadRegions(
  regionCodes: string[]
): Promise<Map<string, RegionMetadata | undefined>> {
  const results = await Promise.all(
    regionCodes.map(async (code) => {
      const metadata = await loadRegionMetadata(code)
      return [code.toUpperCase(), metadata] as const
    })
  )
  return new Map(results)
}
