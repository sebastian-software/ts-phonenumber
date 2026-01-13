/**
 * Bundle exports for commonly used region groupings.
 *
 * Bundles contain pre-compiled metadata for multiple regions in a single file,
 * reducing HTTP requests when loading multiple countries.
 *
 * @example
 * ```typescript
 * import DACH from "ts-phonenumber/metadata/bundles/DACH"
 * import { registerBundle } from "ts-phonenumber"
 *
 * // Register entire bundle at once
 * registerBundle(DACH)
 * ```
 */

/**
 * Available bundle names for dynamic loading.
 */
export type BundleName =
  // Regional European
  | "DACH"
  | "NORDICS"
  | "BENELUX"
  | "BRITISH_ISLES"
  // Large regional
  | "EU"
  | "EUROPE"
  // Americas
  | "NANP"
  | "LATAM"
  // Asia-Pacific
  | "APAC"
  | "EAST_ASIA"
  | "SOUTHEAST_ASIA"
  | "ANZ"
  // Middle East & Africa
  | "MENA"
  | "GCC"
  // Economic groupings
  | "G7"
  | "G20"
  | "BRICS"
  // Practical
  | "COMMON"
  | "MINIMAL"

/**
 * Bundle metadata for documentation and selection.
 */
export const bundles: Record<BundleName, { description: string; regions: string[] }> = {
  // Regional European
  DACH: {
    description: "German-speaking countries (Germany, Austria, Switzerland)",
    regions: ["DE", "AT", "CH"]
  },
  NORDICS: {
    description: "Nordic countries (Denmark, Finland, Iceland, Norway, Sweden)",
    regions: ["DK", "FI", "IS", "NO", "SE"]
  },
  BENELUX: {
    description: "Benelux countries (Belgium, Netherlands, Luxembourg)",
    regions: ["BE", "NL", "LU"]
  },
  BRITISH_ISLES: {
    description: "British Isles (UK, Ireland, Channel Islands, Isle of Man)",
    regions: ["GB", "IE", "GG", "JE", "IM"]
  },

  // Large regional
  EU: {
    description: "European Union member states (27 countries)",
    regions: [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE"
    ]
  },
  EUROPE: {
    description: "All European countries including non-EU",
    regions: [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
      "GB",
      "CH",
      "NO",
      "IS",
      "LI",
      "AD",
      "MC",
      "SM",
      "VA",
      "AL",
      "BA",
      "ME",
      "MK",
      "RS",
      "XK",
      "MD",
      "UA",
      "BY"
    ]
  },

  // Americas
  NANP: {
    description: "North American Numbering Plan (US, Canada, Caribbean)",
    regions: [
      "US",
      "CA",
      "PR",
      "VI",
      "GU",
      "AS",
      "MP",
      "AG",
      "AI",
      "BB",
      "BM",
      "BS",
      "DM",
      "DO",
      "GD",
      "JM",
      "KN",
      "KY",
      "LC",
      "MS",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG"
    ]
  },
  LATAM: {
    description: "Latin America (Central & South America)",
    regions: [
      "MX",
      "GT",
      "BZ",
      "HN",
      "SV",
      "NI",
      "CR",
      "PA",
      "CO",
      "VE",
      "EC",
      "PE",
      "BO",
      "BR",
      "PY",
      "UY",
      "AR",
      "CL",
      "CU",
      "HT",
      "GY",
      "SR",
      "GF"
    ]
  },

  // Asia-Pacific
  APAC: {
    description: "Asia-Pacific major markets",
    regions: [
      "JP",
      "KR",
      "CN",
      "HK",
      "TW",
      "MO",
      "AU",
      "NZ",
      "SG",
      "MY",
      "TH",
      "ID",
      "PH",
      "VN",
      "IN",
      "PK",
      "BD",
      "LK"
    ]
  },
  EAST_ASIA: {
    description: "East Asian markets (China, Japan, Korea, Taiwan)",
    regions: ["CN", "JP", "KR", "TW", "HK", "MO"]
  },
  SOUTHEAST_ASIA: {
    description: "Southeast Asian markets",
    regions: ["SG", "MY", "TH", "ID", "PH", "VN", "MM", "KH", "LA", "BN"]
  },
  ANZ: {
    description: "Australia and New Zealand",
    regions: ["AU", "NZ"]
  },

  // Middle East & Africa
  MENA: {
    description: "Middle East and North Africa",
    regions: [
      "AE",
      "SA",
      "QA",
      "KW",
      "BH",
      "OM",
      "JO",
      "LB",
      "IL",
      "PS",
      "EG",
      "MA",
      "DZ",
      "TN",
      "LY",
      "IQ",
      "SY",
      "YE"
    ]
  },
  GCC: {
    description: "Gulf Cooperation Council",
    regions: ["AE", "SA", "QA", "KW", "BH", "OM"]
  },

  // Economic groupings
  G7: {
    description: "Group of Seven major economies",
    regions: ["US", "GB", "DE", "FR", "JP", "IT", "CA"]
  },
  G20: {
    description: "Group of Twenty major economies",
    regions: [
      "US",
      "GB",
      "DE",
      "FR",
      "JP",
      "IT",
      "CA",
      "CN",
      "IN",
      "BR",
      "RU",
      "AU",
      "KR",
      "MX",
      "ID",
      "SA",
      "TR",
      "AR",
      "ZA"
    ]
  },
  BRICS: {
    description: "BRICS emerging economies",
    regions: ["BR", "RU", "IN", "CN", "ZA"]
  },

  // Practical
  COMMON: {
    description: "Most commonly used countries worldwide (top 30 by usage)",
    regions: [
      "US",
      "GB",
      "DE",
      "FR",
      "IT",
      "ES",
      "NL",
      "BE",
      "AT",
      "CH",
      "CA",
      "AU",
      "JP",
      "KR",
      "CN",
      "IN",
      "BR",
      "MX",
      "RU",
      "PL",
      "SE",
      "NO",
      "DK",
      "FI",
      "IE",
      "PT",
      "GR",
      "CZ",
      "RO",
      "HU"
    ]
  },
  MINIMAL: {
    description: "Minimal set for basic international support",
    regions: ["US", "GB", "DE", "FR", "ES", "IT", "CA", "AU", "JP", "CN", "IN", "BR"]
  }
}
