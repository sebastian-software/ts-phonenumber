/**
 * G7 countries metadata bundle.
 * Includes: Canada (CA), France (FR), Germany (DE), Italy (IT),
 * Japan (JP), United Kingdom (GB), United States (US)
 */

import CA from "../countries/CA.js"
import FR from "../countries/FR.js"
import DE from "../countries/DE.js"
import IT from "../countries/IT.js"
import JP from "../countries/JP.js"
import GB from "../countries/GB.js"
import US from "../countries/US.js"
import type { RegionMetadata } from "../types.js"

export const regions: RegionMetadata[] = [CA, FR, DE, IT, JP, GB, US]

export const regionCodes = ["CA", "FR", "DE", "IT", "JP", "GB", "US"] as const

export default regions
