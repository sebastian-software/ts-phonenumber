# ts-phonenumber

TypeScript-first phone number parsing, formatting, and validation library based on Google's libphonenumber concepts.

## Features

- **TypeScript-first** - Full type safety with comprehensive type definitions
- **Modern runtimes** - Supports Node.js 20+ and modern browsers
- **Small bundles** - Dynamic metadata loading via `import()` for code splitting
- **Focused scope** - Only supports LANDLINE, MOBILE, and VOIP number types
- **Async API** - All public functions are async for on-demand metadata loading
- **CLI included** - Command-line tool for validation and formatting

## Installation

```bash
npm install ts-phonenumber
# or
pnpm add ts-phonenumber
# or
yarn add ts-phonenumber
```

## Usage

### Basic Usage

```typescript
import { parse, validate, format, getType, PhoneNumberFormat } from "ts-phonenumber"

// Parse a phone number
const parsed = await parse("+491701234567")
console.log(parsed)
// {
//   countryCode: 49,
//   nationalNumber: "1701234567",
//   regionCode: "DE",
//   type: "MOBILE",
//   isValid: true,
//   rawInput: "+491701234567"
// }

// Validate a phone number
const result = await validate("+491701234567")
console.log(result.isValid) // true
console.log(result.type) // "MOBILE"

// Format a phone number
const e164 = await format("+491701234567", PhoneNumberFormat.E164)
console.log(e164) // "+491701234567"

const intl = await format("+491701234567", PhoneNumberFormat.INTERNATIONAL)
console.log(intl) // "+49 170 123 4567"

const national = await format("+491701234567", PhoneNumberFormat.NATIONAL)
console.log(national) // "0170 123 4567"

const rfc3966 = await format("+491701234567", PhoneNumberFormat.RFC3966)
console.log(rfc3966) // "tel:+49-170-123-4567"

// Get number type
const type = await getType("+491701234567")
console.log(type) // "MOBILE"
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

- **LANDLINE** - Fixed-line/geographic numbers
- **MOBILE** - Mobile phone numbers
- **VOIP** - Voice over IP numbers

All other types (toll-free, premium rate, shared cost, etc.) are treated as **INVALID**.

## Metadata Bundles

Metadata is organized into individual country modules and group bundles:

### Individual Countries

```typescript
import DE from "ts-phonenumber/metadata/countries/DE"
import US from "ts-phonenumber/metadata/countries/US"
```

### Group Bundles

```typescript
import DACH from "ts-phonenumber/metadata/groups/DACH" // DE, AT, CH
```

## API Reference

### Types

- `PhoneNumberType` - Enum: `LANDLINE`, `MOBILE`, `VOIP`, `INVALID`
- `PhoneNumberFormat` - Enum: `E164`, `INTERNATIONAL`, `NATIONAL`, `RFC3966`
- `ParsedPhoneNumber` - Result of parsing a phone number
- `ValidationResult` - Result of validating a phone number
- `ParseOptions` - Options for parsing (includes `defaultRegion`)

### Functions

- `parse(input, options?)` - Parse a phone number string
- `validate(input, options?)` - Validate a phone number
- `isValidNumber(input, options?)` - Simple boolean validation
- `format(input, format, options?)` - Format a phone number
- `getType(input, options?)` - Get the phone number type
- `isMobile(input, options?)` - Check if number is mobile
- `isLandline(input, options?)` - Check if number is landline
- `isVoIP(input, options?)` - Check if number is VoIP

### Metadata Functions

- `loadRegionMetadata(regionCode)` - Load metadata for a region
- `loadMetadataBundle(bundleName)` - Load a group bundle
- `preloadRegions(regionCodes)` - Preload multiple regions
- `clearMetadataCache()` - Clear the metadata cache

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
```

## License

Apache-2.0

Based on concepts from [Google's libphonenumber](https://github.com/google/libphonenumber).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
