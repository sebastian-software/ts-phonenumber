# ts-phonenumber

[![CI](https://github.com/sebastian-software/ts-phonenumber/actions/workflows/ci.yml/badge.svg)](https://github.com/sebastian-software/ts-phonenumber/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/sebastian-software/ts-phonenumber/branch/main/graph/badge.svg)](https://codecov.io/gh/sebastian-software/ts-phonenumber)
[![npm version](https://img.shields.io/npm/v/ts-phonenumber.svg)](https://www.npmjs.com/package/ts-phonenumber)
[![npm downloads](https://img.shields.io/npm/dm/ts-phonenumber.svg)](https://www.npmjs.com/package/ts-phonenumber)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ts-phonenumber)](https://bundlephobia.com/package/ts-phonenumber)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/node/v/ts-phonenumber.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**The fastest phone number library for JavaScript/TypeScript.** Parse, validate, and format phone numbers with blazing speed and tiny bundles.

## Features

- **Blazing fast** — Up to 11x faster than alternatives ([see benchmarks](#benchmarks))
- **TypeScript-first** — Full type safety with comprehensive type definitions
- **Dual API** — Async for lazy loading, sync for maximum performance
- **Tiny bundles** — ~5KB core + on-demand metadata via `import()`
- **Modern runtimes** — Node.js 20+, Bun, and modern browsers
- **CLI included** — Command-line tool for validation and formatting

## Installation

```bash
npm install ts-phonenumber
# or
pnpm add ts-phonenumber
# or
yarn add ts-phonenumber
```

## Usage

### Synchronous API (Maximum Performance)

For servers, CLIs, and performance-critical code. Pre-load metadata once, then use sync functions:

```typescript
import { parseSync, validateSync, formatSync, registerMetadata } from "ts-phonenumber"

// Pre-load metadata (do this once at startup)
import DE from "ts-phonenumber/metadata/countries/DE"
registerMetadata(DE)

// Now use sync functions - no async overhead!
const parsed = parseSync("+491701234567")
console.log(parsed.regionCode) // "DE"
console.log(parsed.type) // "mobile"

const isValid = validateSync("+491701234567")
console.log(isValid.isValid) // true

const formatted = formatSync(parsed, "international")
console.log(formatted) // "+49 170 123 4567"
```

### Async API (Lazy Loading)

For web apps where you want to load metadata on-demand:

```typescript
import { parse, validate, format, getType } from "ts-phonenumber"

// Metadata is loaded automatically when needed
const parsed = await parse("+491701234567")
console.log(parsed)
// {
//   countryCode: 49,
//   nationalNumber: "1701234567",
//   regionCode: "DE",
//   type: "mobile",
//   isValid: true,
//   rawInput: "+491701234567"
// }

// Validate a phone number
const result = await validate("+491701234567")
console.log(result.isValid) // true
console.log(result.type) // "mobile"

// Format a phone number
const e164 = await format("+491701234567", "e164")
console.log(e164) // "+491701234567"

const intl = await format("+491701234567", "international")
console.log(intl) // "+49 170 123 4567"

const national = await format("+491701234567", "national")
console.log(national) // "0170 123 4567"

// Get number type
const type = await getType("+491701234567")
console.log(type) // "mobile"
```

### Parsing National Numbers

When parsing numbers without a country code, provide a default region:

```typescript
import { parse } from "ts-phonenumber"

const parsed = await parse("0170 1234567", { defaultRegion: "DE" })
console.log(parsed.countryCode) // 49
console.log(parsed.nationalNumber) // "1701234567"
```

### Loading Metadata

Metadata is loaded on-demand when you first use a region. You can also preload metadata:

```typescript
import { loadRegionMetadata, preloadRegions, loadMetadataBundle } from "ts-phonenumber"

// Load a single region
await loadRegionMetadata("DE")

// Preload multiple regions
await preloadRegions(["DE", "AT", "CH"])

// Load a group bundle (loads all regions in the group)
await loadMetadataBundle("DACH")
```

### Type Checking

```typescript
import { isMobile, isLandline, isVoIP } from "ts-phonenumber"

console.log(await isMobile("+491701234567")) // true
console.log(await isLandline("+493012345678")) // true
console.log(await isVoIP("+493212345678901")) // true
```

## CLI Usage

The package includes a CLI for quick validation and formatting:

```bash
# Validate a number
ts-phonenumber validate "+491701234567"
ts-phonenumber validate "0170 1234567" --region DE

# Parse and show details
ts-phonenumber parse "+491701234567"
ts-phonenumber parse "0170 1234567" --region DE --json

# Format a number
ts-phonenumber format "+491701234567" --format e164
ts-phonenumber format "+491701234567" --format international
ts-phonenumber format "+491701234567" --format national
ts-phonenumber format "+491701234567" --format rfc3966

# Get number type
ts-phonenumber type "+491701234567"
```

## Supported Number Types

This library only supports the following number types:

- **`"landline"`** - Fixed-line/geographic numbers
- **`"mobile"`** - Mobile phone numbers
- **`"voip"`** - Voice over IP numbers

All other types (toll-free, premium rate, shared cost, etc.) are treated as **`"invalid"`**.

## Scope & Testing Transparency

### Why This Library?

Google's libphonenumber is the industry standard, but it comes with trade-offs:

| Aspect          | libphonenumber                 | ts-phonenumber                    |
| --------------- | ------------------------------ | --------------------------------- |
| **Performance** | Baseline                       | **5-11x faster** (see benchmarks) |
| Language        | Java (with JS port)            | TypeScript-native                 |
| Bundle size     | ~200-300KB (all metadata)      | ~5KB core + on-demand metadata    |
| Number types    | All (toll-free, premium, etc.) | Only LANDLINE, MOBILE, VOIP       |
| API style       | Synchronous only               | Dual: async + sync                |
| Runtime         | Any                            | Node 20+, Bun, modern browsers    |

**Our focus:** Most applications only need to validate user-provided phone numbers (mobile/landline). By excluding special service numbers, we keep bundles small, validation strict, and performance blazing fast.

### Test Coverage

We validate our implementation against Google's original test suite:

| Source                       | Original Tests | Converted | Coverage     |
| ---------------------------- | -------------- | --------- | ------------ |
| `phonenumberutil_test.js`    | 111            | 96        | 86%          |
| `asyoutypeformatter_test.js` | 33             | 0         | Not in scope |
| **Total**                    | **144**        | **129**   | **90%**      |

**Skipped tests (5)** are explicitly marked with reasons:

- Toll-free number formatting (not in scope)
- Premium rate number formatting (not in scope)
- Complex edge cases (documented individually)

### What We Explicitly Don't Support

| Feature                                | Reason                              |
| -------------------------------------- | ----------------------------------- |
| Toll-free numbers (800, 0800, etc.)    | Outside user-input validation scope |
| Premium rate numbers (900, 0900, etc.) | Outside user-input validation scope |
| Short codes (SMS short numbers)        | Outside user-input validation scope |
| Shared cost, UAN, Voicemail            | Outside user-input validation scope |
| AsYouTypeFormatter                     | Complexity vs. value trade-off      |
| Legacy runtimes (Node < 20)            | Modern tooling requirement          |

Numbers of unsupported types will parse successfully but return `type: "invalid"` and `isValid: false`.

### Metadata Updates

Metadata is derived from Google's libphonenumber and updated via semi-automatic tooling:

```bash
pnpm upstream:update  # Check for updates, convert, test
```

The current upstream version is tracked in `upstream/.version`.

## Metadata Bundles

Metadata is organized into individual country modules and group bundles:

### Individual Countries

```typescript
import DE from "ts-phonenumber/metadata/countries/DE"
import US from "ts-phonenumber/metadata/countries/US"
```

### Group Bundles

```typescript
import DACH from "ts-phonenumber/metadata/bundles/DACH" // DE, AT, CH
```

## API Reference

### Types

- `PhoneNumberType` - `"landline" | "mobile" | "voip" | "invalid"`
- `PhoneNumberFormat` - `"e164" | "international" | "national" | "rfc3966"`
- `ParsedPhoneNumber` - Result of parsing a phone number
- `ValidationResult` - Result of validating a phone number
- `ParseOptions` - Options for parsing (includes `defaultRegion`)

### Async Functions

- `parse(input, options?)` - Parse a phone number string
- `validate(input, options?)` - Validate a phone number
- `isValidNumber(input, options?)` - Simple boolean validation
- `format(input, format, options?)` - Format a phone number
- `getType(input, options?)` - Get the phone number type
- `isMobile(input, options?)` - Check if number is mobile
- `isLandline(input, options?)` - Check if number is landline
- `isVoIP(input, options?)` - Check if number is VoIP

### Sync Functions (Maximum Performance)

- `parseSync(input, options?)` - Parse a phone number (requires pre-loaded metadata)
- `validateSync(input, options?)` - Validate a phone number
- `isValidNumberSync(input, options?)` - Simple boolean validation
- `formatSync(input, format, options?)` - Format a phone number

### Metadata Functions

- `registerMetadata(metadata)` - Register metadata for sync API
- `loadRegionMetadata(regionCode)` - Load metadata for a region (async)
- `loadMetadataBundle(bundleName)` - Load a group bundle (async)
- `preloadRegions(regionCodes)` - Preload multiple regions (async)
- `isMetadataLoaded(regionCode)` - Check if metadata is loaded
- `clearMetadataCache()` - Clear the metadata cache

## Benchmarks

**Up to 11x faster** than alternatives — ts-phonenumber wins all 7 benchmarks against the most popular phone number libraries.

| Benchmark       | ts-phonenumber | vs [libphonenumber-js] | vs [google-libphonenumber] | vs [awesome-phonenumber] |
| --------------- | -------------: | :--------------------: | :------------------------: | :----------------------: |
| Parse E.164     |    **1.56M**/s |      3.3x faster       |        4.9x faster         |        25x faster        |
| Parse national  |    **2.14M**/s |      6.4x faster       |        9.9x faster         |        37x faster        |
| Validate        |    **1.53M**/s |      5.4x faster       |        6.2x faster         |            —             |
| Format E.164    |    **32.4M**/s |      4.3x faster       |        1.5x faster         |       1.9x faster        |
| Format Intl     |    **2.30M**/s |      7.3x faster       |        6.1x faster         |       6.2x faster        |
| Full pipeline   |    **1.51M**/s |      4.8x faster       |        11.2x faster        |            —             |
| Batch (10 nums) |     **160K**/s |      7.4x faster       |        5.7x faster         |        38x faster        |

<sub>Benchmarks on Apple M1 Ultra, Node.js v24. Sync API with pre-loaded metadata. Run `pnpm benchmark` to reproduce.</sub>

[google-libphonenumber]: https://www.npmjs.com/package/google-libphonenumber
[libphonenumber-js]: https://www.npmjs.com/package/libphonenumber-js
[awesome-phonenumber]: https://www.npmjs.com/package/awesome-phonenumber

### Why so fast?

**Hand-optimized data structures from official Google data:**

- **Pre-compiled RegExp literals** — All patterns (validation, formatting, leading digits) are compiled at build time, not runtime. Zero `new RegExp()` calls during validation.
- **Bitmap-based length validation** — Possible lengths stored as bit flags for O(1) membership checks instead of array iteration.
- **Combined leading digit patterns** — Multiple patterns merged into single RegExp with `|` alternation, eliminating array traversal.
- **Zero-overhead sync API** — When metadata is pre-loaded, no async overhead at all.
- **Lean metadata** — Only LANDLINE, MOBILE, VOIP patterns included. No toll-free, premium, or special service bloat.

All metadata is automatically generated from [Google's official PhoneNumberMetadata.xml](https://github.com/google/libphonenumber/blob/master/resources/PhoneNumberMetadata.xml) — the same source used by libphonenumber — ensuring correctness while maximizing performance.

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run type checking
pnpm typecheck

# Run linting
pnpm lint

# Build
pnpm build

# Run benchmarks
pnpm benchmark
```

## License

Apache-2.0

Based on concepts from [Google's libphonenumber](https://github.com/google/libphonenumber).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
