# CLAUDE.md - LLM Context for ts-phonenumber

This file provides context for AI assistants working on this codebase.

## Project Purpose

ts-phonenumber is a **high-performance TypeScript phone number library** that:

- Parses, validates, and formats phone numbers
- Only supports LANDLINE, MOBILE, VOIP (all other types are INVALID)
- Uses Google's libphonenumber metadata but with hand-optimized data structures
- Targets modern Node.js (20+) and browsers

## Key Design Decisions

### Performance Optimizations (Critical Knowledge)

All metadata is **pre-compiled at build time** for maximum runtime performance:

1. **RegExp Patterns** - All patterns are RegExp literals, not strings
   - `PhoneNumberDesc.pattern`: Anchored `^pattern$`
   - `NumberFormat.pattern`: Anchored `^pattern$` with capture groups
   - `NumberFormat.leadingDigits`: Single RegExp (patterns combined with `|`)
   - `RegionMetadata.leadingDigits`: Prefix pattern `^pattern`

2. **Length Validation** - Bitmaps instead of arrays
   - `possibleLengths: 896` means bits 7,8,9 are set (lengths 7,8,9 valid)
   - Check: `(bitmap & (1 << length)) !== 0` - O(1)
   - Helper functions in `src/lengthBitmap.ts`

3. **No Runtime Compilation** - Zero `new RegExp()` calls during validation

### API Design

- **Dual API**: Async (code-splitting) + Sync (maximum performance)
- Async loads metadata via `import()` on demand
- Sync requires pre-loaded metadata via `registerMetadata()`

## Metadata Pipeline

### Source

- Google's libphonenumber: `upstream/resources/PhoneNumberMetadata.xml`
- Version tracked in: `upstream/.version`

### Generation Process

```bash
# Update upstream and regenerate
pnpm upstream:update

# Or manually:
pnpm upstream:fetch     # Download latest XML
pnpm metadata:convert   # Generate TypeScript modules
pnpm test              # Verify correctness
```

### Converter Location

`scripts/convert-metadata.ts` - Transforms XML to optimized TypeScript:

- Pre-compiles RegExp patterns
- Converts length arrays to bitmaps
- Combines leading digit patterns
- Generates inline bundles (DACH, EU, G7, etc.)

### Generated Output

- `src/metadata/countries/*.ts` - 254 individual country modules
- `src/metadata/bundles/*.ts` - 19 market-focused bundles
- `src/metadata/countryCodeMap.ts` - Country code to region mapping

## Quality Standards

### Testing

- All 206+ tests must pass (includes legacy libphonenumber tests)
- Run: `pnpm test`

### Type Safety

- Strict TypeScript configuration
- Run: `pnpm typecheck`

### Linting

- ESLint with TypeScript plugin
- Run: `pnpm lint`

### Benchmarks

- Must remain fastest in all 7 benchmark categories
- Run: `pnpm benchmark`
- Compare against: libphonenumber-js, google-libphonenumber, awesome-phonenumber

## Performance Targets

Current benchmarks (sync API):

- Parse E.164: ~1.5M ops/s
- Parse National: ~2.1M ops/s
- Validate: ~1.5M ops/s
- Format E.164: ~32M ops/s
- Format International: ~2.3M ops/s

Any changes should not regress these numbers significantly.

## Common Tasks

### Adding a New Bundle

1. Edit `src/metadata/bundles/index.ts` - Add to `BundleName` type and `bundles` object
2. Edit `scripts/convert-metadata.ts` - Add to bundle generation logic
3. Run `pnpm metadata:convert`

### Updating Metadata

```bash
pnpm upstream:update  # Fetches latest, converts, tests
```

### Running Specific Tests

```bash
pnpm test -- --grep "pattern"
```

### Debugging Metadata

```typescript
// In generated files, bitmaps have comments:
possibleLengths: 896, // bits: 7,8,9

// Use helper to decode:
import { bitmapToLengths } from "./lengthBitmap"
console.log(bitmapToLengths(896)) // [7, 8, 9]
```

## File Structure Overview

```
src/
├── index.ts              # Public exports
├── parse.ts              # Parsing logic
├── validate.ts           # Validation logic
├── format.ts             # Formatting logic
├── lengthBitmap.ts       # Bitmap utilities
├── metadata/
│   ├── types.ts          # Type definitions (RegExp, bitmaps)
│   ├── loader.ts         # Async/sync loading
│   ├── countries/        # Per-country modules
│   └── bundles/          # Market bundles (inline metadata)
scripts/
├── convert-metadata.ts   # XML → TypeScript converter
├── benchmark.ts          # Performance benchmarks
docs/
├── ARCHITECTURE.md       # Architecture overview
└── adr/                  # Architecture Decision Records
```

## Architecture Decision Records

Key decisions documented in `docs/adr/`:

- **0001**: Async API for code splitting
- **0002**: Only LANDLINE/MOBILE/VOIP supported
- **0003**: Metadata as ESM modules (not JSON)
- **0004**: Dual API (async + sync)
- **0005**: WASM not pursued (V8 RegExp already fast)
- **0006**: Pre-compiled RegExp literals
- **0007**: Bitmap-based length validation

## Important Constraints

1. **No Runtime RegExp Creation** - All patterns pre-compiled
2. **No Array Iteration for Lengths** - Use bitmap operations
3. **Only 3 Number Types Valid** - LANDLINE, MOBILE, VOIP
4. **Node 20+ Required** - Modern runtime features used
5. **Metadata from Google Only** - Don't modify patterns manually

## Gotchas

- `leadingDigits` in `NumberFormat` is a single RegExp, not an array
- `possibleLengths` is a number (bitmap), not `number[]`
- The sync API throws if metadata not pre-loaded
- Bundles contain inline metadata (not imports)

## Contact / Ownership

- Owner: Sebastian Software GmbH, Mainz, Germany
- License: Apache-2.0 (compatible with Google's libphonenumber)
