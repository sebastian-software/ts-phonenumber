# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.0.0](https://github.com/sebastian-software/ts-phonenumber/compare/v1.2.0...v2.0.0) (2026-01-13)

### ⚠ BREAKING CHANGES

* PhoneNumberType, PhoneNumberFormat, and MatchType are now
string union types instead of enums. Use lowercase string literals directly:

- PhoneNumberType: "landline" | "mobile" | "voip" | "invalid"
- PhoneNumberFormat: "e164" | "international" | "national" | "rfc3966"
- MatchType: "not_a_number" | "no_match" | "short_nsn_match" | "nsn_match" | "exact_match"

Before: format(num, PhoneNumberFormat.INTERNATIONAL)
After:  format(num, "international")

Also fixes vertical alignment of badges on homepage.

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>

### Code Refactoring

* replace enums with string union types ([dc82895](https://github.com/sebastian-software/ts-phonenumber/commit/dc82895332cde1bc6293e57837ce881ced91e9bf))

## [1.2.0](https://github.com/sebastian-software/ts-phonenumber/compare/v1.1.1...v1.2.0) (2026-01-13)

### Features

* add documentation website with TypeDoc API docs ([9727105](https://github.com/sebastian-software/ts-phonenumber/commit/9727105bf63ef3546ab4cdc6e08a474589de85c8))

## [1.1.1](https://github.com/sebastian-software/ts-phonenumber/compare/v1.1.0...v1.1.1) (2026-01-13)

### Bug Fixes

* changelog creation ([df9925a](https://github.com/sebastian-software/ts-phonenumber/commit/df9925a84d1cbdbb7c0565afd1bb6ac7fb0fe94f))
