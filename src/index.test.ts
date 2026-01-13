import { describe, it, expect, beforeEach } from "vitest"
import {
  parse,
  validate,
  format,
  getType,
  isValidNumber,
  isMobile,
  isLandline,
  PhoneNumberType,
  PhoneNumberFormat,
  clearMetadataCache,
  registerMetadata
} from "./index.js"

// Import metadata directly for tests
import DE from "./metadata/countries/DE.js"

describe("ts-phonenumber", () => {
  beforeEach(() => {
    clearMetadataCache()
    // Register DE metadata for tests
    registerMetadata(DE)
  })

  describe("parse", () => {
    it("should parse E.164 format with loaded metadata", async () => {
      const result = await parse("+491701234567")
      expect(result.isValid).toBe(true)
      expect(result.countryCode).toBe(49)
      expect(result.nationalNumber).toBe("1701234567")
      expect(result.regionCode).toBe("DE")
      expect(result.type).toBe(PhoneNumberType.MOBILE)
    })

    it("should parse national format with region hint", async () => {
      const result = await parse("01701234567", { defaultRegion: "DE" })
      expect(result.isValid).toBe(true)
      expect(result.countryCode).toBe(49)
      expect(result.nationalNumber).toBe("1701234567")
      expect(result.type).toBe(PhoneNumberType.MOBILE)
    })

    it("should return invalid for empty input", async () => {
      const result = await parse("")
      expect(result.isValid).toBe(false)
      expect(result.type).toBe(PhoneNumberType.INVALID)
    })

    it("should return invalid for national format without region", async () => {
      const result = await parse("01701234567")
      expect(result.isValid).toBe(false)
      expect(result.type).toBe(PhoneNumberType.INVALID)
    })

    it("should handle tel: URI format", async () => {
      const result = await parse("tel:+491701234567")
      expect(result.isValid).toBe(true)
      expect(result.countryCode).toBe(49)
    })

    it("should strip formatting characters", async () => {
      const result = await parse("+49 170 123 4567")
      expect(result.isValid).toBe(true)
      expect(result.nationalNumber).toBe("1701234567")
    })
  })

  describe("validate", () => {
    it("should validate a valid mobile number", async () => {
      const result = await validate("+491701234567")
      expect(result.isValid).toBe(true)
      expect(result.type).toBe(PhoneNumberType.MOBILE)
    })

    it("should return invalid for bad input", async () => {
      const result = await validate("not a number")
      expect(result.isValid).toBe(false)
      expect(result.type).toBe(PhoneNumberType.INVALID)
    })
  })

  describe("isValidNumber", () => {
    it("should return true for valid numbers", async () => {
      const result = await isValidNumber("+491701234567")
      expect(result).toBe(true)
    })

    it("should return false for invalid numbers", async () => {
      const result = await isValidNumber("invalid")
      expect(result).toBe(false)
    })
  })

  describe("format", () => {
    it("should format to E.164", async () => {
      const result = await format("+49 170 1234567", PhoneNumberFormat.E164)
      expect(result).toBe("+491701234567")
    })

    it("should format to international", async () => {
      const result = await format("+491701234567", PhoneNumberFormat.INTERNATIONAL)
      expect(result).toContain("+49")
    })

    it("should format to national", async () => {
      const result = await format("+491701234567", PhoneNumberFormat.NATIONAL)
      expect(result).toContain("0")
    })

    it("should format to RFC3966", async () => {
      const result = await format("+491701234567", PhoneNumberFormat.RFC3966)
      expect(result).toContain("tel:+49")
    })

    it("should return empty string for invalid numbers", async () => {
      const result = await format("invalid", PhoneNumberFormat.E164)
      expect(result).toBe("")
    })
  })

  describe("getType", () => {
    it("should return MOBILE for mobile numbers", async () => {
      const result = await getType("+491701234567")
      expect(result).toBe(PhoneNumberType.MOBILE)
    })

    it("should return LANDLINE for fixed line numbers", async () => {
      const result = await getType("+493012345678")
      expect(result).toBe(PhoneNumberType.LANDLINE)
    })

    it("should return INVALID for invalid input", async () => {
      const result = await getType("invalid")
      expect(result).toBe(PhoneNumberType.INVALID)
    })
  })

  describe("isMobile", () => {
    it("should return true for mobile numbers", async () => {
      const result = await isMobile("+491701234567")
      expect(result).toBe(true)
    })

    it("should return false for landline numbers", async () => {
      const result = await isMobile("+493012345678")
      expect(result).toBe(false)
    })
  })

  describe("isLandline", () => {
    it("should return true for landline numbers", async () => {
      const result = await isLandline("+493012345678")
      expect(result).toBe(true)
    })

    it("should return false for mobile numbers", async () => {
      const result = await isLandline("+491701234567")
      expect(result).toBe(false)
    })
  })

  describe("PhoneNumberType enum", () => {
    it("should have correct values", () => {
      expect(PhoneNumberType.MOBILE).toBe("MOBILE")
      expect(PhoneNumberType.LANDLINE).toBe("LANDLINE")
      expect(PhoneNumberType.VOIP).toBe("VOIP")
      expect(PhoneNumberType.INVALID).toBe("INVALID")
    })
  })

  describe("PhoneNumberFormat enum", () => {
    it("should have correct values", () => {
      expect(PhoneNumberFormat.E164).toBe("E164")
      expect(PhoneNumberFormat.INTERNATIONAL).toBe("INTERNATIONAL")
      expect(PhoneNumberFormat.NATIONAL).toBe("NATIONAL")
      expect(PhoneNumberFormat.RFC3966).toBe("RFC3966")
    })
  })
})
