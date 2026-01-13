# Architecture

This document describes the architecture of ts-phonenumber.

## Overview

ts-phonenumber is a TypeScript-first phone number library with the following design principles:

1. **Dual API** - Async for code splitting, sync for maximum performance
2. **Code-splitting friendly** - Metadata loaded via dynamic `import()`
3. **Focused scope** - Only supports LANDLINE, MOBILE, and VOIP number types
4. **Hand-optimized data structures** - Pre-compiled RegExp, bitmap lengths

## Module Structure

```
src/
├── index.ts              # Public API exports
├── types.ts              # Type definitions and enums
├── parse.ts              # Phone number parsing
├── validate.ts           # Phone number validation
├── format.ts             # Phone number formatting
├── getType.ts            # Type detection
├── region.ts             # Region utilities
├── match.ts              # Number matching
├── lengthBitmap.ts       # Bitmap utilities for length validation
├── cli.ts                # CLI entry point
└── metadata/
    ├── index.ts          # Metadata exports
    ├── types.ts          # Metadata type definitions
    ├── loader.ts         # Dynamic metadata loader
    ├── countryCodeMap.ts # Country code to region mapping
    ├── countries/        # Per-country metadata modules
    │   ├── DE.ts
    │   ├── AT.ts
    │   └── ...
    └── bundles/          # Regional bundles
        ├── DACH.ts
        ├── EU.ts
        └── ...
```

## Core Components

### Types (`types.ts`)

Defines the core types:

- `PhoneNumberType` - Enum for number types (LANDLINE, MOBILE, VOIP, INVALID)
- `PhoneNumberFormat` - Enum for output formats (E164, INTERNATIONAL, NATIONAL, RFC3966)
- `ParsedPhoneNumber` - Result of parsing a phone number
- `ValidationResult` - Result of validation

### Metadata System (`metadata/`)

The metadata system is designed for efficient loading and execution:

#### Metadata Types (`metadata/types.ts`)

```typescript
interface PhoneNumberDesc {
  pattern?: RegExp // Pre-compiled, anchored: ^pattern$
  possibleLengths?: number // Bitmap: bit N set = length N valid
  possibleLengthsLocalOnly?: number
}

interface NumberFormat {
  pattern: RegExp // Pre-compiled with capture groups
  format: string // Replacement: "$1 $2"
  leadingDigits?: RegExp // Pre-compiled, combined with |
}

interface RegionMetadata {
  regionCode: string
  countryCode: number
  leadingDigits?: RegExp // Pre-compiled prefix pattern
  // ... other fields
}
```

#### Loader (`metadata/loader.ts`)

The loader provides both async and sync access:

**Async (on-demand loading):**

- `loadRegionMetadata(regionCode)` - Load single region
- `loadMetadataBundle(bundleName)` - Load group bundle
- `preloadRegions(regionCodes)` - Batch preloading

**Sync (pre-loaded metadata):**

- `registerMetadata(metadata)` - Register for sync access
- `getRegionMetadataSync(regionCode)` - Get cached metadata
- `isMetadataLoaded(regionCode)` - Check if loaded

### Performance Optimizations

#### Pre-compiled RegExp (ADR 0006)

All regular expression patterns are compiled at build time:

```typescript
// Generated metadata (no runtime compilation)
pattern: /^1(?:5\d{9}|7\d{8})$/
leadingDigits: /^(?:1[67]|9)/
```

#### Bitmap Length Validation (ADR 0007)

Possible lengths stored as bitmaps for O(1) operations:

```typescript
// Generated metadata
possibleLengths: 896, // bits: 7,8,9

// Runtime check: O(1)
const isValid = (bitmap & (1 << length)) !== 0
```

#### Combined Leading Digit Patterns

Multiple patterns merged into single RegExp:

```typescript
// Instead of: [/^1/, /^2/, /^3/] with array.some()
leadingDigits: /^(?:1|2|3)/ // Single test() call
```

### Parsing (`parse.ts`)

The parser handles:

1. Input normalization (stripping formatting characters)
2. E.164 format detection and parsing
3. National format parsing with region hint
4. Type determination based on metadata patterns

### Validation (`validate.ts`)

Validation uses parsing internally and enforces:

- Only LANDLINE, MOBILE, VOIP types are valid
- All other types return INVALID

### Formatting (`format.ts`)

Supports four output formats:

- **E164** - `+491701234567`
- **INTERNATIONAL** - `+49 170 1234567`
- **NATIONAL** - `0170 1234567`
- **RFC3966** - `tel:+49-170-1234567`

## Build Output

The build produces:

```
dist/
├── index.js              # ESM entry
├── index.cjs             # CJS entry
├── index.d.ts            # Type declarations
├── cli.js                # CLI (ESM with shebang)
├── lengthBitmap.js       # Bitmap utilities
└── metadata/
    ├── countries/        # Individual country modules
    │   ├── DE.js
    │   ├── DE.cjs
    │   └── ...
    └── bundles/          # Inline bundles
        ├── DACH.js       # Embedded DE, AT, CH metadata
        ├── EU.js
        └── ...
```

## Runtime Behavior

### Async Flow (Code Splitting)

1. User calls `parse("+491701234567")`
2. Parser extracts country code (49)
3. Loader checks cache for region metadata
4. If not cached, dynamic `import()` loads the module
5. Metadata is cached for future use
6. Parser uses pre-compiled patterns for type detection

### Sync Flow (Maximum Performance)

1. At startup: `registerMetadata(DE)`
2. User calls `parseSync("+491701234567")`
3. Parser gets metadata from cache (no async)
4. Pre-compiled RegExp patterns execute directly
5. Bitmap operations for length validation

### Browser Bundle Optimization

For browser builds:

1. Core library is small (~5KB, no metadata)
2. Bundlers create separate chunks for each metadata module
3. Only used metadata is downloaded
4. Metadata modules are cached by the browser

## Metadata Generation

Metadata is generated from Google's libphonenumber XML:

```bash
pnpm upstream:update  # Fetch latest, convert, test
```

The converter (`scripts/convert-metadata.ts`):

1. Parses `PhoneNumberMetadata.xml`
2. Generates TypeScript modules with pre-compiled patterns
3. Creates inline bundles for common market groupings
4. Adds helpful comments (e.g., `// bits: 7,8,9`)

## Architecture Decisions

See `docs/adr/` for detailed decision records:

- **ADR 0001** - Async Public API
- **ADR 0002** - Restricted Number Types
- **ADR 0003** - Metadata as ESM Modules
- **ADR 0004** - Dual API (Async + Sync)
- **ADR 0005** - WASM Not Pursued
- **ADR 0006** - Pre-compiled RegExp
- **ADR 0007** - Bitmap Length Validation

## Testing Strategy

- Unit tests for each core function
- Integration tests for parse → validate → format flow
- Legacy test compatibility with libphonenumber
- Benchmark comparisons with alternative libraries
