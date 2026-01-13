import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.ts", "src/**/*.spec.ts"],
    exclude: ["**/node_modules/**", "**/dist/**", "upstream/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*.test.ts",
        "src/**/*.spec.ts",
        "src/cli.ts",
        "src/metadata/countries/**",
        "src/metadata/groups/**",
        "src/metadata/bundles/**",
        "src/metadata/types.ts",
        "src/__tests__/legacy/fixtures.ts",
        "src/__tests__/legacy/test-utils.ts"
      ]
    }
  }
})
