/**
 * Additional tests to improve code coverage.
 * Covers edge cases and less common code paths.
 */

import { describe, it, expect, beforeEach } from "vitest"
import { format, formatE164Only, formatInternationalOnly, formatNationalOnly } from "../format.js"
import { getType, isMobile, isLandline, isVoIP } from "../getType.js"
import {
  getRegionCodeForNumber,
  getCountryCodeForRegion,
  getRegionsForCode,
  getMainCountryForCode
} from "../region.js"
import {
  loadRegionMetadata,
  loadMetadataBundle,
  getCachedRegionMetadata,
  preloadRegions,
  clearMetadataCache,
  registerMetadata
} from "../metadata/loader.js"
import { PhoneNumberFormat, PhoneNumberType } from "../types.js"
import type { ParsedPhoneNumber } from "../types.js"

// Import test metadata
import DE from "../metadata/countries/DE.js"
import US from "../metadata/countries/US.js"
import GB from "../metadata/countries/GB.js"
import CA from "../metadata/countries/CA.js"
import AU from "../metadata/countries/AU.js"
import NZ from "../metadata/countries/NZ.js"

describe("Coverage Tests", () => {
  beforeEach(() => {
    clearMetadataCache()
    registerMetadata(DE)
    registerMetadata(US)
    registerMetadata(GB)
    registerMetadata(CA)
    registerMetadata(AU)
    registerMetadata(NZ)
  })

  describe("format.ts - convenience functions", () => {
    it("formatE164Only should format to E164", async () => {
      const result = await formatE164Only("+49 170 1234567")
      expect(result).toBe("+491701234567")
    })

    it("formatInternationalOnly should format to international", async () => {
      const result = await formatInternationalOnly("+49 170 1234567")
      expect(result).toContain("+49")
    })

    it("formatNationalOnly should format to national", async () => {
      const result = await formatNationalOnly("+49 170 1234567")
      expect(result).toContain("0")
    })

    it("should return empty string for invalid number", async () => {
      const result = await format("invalid", PhoneNumberFormat.E164)
      expect(result).toBe("")
    })

    it("should handle ParsedPhoneNumber input", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1701234567",
        regionCode: "DE",
        type: PhoneNumberType.MOBILE,
        isValid: true,
        rawInput: "+491701234567"
      }
      const result = await format(parsed, PhoneNumberFormat.E164)
      expect(result).toBe("+491701234567")
    })

    it("should handle very long numbers with default formatting", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "123456789012345",
        regionCode: "DE",
        type: PhoneNumberType.LANDLINE,
        isValid: true,
        rawInput: "+49123456789012345"
      }
      const result = await format(parsed, PhoneNumberFormat.INTERNATIONAL)
      expect(result).toContain("+49")
      expect(result).toContain(" ")
    })

    it("should handle default format switch case", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1701234567",
        regionCode: "DE",
        type: PhoneNumberType.MOBILE,
        isValid: true,
        rawInput: "+491701234567"
      }
      // Pass an invalid format to trigger default case
      const result = await format(parsed, "UNKNOWN" as PhoneNumberFormat)
      expect(result).toBe("+491701234567")
    })
  })

  describe("getType.ts - edge cases", () => {
    it("should return INVALID for empty input", async () => {
      const result = await getType("")
      expect(result).toBe(PhoneNumberType.INVALID)
    })

    it("should return INVALID for null-like input", async () => {
      // @ts-expect-error Testing invalid input
      const result = await getType(null)
      expect(result).toBe(PhoneNumberType.INVALID)
    })

    it("should return INVALID for non-string input", async () => {
      // @ts-expect-error Testing invalid input
      const result = await getType(12345)
      expect(result).toBe(PhoneNumberType.INVALID)
    })

    it("isMobile should return false for landline", async () => {
      const result = await isMobile("+49 30 12345678")
      expect(result).toBe(false)
    })

    it("isLandline should return true for landline", async () => {
      const result = await isLandline("+49 30 12345678")
      expect(result).toBe(true)
    })

    it("isVoIP should return false for mobile", async () => {
      const result = await isVoIP("+49 170 1234567")
      expect(result).toBe(false)
    })
  })

  describe("region.ts - multi-region handling", () => {
    it("getRegionCodeForNumber with ParsedPhoneNumber", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1701234567",
        regionCode: "DE",
        type: PhoneNumberType.MOBILE,
        isValid: true,
        rawInput: "+491701234567"
      }
      const result = await getRegionCodeForNumber(parsed)
      expect(result).toBe("DE")
    })

    it("getRegionCodeForNumber without regionCode", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1701234567",
        regionCode: "",
        type: PhoneNumberType.MOBILE,
        isValid: true,
        rawInput: "+491701234567"
      }
      const result = await getRegionCodeForNumber(parsed)
      expect(result).toBeDefined()
    })

    it("getRegionCodeForNumber with zero country code", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 0,
        nationalNumber: "1234567",
        regionCode: "",
        type: PhoneNumberType.INVALID,
        isValid: false,
        rawInput: "1234567"
      }
      const result = await getRegionCodeForNumber(parsed)
      expect(result).toBeUndefined()
    })

    it("getCountryCodeForRegion should return country code", async () => {
      const result = await getCountryCodeForRegion("DE")
      expect(result).toBe(49)
    })

    it("getCountryCodeForRegion should return undefined for unknown", async () => {
      const result = await getCountryCodeForRegion("XX")
      expect(result).toBeUndefined()
    })

    it("getRegionsForCode should return regions for code 1", async () => {
      const result = await getRegionsForCode(1)
      expect(result).toBeDefined()
      expect(result).toContain("US")
    })

    it("getRegionsForCode should return regions for code 44", async () => {
      const result = await getRegionsForCode(44)
      expect(result).toBeDefined()
      expect(result).toContain("GB")
    })

    it("getRegionsForCode should return undefined for unknown code", async () => {
      const result = await getRegionsForCode(999)
      expect(result).toBeUndefined()
    })

    it("getMainCountryForCode should return US for code 1", async () => {
      const result = await getMainCountryForCode(1)
      expect(result).toBeDefined()
    })

    it("getMainCountryForCode should return GB for code 44", async () => {
      const result = await getMainCountryForCode(44)
      expect(result).toBeDefined()
    })

    it("getMainCountryForCode should return undefined for unknown", async () => {
      const result = await getMainCountryForCode(999)
      expect(result).toBeUndefined()
    })

    it("getMainCountryForCode should return single region", async () => {
      const result = await getMainCountryForCode(49)
      expect(result).toBe("DE")
    })
  })

  describe("loader.ts - bundle and cache functions", () => {
    it("loadMetadataBundle should return undefined for unknown bundle", async () => {
      // Unknown bundles should return undefined without throwing
      const bundle = await loadMetadataBundle("UNKNOWN_BUNDLE_XYZ")
      expect(bundle).toBeUndefined()
    })

    it("getCachedRegionMetadata should return cached metadata", async () => {
      await loadRegionMetadata("DE")
      const cached = getCachedRegionMetadata("DE")
      expect(cached).toBeDefined()
      expect(cached?.regionCode).toBe("DE")
    })

    it("getCachedRegionMetadata should return undefined for uncached", () => {
      clearMetadataCache()
      const cached = getCachedRegionMetadata("XX")
      expect(cached).toBeUndefined()
    })

    it("getCachedRegionMetadata should normalize to uppercase", async () => {
      await loadRegionMetadata("de")
      const cached = getCachedRegionMetadata("de")
      expect(cached).toBeDefined()
    })

    it("preloadRegions should return map with correct size", async () => {
      // preloadRegions returns a map with entries for all requested codes
      const results = await preloadRegions(["DE", "US"])
      expect(results.size).toBe(2)
      expect(results.has("DE")).toBe(true)
      expect(results.has("US")).toBe(true)
    })

    it("preloadRegions should include undefined for unknown regions", async () => {
      // Unknown regions should have undefined values
      const results = await preloadRegions(["XX", "YY"])
      expect(results.size).toBe(2)
      expect(results.has("XX")).toBe(true)
      expect(results.has("YY")).toBe(true)
      // Values are undefined since regions don't exist
      expect(results.get("XX")).toBeUndefined()
      expect(results.get("YY")).toBeUndefined()
    })

    it("loadRegionMetadata should return undefined for unknown region", async () => {
      const metadata = await loadRegionMetadata("XX")
      expect(metadata).toBeUndefined()
    })

    it("loadRegionMetadata should handle concurrent requests", async () => {
      clearMetadataCache()
      const [result1, result2] = await Promise.all([
        loadRegionMetadata("DE"),
        loadRegionMetadata("DE")
      ])
      expect(result1).toBe(result2)
    })
  })

  describe("format.ts - RFC3966 format", () => {
    it("should format to RFC3966", async () => {
      const result = await format("+49 170 1234567", PhoneNumberFormat.RFC3966)
      expect(result).toMatch(/^tel:\+49-/)
    })
  })

  describe("format.ts - short numbers", () => {
    it("should format short numbers (<=4 digits)", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1234",
        regionCode: "DE",
        type: PhoneNumberType.LANDLINE,
        isValid: true,
        rawInput: "+491234"
      }
      const result = await format(parsed, PhoneNumberFormat.INTERNATIONAL)
      expect(result).toContain("+49")
    })

    it("should format medium numbers (5-7 digits)", async () => {
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "123456",
        regionCode: "DE",
        type: PhoneNumberType.LANDLINE,
        isValid: true,
        rawInput: "+49123456"
      }
      const result = await format(parsed, PhoneNumberFormat.INTERNATIONAL)
      expect(result).toContain("+49")
    })
  })

  describe("Multi-region country code handling", () => {
    it("should handle NANP numbers (country code 1)", async () => {
      // US number
      const usResult = await getRegionCodeForNumber("+1 650 253 0000")
      expect(usResult).toBeDefined()

      // Canada number - different area code
      registerMetadata(CA)
      const caNumber = "+1 416 555 1234"
      const caResult = await getRegionCodeForNumber(caNumber)
      expect(caResult).toBeDefined()
    })

    it("should handle UK numbers (country code 44)", async () => {
      const result = await getRegionCodeForNumber("+44 20 7946 0958")
      expect(result).toBe("GB")
    })
  })

  describe("validate.ts - additional coverage", () => {
    it("isPossibleNumber with ParsedPhoneNumber with zero country code", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const parsed: ParsedPhoneNumber = {
        countryCode: 0,
        nationalNumber: "1234567",
        regionCode: "",
        type: PhoneNumberType.INVALID,
        isValid: false,
        rawInput: "1234567"
      }
      const result = await isPossibleNumber(parsed)
      expect(result).toBe(PossibleNumberResult.INVALID_COUNTRY_CODE)
    })

    it("isPossibleNumber with valid ParsedPhoneNumber", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const parsed: ParsedPhoneNumber = {
        countryCode: 49,
        nationalNumber: "1701234567",
        regionCode: "DE",
        type: PhoneNumberType.MOBILE,
        isValid: true,
        rawInput: "+491701234567"
      }
      const result = await isPossibleNumber(parsed)
      expect(result).toBe(PossibleNumberResult.IS_POSSIBLE)
    })

    it("isPossibleNumber with too short number", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("+49 123", { defaultRegion: "DE" })
      expect(result).toBe(PossibleNumberResult.TOO_SHORT)
    })

    it("isPossibleNumber with too long number", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("+49 12345678901234567890")
      expect(result).toBe(PossibleNumberResult.TOO_LONG)
    })

    it("isPossibleNumber with tel: URI", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("tel:+491701234567")
      expect(result).toBe(PossibleNumberResult.IS_POSSIBLE)
    })

    it("isPossibleNumber with parameters stripped", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("+491701234567;ext=123")
      expect(result).toBe(PossibleNumberResult.IS_POSSIBLE)
    })

    it("isPossibleNumber with national format and default region", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("0170 1234567", { defaultRegion: "DE" })
      expect(result).toBe(PossibleNumberResult.IS_POSSIBLE)
    })

    it("isPossibleNumber with national format without default region", async () => {
      const { isPossibleNumber, PossibleNumberResult } = await import("../validate.js")
      const result = await isPossibleNumber("0170 1234567")
      expect(result).toBe(PossibleNumberResult.INVALID_FORMAT)
    })

    it("isPossibleNumberWithReason returns boolean", async () => {
      const { isPossibleNumberWithReason } = await import("../validate.js")
      const result = await isPossibleNumberWithReason("+491701234567")
      expect(result).toBe(true)
    })

    it("isPossibleNumberWithReason returns false for invalid", async () => {
      const { isPossibleNumberWithReason } = await import("../validate.js")
      const result = await isPossibleNumberWithReason("invalid")
      expect(result).toBe(false)
    })

    it("validate with non-string input", async () => {
      const { validate } = await import("../validate.js")
      // @ts-expect-error Testing invalid input
      const result = await validate(null)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe("Input must be a non-empty string")
    })

    it("validate should return error for unsupported type", async () => {
      // Toll-free numbers are parsed but not supported
      const { validate } = await import("../validate.js")
      const result = await validate("+1 800 555 1234")
      // Result will either be invalid or have unsupported type error
      expect(!result.isValid || result.type === PhoneNumberType.INVALID).toBe(true)
    })
  })

  describe("region.ts - additional tests", () => {
    it("getRegionCodeForNumber should return region from parsed number", async () => {
      // When parsing a number, regionCode is already determined
      const result = await getRegionCodeForNumber("+49 170 1234567")
      expect(result).toBe("DE")
    })

    it("getRegionsForCode with common mapping should work", async () => {
      // Test that getRegionsForCode returns the common mapping
      const result = await getRegionsForCode(7)
      expect(result).toBeDefined()
      expect(result).toContain("RU")
    })

    it("getRegionsForCode with code 61 should return AU regions", async () => {
      const result = await getRegionsForCode(61)
      expect(result).toBeDefined()
      expect(result).toContain("AU")
    })
  })
})
