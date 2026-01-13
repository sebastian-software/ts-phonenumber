# ADR 0001: Async Public API

## Status

Accepted

## Context

Phone number libraries typically have synchronous APIs that require all metadata to be loaded upfront. This leads to large initial bundle sizes, which is problematic for browser applications.

## Decision

All public API functions (`parse`, `validate`, `format`, `getType`) are async and return Promises.

## Consequences

### Positive

- Metadata can be loaded on-demand via dynamic `import()`
- Bundlers can code-split metadata into separate chunks
- Initial bundle size is minimal
- Only used metadata is loaded

### Negative

- API is slightly more complex (requires await)
- Cannot be used in synchronous contexts without additional wrappers

## Alternatives Considered

1. **Synchronous API with preloading** - Requires loading all metadata upfront
2. **Hybrid API** - Complex to maintain, confusing for users
3. **Web Worker approach** - Adds complexity, not worth it for this use case
