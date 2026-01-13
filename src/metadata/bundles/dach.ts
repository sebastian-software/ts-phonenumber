/**
 * DACH countries metadata bundle.
 * Includes: Germany (DE), Austria (AT), Switzerland (CH)
 */

import DE from "../countries/DE.js"
import AT from "../countries/AT.js"
import CH from "../countries/CH.js"
import type { RegionMetadata } from "../types.js"

export const regions: RegionMetadata[] = [DE, AT, CH]

export const regionCodes = ["DE", "AT", "CH"] as const

export default regions
