/**
 * North America countries metadata bundle.
 * Includes: United States (US), Canada (CA), Mexico (MX)
 */

import US from "../countries/US.js"
import CA from "../countries/CA.js"
import MX from "../countries/MX.js"
import type { RegionMetadata } from "../types.js"

export const regions: RegionMetadata[] = [US, CA, MX]

export const regionCodes = ["US", "CA", "MX"] as const

export default regions
