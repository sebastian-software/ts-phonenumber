/**
 * Metadata bundle for DACH region (Germany, Austria, Switzerland)
 */

import type { MetadataBundle } from "../types.js"
import DE from "../countries/DE.js"
import AT from "../countries/AT.js"
import CH from "../countries/CH.js"

const bundle: MetadataBundle = {
  regions: {
    DE,
    AT,
    CH
  },
  countryCodeToRegions: {
    49: ["DE"],
    43: ["AT"],
    41: ["CH"]
  }
}

export default bundle
