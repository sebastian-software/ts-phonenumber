# ADR 0005: WASM Not Pursued

## Status

Accepted

## Context

WASM was initially considered as a potential performance optimization, as it can offer near-native performance for compute-intensive tasks. The question was whether compiling the validation/parsing engine to WASM (e.g., via Rust + wasm-bindgen) would yield meaningful improvements.

## Decision

WASM is **not beneficial** for this library and will not be implemented.

## Analysis

### 1. V8's RegExp Engine is Already C++

JavaScript RegExp is not interpreted. V8's Irregexp engine compiles patterns to native machine code. WASM cannot outperform this.

### 2. Bottleneck Was RegExp Compilation, Not Execution

Profiling showed that the performance cost was in creating `new RegExp()` at runtime, not in executing pattern matches. This was solved by pre-compiling RegExp as literals at build time (see ADR 0006).

### 3. WASM Overhead Would Hurt Performance

For small, fast operations like phone number validation:

- WASM ↔ JS boundary crossing has non-trivial cost
- String marshalling between JS and WASM is expensive
- The overhead would dominate the actual computation time

### 4. Bundle Size Impact

WASM modules add significant bytes to browser bundles, which contradicts the goal of small, browser-viable bundles.

## Consequences

### Positive

- Simpler architecture (pure TypeScript)
- Smaller bundle size
- No WASM runtime dependencies
- Easier debugging and profiling

### Negative

- None identified. The alternative optimizations (pre-compiled RegExp, bitmaps) achieved the performance goals without WASM complexity.

## Alternatives Implemented

Instead of WASM, these optimizations were implemented:

1. **Pre-compiled RegExp literals** (ADR 0006)
2. **Bitmap-based length validation** (ADR 0007)
3. **Combined leading digit patterns**

These achieved 5-11x faster performance than alternatives without any WASM complexity.
