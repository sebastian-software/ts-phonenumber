# ADR 0004: Dual API (Async + Sync)

## Status

Accepted

## Context

ADR 0001 established an async-first API to enable on-demand metadata loading via dynamic `import()`. However, for server-side applications, CLIs, and performance-critical code paths, the async overhead can be significant.

## Decision

Provide both async and sync versions of all core functions:

| Async             | Sync                  |
| ----------------- | --------------------- |
| `parse()`         | `parseSync()`         |
| `validate()`      | `validateSync()`      |
| `format()`        | `formatSync()`        |
| `isValidNumber()` | `isValidNumberSync()` |

The sync API requires metadata to be pre-loaded via `registerMetadata()` or `preloadRegions()`.

## Consequences

### Positive

- Maximum performance when metadata is pre-loaded (no async overhead)
- Better suited for servers and CLIs
- Users can choose the right API for their use case
- Sync API is 1.5-2x faster than async for individual operations

### Negative

- Larger API surface
- Users must understand when to use which API
- Sync API throws if metadata not pre-loaded

## Usage

```typescript
// Async API - metadata loaded on demand
const parsed = await parse("+491701234567")

// Sync API - requires pre-loaded metadata
import DE from "ts-phonenumber/metadata/countries/DE"
registerMetadata(DE)
const parsed = parseSync("+491701234567")
```

## Guidance

- **Web applications**: Use async API for code splitting
- **Servers/CLIs**: Use sync API with pre-loaded metadata
- **Performance-critical**: Always use sync API
