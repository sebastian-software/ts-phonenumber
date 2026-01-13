/**
 * Metadata bundles for common country groupings.
 *
 * These bundles provide pre-packaged sets of region metadata for common use cases.
 * Import a bundle to get metadata for all countries in that group.
 *
 * @example
 * ```ts
 * import dach from "ts-phonenumber/metadata/bundles/dach";
 * import { registerMetadata } from "ts-phonenumber";
 *
 * // Register all DACH countries
 * for (const region of dach) {
 *   registerMetadata(region);
 * }
 * ```
 */

// Export individual bundles
export { default as dach, regionCodes as dachCodes } from "./dach.js"
export { default as eu, regionCodes as euCodes } from "./eu.js"
export { default as g7, regionCodes as g7Codes } from "./g7.js"
export { default as g20, regionCodes as g20Codes } from "./g20.js"
export { default as northAmerica, regionCodes as northAmericaCodes } from "./north-america.js"

// Bundle registry for dynamic loading
export const bundles = {
  dach: () => import("./dach.js"),
  eu: () => import("./eu.js"),
  g7: () => import("./g7.js"),
  g20: () => import("./g20.js"),
  "north-america": () => import("./north-america.js")
} as const

export type BundleName = keyof typeof bundles
