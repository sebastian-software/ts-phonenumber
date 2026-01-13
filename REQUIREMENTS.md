# Requirements — ts-phonenumber (Modern TypeScript libphonenumber Alternative)

**Document status:** Draft v0.3
**Last updated:** 2026-01-13  
**Package name:** `ts-phonenumber` (intended to be published on npm; availability not guaranteed by this document)  
**Owner / Copyright:** © 2026 Sebastian Software GmbH, Mainz, Germany  
**Upstream:** google/libphonenumber (Apache-2.0) :contentReference[oaicite:0]{index=0}  
**License:** Apache-2.0 (compatible with upstream) :contentReference[oaicite:1]{index=1}

---

## 1. Executive Summary

`ts-phonenumber` is a TypeScript-first phone-number parsing/formatting/validation library based on the core concepts of Google’s libphonenumber, designed for:

- **Modern Node (>=20)** and **modern browsers**
- **Small, browser-viable bundles** using dynamic, code-split metadata
- **Reduced feature scope**: only **Landline**, **Mobile**, **VoIP** supported as positive types
- **Strict correctness** validated by preserving legacy tests **1:1**
- **ESM + CJS** distribution
- A built-in **Node.js CLI** for validating and inspecting phone numbers

---

## 2. Goals

1. **TypeScript-first, modern tooling**
2. **Browser-friendly distribution**
   - Core runtime stays small
   - Region metadata is dynamically loaded via `import()` (code-splitting)
3. **Test compatibility**
   - Preserve “old tests” 1:1 and make them pass under Vitest
4. **Reduced number type scope**
   - Only recognize as valid/supported:
     - LANDLINE
     - MOBILE
     - VOIP
   - Everything else is treated as **invalid** (hard requirement)
5. **Versioned metadata**
   - Metadata is part of the installed package and versioned per release to prevent compatibility drift

---

## 3. Non-Goals

- Supporting legacy runtimes (older Node versions; legacy browsers)
- Carrying upstream language ports (Java/C++/…); only TypeScript remains
- Implementing non-user-input number types (toll-free, premium, special services, etc.)
- Shipping metadata by fetching from remote servers at runtime (no CDN dependency)

---

## 4. Decisions Confirmed (from Open Questions)

1. **Unsupported types are `invalid`.**
2. **Metadata format: JSON is acceptable**, but optimization alternatives should be investigated.
3. **Metadata loading:** shipped within npm package and loaded via async `import()`.
4. **Metadata pinning:** manifested per release; maintainers update via tooling support.
5. **Bundles:** provide pragmatic country/group packs reflecting user expectations (examples only).
6. **CLI:** included in the same package.
7. **WASM:** evaluate performance improvements for both Node and browser.

---

## 5. Upstream Baseline & Git History

### 5.1 Upstream version

- **Use the latest stable release** of google/libphonenumber at the time of implementation.
- The specific version used must be documented in the repository.

### 5.2 Fresh repository history

- Start from an upstream clone but **rewrite history** to a clean initial commit.
- Record upstream reference in-repo:
  - upstream URL
  - upstream tag/version
  - upstream commit hash
  - import date
  - any changes applied during import

### 5.3 License and attribution

- License remains Apache-2.0 and compatible with upstream. :contentReference[oaicite:2]{index=2}
- Provide required notices and attribution files.

---

## 6. Target Platforms

### 6.1 Node

- Node.js **20+** (development and runtime)

### 6.2 Browsers

- Modern evergreen browsers (Chrome, Edge, Firefox, Safari)
- A `browserslist` must be defined and used by build tooling.
- **Browserslist configuration:** `last 2 Chrome versions, last 2 Firefox versions, last 2 Safari versions, last 2 Edge versions`

---

## 7. Functional Requirements

### 7.1 Library capabilities (public API)

Minimum capabilities:

- Parse
  - Parse E.164 and national input, optionally with a region hint
- Validate
  - `isValidNumber(...)` semantics for the supported types subset
- Classify types (restricted)
  - Only possible types returned:
    - `LANDLINE`
    - `MOBILE`
    - `VOIP`
    - `INVALID` — **explicit enum value** for invalid/unsupported numbers (no null/undefined)
- Format
  - E.164
  - INTERNATIONAL
  - NATIONAL
  - RFC3966 (tel: URI) — **included from v1**

### 7.2 Reduced type model (hard rule)

- Numbers that would have been classified as toll-free, premium, special services, short codes,
  etc. must be treated as **invalid**.

### 7.2a API Style

- **All public API functions are async** (`parse`, `validate`, `format`, `getType`).
- Metadata is loaded on-demand via `import()` when a region is first accessed.
- This allows bundlers to code-split metadata and keeps the initial bundle small.

### 7.3 Metadata loading

- Metadata must be:
  - shipped with the package
  - loaded via async `import()` to enable bundler code splitting
- Library must support:
  - per-country metadata modules
  - continent bundles
  - industry/group bundles (G7, G20, DACH, BENELUX, etc.)

### 7.4 Metadata bundles (build output)

Build must output modules along these lines:

- `metadata/countries/DE.(js|mjs|cjs)` — **all countries individually**
- `metadata/groups/DACH.(...)` — Germany, Austria, Switzerland
- `metadata/groups/EU.(...)` — all EU member states
- `metadata/groups/G7.(...)` — Canada, France, Germany, Italy, Japan, UK, USA
- `metadata/groups/G20.(...)` — all G20 member countries

Exact naming conventions are captured in an ADR.

### 7.5 CLI (Node-only)

The package must include a CLI executable:

- Validate a number
- Parse and output details
- Format output in various formats
- Allow specifying region and metadata bundle selection

**CLI library:** Use **commander** for argument parsing.

Examples (illustrative):

- `ts-phonenumber validate "+491701234567" --region DE`
- `ts-phonenumber parse "0170 1234567" --region DE --json`
- `ts-phonenumber format "+491701234567" --format e164`

---

## 8. Metadata Encoding Strategy (JSON + Client-Efficient Alternatives)

### 8.1 Baseline: JSON (accepted)

JSON is allowed as the source-of-truth **input** for generated metadata because it is simple and interoperable.

However, JSON has two client-side costs:

- **size overhead** (structural text, repeated keys if not normalized)
- **parse overhead** (`JSON.parse`) and subsequent object graph allocations

### 8.2 Recommended approach (browser-friendly, no runtime JSON.parse)

**Generate metadata as code, not as JSON text:**

- At build time, convert JSON into **ESM modules** exporting:
  - normalized tables (arrays)
  - small dictionaries (key → index)
  - optionally **TypedArrays** for numeric tables
- This eliminates `JSON.parse` at runtime and allows better tree-shaking and minification.

This aligns well with the requirement to load metadata via `import()` from the installed package:

- bundlers will create separate chunks per dynamic import
- chunks are already “parsed” as JS modules by the engine

### 8.3 Viable binary alternatives that can run efficiently in browsers

If further optimization is required, consider:

1. **CBOR**
   - Compact binary JSON-like encoding
   - Still requires a decode step in JS/WASM
2. **MessagePack**
   - Mature and compact
   - Decode cost and extra dependency
3. **Protocol Buffers**
   - Excellent compactness
   - Requires a schema, generation, and decode runtime
4. **FlatBuffers**
   - Can support “zero-copy-ish” reads
   - More complex schema/tooling; careful with JS ergonomics
5. **Custom packed format (TypedArray-based)**
   - Highest potential efficiency
   - Highest maintenance complexity, needs solid tooling/ADRs/tests

**Key consideration:** for browser workloads, decode time + dependency weight can erase gains unless
metadata is very large and frequently loaded.

### 8.4 Decision requirement

A benchmark ADR must be created to compare:

- “ESM module exporting normalized arrays / TypedArrays” vs
- “binary format (e.g., MessagePack/CBOR/Protobuf)”

The default path is the ESM module approach unless benchmarks justify binary.

---

## 9. Tooling & Stack Requirements

### 9.1 Package manager

- Use **pnpm** via **Corepack** (mandatory)
- `packageManager` field must be set in `package.json`

### 9.2 TypeScript

- Strict configuration (typed strict mode)
- Recommended flags:
  - `noUncheckedIndexedAccess`
  - `exactOptionalPropertyTypes`
  - `useUnknownInCatchVariables`

### 9.3 ESLint

- ESLint with TypeScript plugin and **typed strict** presets
- Lint must be run in CI and pre-push checks

### 9.4 Formatting

- **Prettier** is required
- Enforced via pre-commit checks

### 9.5 Tests

- Testrunner: **Vitest** (mandatory)
- Legacy tests must be preserved 1:1 and pass

### 9.6 Bundler

- **Use tsup** as the build tool.
- Must output:
  - ESM
  - CJS
  - proper `exports` map

---

## 10. Git Hooks / Local Quality Gates

### 10.1 Pre-commit

- Run Prettier (and only Prettier) on staged files

### 10.2 Pre-push

- Run:
  - TypeScript (`tsc -p ... --noEmit`)
  - ESLint (typed lint)

**Hook tooling:** Use **Husky** + **lint-staged**.

---

## 11. CI Requirements (GitHub Actions)

### 11.1 Workflows

Create GitHub Actions workflows to run:

- Lint (ESLint typed)
- Typecheck (tsc)
- Tests (Vitest)
- Build

### 11.2 Matrix requirements

CI must run as a matrix across:

**Operating systems**

- ubuntu-latest
- windows-latest
- macos-latest

**Runtimes**

- Node **20**
- Node **22**
- Node **24**
- Bun (latest stable)

Implementation hints (non-binding):

- Use `actions/setup-node` for Node :contentReference[oaicite:3]{index=3}
- Use `oven-sh/setup-bun` for Bun :contentReference[oaicite:4]{index=4}

### 11.3 Notes on Node in GitHub Actions

- GitHub Actions is actively moving actions runtimes forward (Node 20 deprecation cycle noted). :contentReference[oaicite:5]{index=5}  
  This does not change the project’s requirement to support Node 20/22/24 as test targets.

---

## 12. Packaging & Distribution

### 12.1 Dual ESM + CJS

- Publish both ESM and CJS builds
- Provide a robust `exports` map with:
  - root entry
  - metadata entrypoints
  - CLI entrypoint

### 12.2 Browser consumption model

- Core library is importable as ESM in modern bundlers
- Metadata modules are loaded via `import()` to form separate chunks

---

## 13. WASM Investigation (Both Node and Browser)

### 13.1 Priority

- **Post-MVP** — WASM investigation is scheduled after stable TypeScript implementation.

### 13.2 Goal

Determine whether a WASM implementation of the parsing/validation engine yields meaningful improvements.

### 13.3 Implementation language

- **Rust** with `wasm-bindgen` for WASM compilation.

### 13.4 Requirements

- Provide benchmark suite comparing:
  - TS engine vs WASM engine
- Evaluate:
  - cold and warm performance
  - bundle impact (browser)
  - operational complexity
- Record outcome via ADR.

---

## 14. Documentation Requirements

### 14.1 README

README must comprehensively document:

- Installation (Node + bundlers)
- Core API usage
- Metadata loading model (per country, groups)
- CLI usage
- Versioning and metadata update workflow
- Contributing / development setup
- License and attribution

### 14.2 Architecture & ADRs

- Maintain ADRs in `docs/adr/`
- Maintain `docs/ARCHITECTURE.md` with:
  - core modules
  - metadata generation pipeline
  - runtime loading behavior
  - bundling strategy

---

## 15. Release Engineering

### 15.1 Releases

- Use **Release-It**
- Generate changelog from **Angular/Conventional Commits**

### 15.2 Changelog

- `CHANGELOG.md` generated as part of the release process

---

## 16. Standard OSS Files (Required)

At repository root:

- `LICENSE` (Apache-2.0)
- `NOTICE` (as required)
- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.gitignore`
- `.editorconfig`
- `package.json` (with `packageManager` for Corepack)
- `tsconfig.json` (+ build variants)
- ESLint config
- Prettier config
- Vitest config
- GitHub Actions workflows
- ADR folder and Architecture doc

---

## 17. Acceptance Criteria

1. Legacy tests preserved 1:1 and passing under Vitest.
2. Build produces ESM + CJS artifacts and correct `exports`.
3. Browser consumer can import core and dynamically load metadata chunks via `import()`.
4. Country and group metadata bundles exist and work.
5. CLI works and is distributed in the same package.
6. Pre-commit runs Prettier; pre-push runs TS + ESLint.
7. CI matrix runs on all OSes for Node 20/22/24 and Bun.
