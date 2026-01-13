/**
 * Benchmark comparing ts-phonenumber with other phone number libraries.
 *
 * Libraries compared:
 * - ts-phonenumber (this library)
 * - awesome-phonenumber
 * - google-libphonenumber
 * - libphonenumber-js
 *
 * Run: pnpm benchmark
 */

import { Bench } from "tinybench"

// Import libraries
import { parsePhoneNumber as parseAwesome } from "awesome-phonenumber"
import googleLibphonenumber from "google-libphonenumber"
const { PhoneNumberUtil, PhoneNumberFormat: GoogleFormat } = googleLibphonenumber
import {
  parsePhoneNumber as parseLibphonenumberJs,
  isValidPhoneNumber as isValidLibphonenumberJs
} from "libphonenumber-js"

// Import our library
import { parse, parseSync, format, formatSync, validate, validateSync } from "../src/index.js"
import { registerMetadata, clearMetadataCache } from "../src/metadata/loader.js"

// Import metadata for our library
import DE from "../src/metadata/countries/DE.js"
import US from "../src/metadata/countries/US.js"
import GB from "../src/metadata/countries/GB.js"
import FR from "../src/metadata/countries/FR.js"
import JP from "../src/metadata/countries/JP.js"

// Test phone numbers from different regions
const TEST_NUMBERS = {
  DE_MOBILE: "+49 170 1234567",
  DE_LANDLINE: "+49 30 12345678",
  US_MOBILE: "+1 650 253 0000",
  US_LANDLINE: "+1 212 555 1234",
  GB_MOBILE: "+44 7911 123456",
  GB_LANDLINE: "+44 20 7946 0958",
  FR_MOBILE: "+33 6 12 34 56 78",
  JP_MOBILE: "+81 90 1234 5678",
  // National format (requires region hint)
  DE_NATIONAL: "0170 1234567",
  US_NATIONAL: "(650) 253-0000"
}

// Google libphonenumber instance
const phoneUtil = PhoneNumberUtil.getInstance()

// Pre-register metadata for our library
function setupOurLibrary() {
  clearMetadataCache()
  registerMetadata(DE)
  registerMetadata(US)
  registerMetadata(GB)
  registerMetadata(FR)
  registerMetadata(JP)
}

// Formatting helpers
function formatNumber(num: number): string {
  return num.toLocaleString("en-US", { maximumFractionDigits: 2 })
}

function formatOpsPerSec(opsPerSec: number): string {
  if (opsPerSec >= 1_000_000) {
    return `${(opsPerSec / 1_000_000).toFixed(2)}M`
  } else if (opsPerSec >= 1_000) {
    return `${(opsPerSec / 1_000).toFixed(2)}K`
  }
  return opsPerSec.toFixed(2)
}

async function runBenchmarks() {
  console.log("=".repeat(70))
  console.log("Phone Number Library Benchmark")
  console.log("=".repeat(70))
  console.log()
  console.log("Libraries:")
  console.log("  - ts-phonenumber (this library)")
  console.log("  - awesome-phonenumber")
  console.log("  - google-libphonenumber")
  console.log("  - libphonenumber-js")
  console.log()
  console.log("Test numbers:", Object.keys(TEST_NUMBERS).length)
  console.log()

  // Setup
  setupOurLibrary()

  // ============================================
  // BENCHMARK 1: Parse E.164 numbers
  // ============================================
  console.log("-".repeat(70))
  console.log("BENCHMARK 1: Parse E.164 format (+49 170 1234567)")
  console.log("-".repeat(70))

  const parseBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  parseBench
    .add("ts-phonenumber (async)", async () => {
      await parse(TEST_NUMBERS.DE_MOBILE)
    })
    .add("ts-phonenumber (sync)", () => {
      parseSync(TEST_NUMBERS.DE_MOBILE)
    })
    .add("awesome-phonenumber", () => {
      parseAwesome(TEST_NUMBERS.DE_MOBILE)
    })
    .add("google-libphonenumber", () => {
      phoneUtil.parse(TEST_NUMBERS.DE_MOBILE)
    })
    .add("libphonenumber-js", () => {
      parseLibphonenumberJs(TEST_NUMBERS.DE_MOBILE)
    })

  await parseBench.run()
  printResults(parseBench)

  // ============================================
  // BENCHMARK 2: Parse national format with region
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 2: Parse national format (0170 1234567, region: DE)")
  console.log("-".repeat(70))

  const parseNationalBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  parseNationalBench
    .add("ts-phonenumber (async)", async () => {
      await parse(TEST_NUMBERS.DE_NATIONAL, { defaultRegion: "DE" })
    })
    .add("ts-phonenumber (sync)", () => {
      parseSync(TEST_NUMBERS.DE_NATIONAL, { defaultRegion: "DE" })
    })
    .add("awesome-phonenumber", () => {
      parseAwesome(TEST_NUMBERS.DE_NATIONAL, { regionCode: "DE" })
    })
    .add("google-libphonenumber", () => {
      phoneUtil.parse(TEST_NUMBERS.DE_NATIONAL, "DE")
    })
    .add("libphonenumber-js", () => {
      parseLibphonenumberJs(TEST_NUMBERS.DE_NATIONAL, "DE")
    })

  await parseNationalBench.run()
  printResults(parseNationalBench)

  // ============================================
  // BENCHMARK 3: Validate numbers
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 3: Validate phone number")
  console.log("-".repeat(70))

  const validateBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  // Pre-parse for google-libphonenumber
  const googleParsed = phoneUtil.parse(TEST_NUMBERS.DE_MOBILE)

  // Pre-parse for awesome-phonenumber
  const awesomeForValidate = parseAwesome(TEST_NUMBERS.DE_MOBILE)

  validateBench
    .add("ts-phonenumber (async)", async () => {
      await validate(TEST_NUMBERS.DE_MOBILE)
    })
    .add("ts-phonenumber (sync)", () => {
      validateSync(TEST_NUMBERS.DE_MOBILE)
    })
    .add("awesome-phonenumber", () => {
      awesomeForValidate.isValid()
    })
    .add("google-libphonenumber", () => {
      phoneUtil.isValidNumber(googleParsed)
    })
    .add("libphonenumber-js", () => {
      isValidLibphonenumberJs(TEST_NUMBERS.DE_MOBILE)
    })

  await validateBench.run()
  printResults(validateBench)

  // ============================================
  // BENCHMARK 4: Format to E.164 (pre-parsed)
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 4: Format to E.164 (pre-parsed objects)")
  console.log("-".repeat(70))

  const formatBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  // Pre-parse for ALL libraries (fair comparison)
  const tsParsed = parseSync(TEST_NUMBERS.DE_MOBILE)
  const awesomeParsed = parseAwesome(TEST_NUMBERS.DE_MOBILE)
  const libphonenumberJsParsed = parseLibphonenumberJs(TEST_NUMBERS.DE_MOBILE)

  formatBench
    .add("ts-phonenumber (sync)", () => {
      formatSync(tsParsed, "e164")
    })
    .add("awesome-phonenumber", () => {
      awesomeParsed.number?.e164
    })
    .add("google-libphonenumber", () => {
      phoneUtil.format(googleParsed, GoogleFormat.E164)
    })
    .add("libphonenumber-js", () => {
      libphonenumberJsParsed?.format("E.164")
    })

  await formatBench.run()
  printResults(formatBench)

  // ============================================
  // BENCHMARK 5: Format to International (pre-parsed)
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 5: Format to International (pre-parsed objects)")
  console.log("-".repeat(70))

  const formatIntlBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  formatIntlBench
    .add("ts-phonenumber (sync)", () => {
      formatSync(tsParsed, "international")
    })
    .add("awesome-phonenumber", () => {
      awesomeParsed.number?.international
    })
    .add("google-libphonenumber", () => {
      phoneUtil.format(googleParsed, GoogleFormat.INTERNATIONAL)
    })
    .add("libphonenumber-js", () => {
      libphonenumberJsParsed?.formatInternational()
    })

  await formatIntlBench.run()
  printResults(formatIntlBench)

  // ============================================
  // BENCHMARK 6: Full pipeline (parse + validate + format)
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 6: Full pipeline (parse → validate → format E.164)")
  console.log("-".repeat(70))

  const fullPipelineBench = new Bench({
    warmupIterations: 100,
    iterations: 1000
  })

  fullPipelineBench
    .add("ts-phonenumber (async)", async () => {
      const parsed = await parse(TEST_NUMBERS.DE_MOBILE)
      if (parsed.isValid) {
        await format(parsed, "e164")
      }
    })
    .add("ts-phonenumber (sync)", () => {
      const parsed = parseSync(TEST_NUMBERS.DE_MOBILE)
      if (parsed.isValid) {
        formatSync(parsed, "e164")
      }
    })
    .add("awesome-phonenumber", () => {
      const pn = parseAwesome(TEST_NUMBERS.DE_MOBILE)
      if (pn.isValid()) {
        pn.number?.e164
      }
    })
    .add("google-libphonenumber", () => {
      const parsed = phoneUtil.parse(TEST_NUMBERS.DE_MOBILE)
      if (phoneUtil.isValidNumber(parsed)) {
        phoneUtil.format(parsed, GoogleFormat.E164)
      }
    })
    .add("libphonenumber-js", () => {
      const parsed = parseLibphonenumberJs(TEST_NUMBERS.DE_MOBILE)
      if (parsed?.isValid()) {
        parsed.format("E.164")
      }
    })

  await fullPipelineBench.run()
  printResults(fullPipelineBench)

  // ============================================
  // BENCHMARK 7: Batch processing (10 numbers)
  // ============================================
  console.log()
  console.log("-".repeat(70))
  console.log("BENCHMARK 7: Batch processing (10 different numbers)")
  console.log("-".repeat(70))

  const numbers = Object.values(TEST_NUMBERS)
  const batchBench = new Bench({
    warmupIterations: 50,
    iterations: 500
  })

  batchBench
    .add("ts-phonenumber (async)", async () => {
      for (const num of numbers) {
        await parse(num.startsWith("+") ? num : num, {
          defaultRegion: num.startsWith("+") ? undefined : "DE"
        })
      }
    })
    .add("ts-phonenumber (sync)", () => {
      for (const num of numbers) {
        parseSync(num.startsWith("+") ? num : num, {
          defaultRegion: num.startsWith("+") ? undefined : "DE"
        })
      }
    })
    .add("awesome-phonenumber", () => {
      for (const num of numbers) {
        parseAwesome(num, { regionCode: num.startsWith("+") ? undefined : "DE" })
      }
    })
    .add("google-libphonenumber", () => {
      for (const num of numbers) {
        phoneUtil.parse(num, num.startsWith("+") ? undefined : "DE")
      }
    })
    .add("libphonenumber-js", () => {
      for (const num of numbers) {
        parseLibphonenumberJs(num, num.startsWith("+") ? undefined : "DE")
      }
    })

  await batchBench.run()
  printResults(batchBench)

  // Summary
  console.log()
  console.log("=".repeat(70))
  console.log("SUMMARY")
  console.log("=".repeat(70))
  console.log()
  console.log("ts-phonenumber offers two APIs:")
  console.log()
  console.log("  ASYNC API (parse, format, validate):")
  console.log("    - Loads metadata on-demand via dynamic import()")
  console.log("    - Enables code splitting for smaller browser bundles")
  console.log("    - Best for: web apps with many regions, lazy loading")
  console.log()
  console.log("  SYNC API (parseSync, formatSync, validateSync):")
  console.log("    - Requires pre-loaded metadata via registerMetadata()")
  console.log("    - No async overhead - maximum performance")
  console.log("    - Best for: servers, CLIs, performance-critical code")
  console.log()
}

function printResults(bench: Bench) {
  const tasks = bench.tasks.filter(
    (t) => t.result && t.result.throughput && t.result.throughput.mean > 0
  )
  const sorted = [...tasks].sort((a, b) => {
    const aHz = a.result?.throughput?.mean ?? 0
    const bHz = b.result?.throughput?.mean ?? 0
    return bHz - aHz
  })

  if (sorted.length === 0) {
    console.log("No results available")
    return
  }

  const fastest = sorted[0]
  const fastestHz = fastest?.result?.throughput?.mean ?? 1

  console.log()
  console.log(
    "Library".padEnd(25) +
      "ops/sec".padStart(15) +
      "avg time".padStart(15) +
      "relative".padStart(12)
  )
  console.log("-".repeat(67))

  for (const task of sorted) {
    const result = task.result
    if (!result || !result.throughput?.mean) continue

    const name = task.name.padEnd(25)
    const opsPerSec = formatOpsPerSec(result.throughput.mean).padStart(15)
    const avgTime = `${(result.latency.mean * 1000).toFixed(3)}ms`.padStart(15)
    const relative =
      task === fastest
        ? "fastest".padStart(12)
        : `${(fastestHz / result.throughput.mean).toFixed(2)}x slower`.padStart(12)

    console.log(name + opsPerSec + avgTime + relative)
  }
}

// Run benchmarks
runBenchmarks().catch(console.error)
