# Upstream Reference

This document records the upstream source from which metadata and tests are derived.

## Source Repository

- **Repository:** https://github.com/google/libphonenumber
- **License:** Apache-2.0

## Version Information

- **Tag:** v9.0.21
- **Commit SHA:** 72154b5d81904f40ff2730336d46c92d613d852c
- **Release Date:** 2025-12-18
- **Import Date:** 2026-01-13

## Files Imported

### Metadata

- `resources/PhoneNumberMetadata.xml` - Primary phone number metadata
- `javascript/i18n/phonenumbers/metadata.js` - Compiled JavaScript metadata

### Tests

- `javascript/i18n/phonenumbers/phonenumberutil_test.js` - Main utility tests
- `javascript/i18n/phonenumbers/asyoutypeformatter_test.js` - Formatter tests
- `javascript/i18n/phonenumbers/metadatafortesting.js` - Test metadata

## Changes Applied

1. Converted Google Closure style tests to Vitest format
2. Converted metadata from Closure module format to ESM TypeScript modules
3. Removed support for non-user-input number types (toll-free, premium, etc.)
4. Async API wrapper for dynamic metadata loading

## Updating Metadata

To update to a newer version of libphonenumber:

1. Update the version information in this file
2. Run `pnpm run import:metadata` to fetch and convert new metadata
3. Run `pnpm run test` to verify compatibility
4. Update CHANGELOG.md with the new metadata version
