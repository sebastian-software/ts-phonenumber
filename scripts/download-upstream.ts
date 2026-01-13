#!/usr/bin/env npx tsx

/**
 * Downloads upstream files from google/libphonenumber repository.
 * Run with: npx tsx scripts/download-upstream.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs"
import { dirname, join } from "node:path"

const UPSTREAM_VERSION = "v9.0.21"
const BASE_URL = `https://raw.githubusercontent.com/google/libphonenumber/${UPSTREAM_VERSION}`

const FILES_TO_DOWNLOAD = [
  // Metadata
  "resources/PhoneNumberMetadata.xml",
  "javascript/i18n/phonenumbers/metadata.js",
  "javascript/i18n/phonenumbers/metadatalite.js",
  "javascript/i18n/phonenumbers/metadatafortesting.js",
  // Core implementation (for reference)
  "javascript/i18n/phonenumbers/phonenumberutil.js",
  "javascript/i18n/phonenumbers/phonemetadata.pb.js",
  "javascript/i18n/phonenumbers/phonenumber.pb.js",
  // Tests
  "javascript/i18n/phonenumbers/phonenumberutil_test.js",
  "javascript/i18n/phonenumbers/asyoutypeformatter_test.js",
  "javascript/i18n/phonenumbers/regioncodefortesting.js"
]

const UPSTREAM_DIR = join(import.meta.dirname ?? ".", "..", "upstream")

async function downloadFile(relativePath: string): Promise<void> {
  const url = `${BASE_URL}/${relativePath}`
  const outputPath = join(UPSTREAM_DIR, relativePath)

  console.log(`Downloading: ${relativePath}`)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP ${String(response.status)}: ${response.statusText}`)
    }

    const content = await response.text()

    // Ensure directory exists
    const dir = dirname(outputPath)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }

    writeFileSync(outputPath, content, "utf-8")
    console.log(`  ✓ Saved to: ${outputPath}`)
  } catch (error) {
    console.error(`  ✗ Failed: ${error instanceof Error ? error.message : "Unknown error"}`)
    throw error
  }
}

async function main(): Promise<void> {
  console.log(`\nDownloading libphonenumber ${UPSTREAM_VERSION} files...\n`)

  // Ensure upstream directory exists
  if (!existsSync(UPSTREAM_DIR)) {
    mkdirSync(UPSTREAM_DIR, { recursive: true })
  }

  let failed = 0

  for (const file of FILES_TO_DOWNLOAD) {
    try {
      await downloadFile(file)
    } catch {
      failed++
    }
  }

  console.log(`\nDownload complete.`)
  if (failed > 0) {
    console.log(`${String(failed)} file(s) failed to download.`)
    process.exit(1)
  }
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
