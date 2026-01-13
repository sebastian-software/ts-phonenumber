/**
 * ts-phonenumber CLI
 *
 * Command-line interface for validating, parsing, and formatting phone numbers.
 */

import { Command } from "commander"
import { parse } from "./parse.js"
import { validate } from "./validate.js"
import { format } from "./format.js"
import { getType } from "./getType.js"
import type { PhoneNumberFormat } from "./types.js"
import { loadRegionMetadata } from "./metadata/index.js"

const program = new Command()

program
  .name("ts-phonenumber")
  .description("Phone number validation, parsing, and formatting CLI")
  .version("0.0.0")

/**
 * Validate command
 */
program
  .command("validate")
  .description("Validate a phone number")
  .argument("<number>", "Phone number to validate")
  .option("-r, --region <code>", "Default region code (e.g., DE, US)")
  .option("--json", "Output result as JSON")
  .action(async (number: string, options: { region?: string; json?: boolean }) => {
    try {
      // Preload region metadata if specified
      if (options.region) {
        await loadRegionMetadata(options.region)
      }

      const result = await validate(number, { defaultRegion: options.region })

      if (options.json) {
        console.log(JSON.stringify(result, null, 2))
      } else {
        if (result.isValid) {
          console.log(`Valid: ${result.type}`)
        } else {
          console.log(`Invalid: ${result.error ?? "Unknown error"}`)
          process.exitCode = 1
        }
      }
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error")
      process.exitCode = 1
    }
  })

/**
 * Parse command
 */
program
  .command("parse")
  .description("Parse a phone number and show details")
  .argument("<number>", "Phone number to parse")
  .option("-r, --region <code>", "Default region code (e.g., DE, US)")
  .option("--json", "Output result as JSON")
  .action(async (number: string, options: { region?: string; json?: boolean }) => {
    try {
      // Preload region metadata if specified
      if (options.region) {
        await loadRegionMetadata(options.region)
      }

      const result = await parse(number, { defaultRegion: options.region })

      if (options.json) {
        console.log(JSON.stringify(result, null, 2))
      } else {
        if (result.isValid) {
          console.log(`Country Code: +${String(result.countryCode)}`)
          console.log(`National Number: ${result.nationalNumber}`)
          console.log(`Region: ${result.regionCode}`)
          console.log(`Type: ${result.type}`)
          console.log(`Valid: ${String(result.isValid)}`)
        } else {
          console.log("Could not parse phone number")
          console.log(`Type: invalid`)
          process.exitCode = 1
        }
      }
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error")
      process.exitCode = 1
    }
  })

/**
 * Format command
 */
program
  .command("format")
  .description("Format a phone number")
  .argument("<number>", "Phone number to format")
  .option("-r, --region <code>", "Default region code (e.g., DE, US)")
  .option("-f, --format <format>", "Output format (e164, international, national, rfc3966)", "e164")
  .action(async (number: string, options: { region?: string; format?: string }) => {
    try {
      // Preload region metadata if specified
      if (options.region) {
        await loadRegionMetadata(options.region)
      }

      // Map format string to type
      const formatMap: Record<string, PhoneNumberFormat> = {
        e164: "e164",
        international: "international",
        national: "national",
        rfc3966: "rfc3966"
      }

      const targetFormat: PhoneNumberFormat =
        formatMap[options.format?.toLowerCase() ?? "e164"] ?? "e164"

      const result = await format(number, targetFormat, { defaultRegion: options.region })

      if (result) {
        console.log(result)
      } else {
        console.error("Could not format phone number (invalid input)")
        process.exitCode = 1
      }
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error")
      process.exitCode = 1
    }
  })

/**
 * Type command
 */
program
  .command("type")
  .description("Determine the type of a phone number")
  .argument("<number>", "Phone number to classify")
  .option("-r, --region <code>", "Default region code (e.g., DE, US)")
  .action(async (number: string, options: { region?: string }) => {
    try {
      // Preload region metadata if specified
      if (options.region) {
        await loadRegionMetadata(options.region)
      }

      const result = await getType(number, { defaultRegion: options.region })
      console.log(result)

      if (result === "invalid") {
        process.exitCode = 1
      }
    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error")
      process.exitCode = 1
    }
  })

// Parse and execute
program.parse()
