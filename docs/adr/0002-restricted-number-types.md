# ADR 0002: Restricted Number Types

## Status

Accepted

## Context

Google's libphonenumber supports many number types:

- FIXED_LINE
- MOBILE
- FIXED_LINE_OR_MOBILE
- TOLL_FREE
- PREMIUM_RATE
- SHARED_COST
- VOIP
- PERSONAL_NUMBER
- PAGER
- UAN
- VOICEMAIL
- UNKNOWN

Many of these types are rarely needed in typical applications and add complexity to the metadata and validation logic.

## Decision

Only support three number types:

- **LANDLINE** (equivalent to FIXED_LINE)
- **MOBILE**
- **VOIP**

All other number types are treated as **INVALID**.

## Consequences

### Positive

- Simpler API and mental model
- Smaller metadata (can omit patterns for unsupported types)
- Clearer validation semantics

### Negative

- Cannot validate toll-free, premium rate, or other special numbers
- Users needing these types must use a different library

## Rationale

The primary use case for phone number validation is user input for contact purposes. For this use case, landline, mobile, and VoIP numbers cover the vast majority of valid inputs. Special service numbers (toll-free, premium) are typically not user contact numbers.
