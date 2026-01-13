# Architecture

This document describes the architecture of ts-phonenumber.

## Overview

ts-phonenumber is a TypeScript-first phone number library with the following design principles:

1. **Async-first API** - All public functions are async to support on-demand metadata loading
2. **Code-splitting friendly** - Metadata is loaded via dynamic `import()` for tree-shaking
3. **Focused scope** - Only supports LANDLINE, MOBILE, and VOIP number types

## Module Structure

```
src/
├── index.ts              # Public API exports
├── types.ts              # Type definitions and enums
├── parse.ts              # Phone number parsing
├── validate.ts           # Phone number validation
├── format.ts             # Phone number formatting
├── getType.ts            # Type detection
├── cli.ts                # CLI entry point
└── metadata/
    ├── index.ts          # Metadata exports
    ├── types.ts          # Metadata type definitions
    ├── loader.ts         # Dynamic metadata loader
    ├── countries/        # Per-country metadata modules
    │   ├── DE.ts
    │   ├── AT.ts
    │   └── ...
    └── groups/           # Regional bundles
        ├── DACH.ts
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

The metadata system is designed for efficient loading:

1. **On-demand loading** - Metadata is loaded only when needed
2. **Caching** - Loaded metadata is cached in memory
3. **Code splitting** - Each country module is a separate chunk

#### Metadata Types (`metadata/types.ts`)

- `RegionMetadata` - Complete metadata for a country/region
- `NumberPattern` - Pattern for matching number types
- `NumberFormat` - Formatting rules
- `MetadataBundle` - Collection of multiple regions

#### Loader (`metadata/loader.ts`)

The loader provides:

- `loadRegionMetadata(regionCode)` - Load single region
- `loadMetadataBundle(bundleName)` - Load group bundle
- `preloadRegions(regionCodes)` - Batch preloading
- `clearMetadataCache()` - Cache management

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
└── metadata/
    ├── countries/        # Individual country modules
    │   ├── DE.js
    │   ├── DE.cjs
    │   └── ...
    └── groups/           # Group bundles
        ├── DACH.js
        ├── DACH.cjs
        └── ...
```

## Runtime Behavior

### Metadata Loading Flow

1. User calls `parse("+491701234567")`
2. Parser extracts country code (49)
3. Loader checks cache for region metadata
4. If not cached, dynamic `import()` loads the module
5. Metadata is cached for future use
6. Parser uses metadata patterns for type detection

### Browser Bundle Optimization

For browser builds:

1. Core library is small (no metadata embedded)
2. Bundlers create separate chunks for each metadata module
3. Only used metadata is downloaded
4. Metadata modules are cached by the browser

## Testing Strategy

- Unit tests for each core function
- Integration tests for parse → validate → format flow
- Metadata accuracy tests against known numbers
