# ADR 0006: Pre-compiled RegExp Literals

## Status

Accepted

## Context

Phone number validation and formatting relies heavily on regular expressions. The original approach stored patterns as strings in metadata and compiled them to RegExp at runtime:

```typescript
// Original: string patterns compiled at runtime
const pattern = new RegExp(`^${metadata.pattern}$`)
if (pattern.test(number)) { ... }
```

Profiling showed that `new RegExp()` construction was a significant performance bottleneck, especially when processing many numbers.

## Decision

All regular expression patterns are pre-compiled as RegExp literals at build time:

```typescript
// Optimized: pre-compiled RegExp literals
pattern: /^1(?:5\d{9}|7\d{8})$/
```

### Patterns Pre-compiled

| Field                          | Anchor Style        | Example              |
| ------------------------------ | ------------------- | -------------------- | ---------- |
| `PhoneNumberDesc.pattern`      | Full match `^...$`  | `/^1(?:5\d{9}        | 7\d{8})$/` |
| `NumberFormat.pattern`         | Full match `^...$`  | `/^(\d{3})(\d{4})$/` |
| `NumberFormat.leadingDigits`   | Prefix match `^...` | `/^1[67]/`           |
| `RegionMetadata.leadingDigits` | Prefix match `^...` | `/^787               | 939/`      |

### Combined Patterns

When multiple leading digit patterns exist, they are combined into a single RegExp:

```typescript
// Original: array of patterns
leadingDigits: [/^1/, /^2/, /^3/]
// Check: array.some(r => r.test(num))

// Optimized: single combined pattern
leadingDigits: /^(?:1|2|3)/
// Check: regex.test(num)
```

## Consequences

### Positive

- **Zero runtime RegExp construction** - Patterns evaluated once at module load
- **3-5x faster validation** - No compilation overhead
- **Eliminated regexCache** - No longer needed
- **Type safety** - RegExp type instead of string

### Negative

- Slightly larger metadata files (RegExp syntax vs string)
- Build step required to generate patterns

## Implementation

The metadata converter (`scripts/convert-metadata.ts`) transforms patterns:

```typescript
// Input (from Google's XML)
pattern: "1(?:5\\d{9}|7\\d{8})"

// Output (generated TypeScript)
pattern: /^1(?:5\d{9}|7\d{8})$/
```

## Performance Impact

| Benchmark   | Before     | After       | Improvement |
| ----------- | ---------- | ----------- | ----------- |
| Parse E.164 | 480K ops/s | 1.56M ops/s | 3.3x        |
| Validate    | 450K ops/s | 1.53M ops/s | 3.4x        |
| Format      | 8M ops/s   | 32M ops/s   | 4x          |
