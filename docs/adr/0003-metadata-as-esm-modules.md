# ADR 0003: Metadata as ESM Modules

## Status

Accepted

## Context

Metadata can be stored and distributed in various formats:

1. JSON files loaded via fetch/fs
2. JSON embedded in JavaScript
3. Native ESM/CJS modules exporting objects
4. Binary formats (CBOR, MessagePack, Protocol Buffers)

## Decision

Metadata is distributed as native ESM/CJS modules (TypeScript source compiled to JS).

## Consequences

### Positive

- No `JSON.parse()` overhead at runtime
- JavaScript engines optimize module loading
- Works with standard bundler code-splitting
- Type safety via TypeScript
- Tree-shaking possible for unused properties

### Negative

- Slightly larger on-disk size than optimized JSON
- Requires rebuild to update metadata

## Alternatives Considered

### JSON files

- Pro: Easy to generate, human-readable
- Con: Requires fetch/fs read + JSON.parse, no type safety

### Binary formats (CBOR, MessagePack)

- Pro: Smaller wire size
- Con: Requires decode runtime, added dependency, complexity

### Protocol Buffers / FlatBuffers

- Pro: Very compact, schema-based
- Con: Heavy tooling, complex integration

## Future Considerations

If benchmarks show significant performance issues with the ESM approach, we may revisit binary formats. A benchmark ADR will be created if this investigation is needed.
