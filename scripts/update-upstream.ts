#!/usr/bin/env npx tsx

/**
 * Main script to update from upstream libphonenumber.
 *
 * This script orchestrates the update workflow:
 * 1. Checks for new versions (optional)
 * 2. Downloads upstream files
 * 3. Converts metadata to TypeScript
 * 4. Generates test fixtures (does not overwrite existing tests)
 * 5. Runs tests to verify nothing is broken
 *
 * Usage:
 *   pnpm upstream:update                    # Update to current configured version
 *   pnpm upstream:update --check            # Check for new versions only
 *   pnpm upstream:update --version v9.1.0   # Update to specific version
 */

import { execSync, spawnSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const ROOT_DIR = join(import.meta.dirname ?? ".", "..")
const VERSION_FILE = join(ROOT_DIR, "upstream", ".version")
const DOWNLOAD_SCRIPT = join(ROOT_DIR, "scripts", "download-upstream.ts")

interface GitHubRelease {
  tag_name: string
  published_at: string
  html_url: string
}

/**
 * Get the currently configured upstream version
 */
function getCurrentVersion(): string {
  const downloadScript = readFileSync(DOWNLOAD_SCRIPT, "utf-8")
  const match = downloadScript.match(/UPSTREAM_VERSION\s*=\s*"([^"]+)"/)
  return match?.[1] ?? "unknown"
}

/**
 * Get the last downloaded version
 */
function getDownloadedVersion(): string | null {
  if (existsSync(VERSION_FILE)) {
    return readFileSync(VERSION_FILE, "utf-8").trim()
  }
  return null
}

/**
 * Save the downloaded version
 */
function saveDownloadedVersion(version: string): void {
  writeFileSync(VERSION_FILE, version + "\n", "utf-8")
}

/**
 * Check for latest release on GitHub
 */
async function checkLatestVersion(): Promise<GitHubRelease | null> {
  console.log("Checking for latest libphonenumber release...\n")

  try {
    const response = await fetch(
      "https://api.github.com/repos/google/libphonenumber/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "ts-phonenumber-updater"
        }
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    return (await response.json()) as GitHubRelease
  } catch (error) {
    console.error("Failed to check latest version:", error instanceof Error ? error.message : error)
    return null
  }
}

/**
 * Update the version in download-upstream.ts
 */
function updateVersionInScript(newVersion: string): void {
  const content = readFileSync(DOWNLOAD_SCRIPT, "utf-8")
  const updated = content.replace(
    /UPSTREAM_VERSION\s*=\s*"[^"]+"/,
    `UPSTREAM_VERSION = "${newVersion}"`
  )
  writeFileSync(DOWNLOAD_SCRIPT, updated, "utf-8")
}

/**
 * Run a script and return success status
 */
function runScript(scriptPath: string, description: string): boolean {
  console.log(`\n${"=".repeat(60)}`)
  console.log(`Running: ${description}`)
  console.log("=".repeat(60) + "\n")

  const result = spawnSync("npx", ["tsx", scriptPath], {
    stdio: "inherit",
    cwd: ROOT_DIR
  })

  return result.status === 0
}

/**
 * Run tests
 */
function runTests(): boolean {
  console.log(`\n${"=".repeat(60)}`)
  console.log("Running tests to verify update...")
  console.log("=".repeat(60) + "\n")

  const result = spawnSync("pnpm", ["test"], {
    stdio: "inherit",
    cwd: ROOT_DIR
  })

  return result.status === 0
}

/**
 * Run linting
 */
function runLint(): boolean {
  console.log(`\n${"=".repeat(60)}`)
  console.log("Running lint to check generated code...")
  console.log("=".repeat(60) + "\n")

  const result = spawnSync("pnpm", ["lint"], {
    stdio: "inherit",
    cwd: ROOT_DIR
  })

  return result.status === 0
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const checkOnly = args.includes("--check")
  const versionArg = args.find((a) => a.startsWith("--version="))
  const specifiedVersion = versionArg?.split("=")[1]

  console.log("\n" + "=".repeat(60))
  console.log("ts-phonenumber Upstream Update Tool")
  console.log("=".repeat(60) + "\n")

  const currentVersion = getCurrentVersion()
  const downloadedVersion = getDownloadedVersion()

  console.log(`Configured version:  ${currentVersion}`)
  console.log(`Downloaded version:  ${downloadedVersion ?? "(none)"}`)

  // Check for latest version
  const latest = await checkLatestVersion()
  if (latest) {
    console.log(`Latest release:      ${latest.tag_name}`)
    console.log(`Released:            ${new Date(latest.published_at).toLocaleDateString()}`)
    console.log(`URL:                 ${latest.html_url}`)

    if (latest.tag_name !== currentVersion) {
      console.log(`\n>>> New version available: ${latest.tag_name} <<<`)
      console.log(`    To update, run: pnpm upstream:update --version=${latest.tag_name}`)
    }
  }

  if (checkOnly) {
    console.log("\n(Check only mode - no changes made)")
    return
  }

  // Handle version update
  const targetVersion = specifiedVersion ?? currentVersion
  if (specifiedVersion && specifiedVersion !== currentVersion) {
    console.log(`\nUpdating to version ${specifiedVersion}...`)
    updateVersionInScript(specifiedVersion)
  }

  // Step 1: Download upstream files
  if (!runScript(join(ROOT_DIR, "scripts", "download-upstream.ts"), "Downloading upstream files")) {
    console.error("\nFailed to download upstream files")
    process.exit(1)
  }

  // Step 2: Convert metadata
  if (
    !runScript(
      join(ROOT_DIR, "scripts", "convert-metadata.ts"),
      "Converting metadata to TypeScript"
    )
  ) {
    console.error("\nFailed to convert metadata")
    process.exit(1)
  }

  // Step 3: Run lint to check generated code
  if (!runLint()) {
    console.warn("\nLint warnings in generated code (continuing anyway)")
  }

  // Step 4: Run tests
  if (!runTests()) {
    console.error("\nTests failed after update!")
    console.error("Please review the changes and fix any issues.")
    process.exit(1)
  }

  // Save version
  saveDownloadedVersion(targetVersion)

  console.log("\n" + "=".repeat(60))
  console.log("Update complete!")
  console.log("=".repeat(60))
  console.log(`\nSuccessfully updated to libphonenumber ${targetVersion}`)
  console.log("\nNext steps:")
  console.log("  1. Review any test changes or failures")
  console.log("  2. Run the full test suite: pnpm test")
  console.log("  3. Check for any API changes in the changelog")
  console.log("  4. Update CHANGELOG.md with the upstream version bump")
  console.log("")
}

main().catch((error: unknown) => {
  console.error("Fatal error:", error)
  process.exit(1)
})
