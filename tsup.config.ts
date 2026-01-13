import { defineConfig } from "tsup"

export default defineConfig([
  // Main library entry
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: true,
    treeshake: true,
    target: "es2022",
    outDir: "dist"
  },
  // CLI entry
  {
    entry: ["src/cli.ts"],
    format: ["esm"],
    sourcemap: true,
    target: "es2022",
    outDir: "dist",
    banner: {
      js: "#!/usr/bin/env node"
    }
  },
  // Country metadata modules (for code-splitting)
  {
    entry: ["src/metadata/countries/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    target: "es2022",
    outDir: "dist/metadata/countries"
  },
  // Group bundles (DACH, EU, G7, etc.)
  {
    entry: ["src/metadata/bundles/*.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    target: "es2022",
    outDir: "dist/metadata/bundles"
  }
])
