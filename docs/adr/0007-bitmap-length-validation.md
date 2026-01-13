# ADR 0007: Bitmap-based Length Validation

## Status

Accepted

## Context

Phone number metadata includes `possibleLengths` arrays specifying valid national number lengths:

```typescript
// Original: array of valid lengths
possibleLengths: [7, 8, 9, 10]
```

Operations on these arrays (membership check, min/max) have O(n) complexity:

```typescript
const isValid = possibleLengths.includes(length) // O(n)
const min = Math.min(...possibleLengths) // O(n)
const max = Math.max(...possibleLengths) // O(n)
```

Analysis showed:

- 77% are single-value arrays like `[9]`
- 17% are contiguous ranges like `[7, 8, 9]`
- 6% are non-contiguous like `[7, 9]` or `[6, 9]`

## Decision

Store possible lengths as a bitmap (single number) where each bit represents a valid length:

```typescript
// Optimized: bitmap representation
possibleLengths: 896 // = 0b1110000000 (bits 7,8,9 set)

// O(1) membership check
const isValid = (bitmap & (1 << length)) !== 0

// O(1) min/max via bit operations
const min = Math.log2(bitmap & -bitmap) | 0
const max = 31 - Math.clz32(bitmap)
```

## Implementation

### Type Definition

```typescript
export type LengthBitmap = number

export interface PhoneNumberDesc {
  possibleLengths?: LengthBitmap
  possibleLengthsLocalOnly?: LengthBitmap
}
```

### Helper Functions (`src/lengthBitmap.ts`)

```typescript
isLengthValid(bitmap, length) // O(1) membership check
getMinLength(bitmap) // O(1) via bit math
getMaxLength(bitmap) // O(1) via Math.clz32
bitmapToLengths(bitmap) // For debugging: [7, 8, 9]
lengthsToBitmap([7, 8, 9]) // Build-time conversion
```

### Generated Metadata

```typescript
// With helpful comment showing represented lengths
possibleLengths: 896, // bits: 7,8,9
possibleLengthsLocalOnly: 28 // bits: 2,3,4
```

## Consequences

### Positive

- **O(1) operations** - Constant time for all length checks
- **Compact storage** - Single number vs array
- **Works universally** - Handles contiguous and non-contiguous ranges
- **Self-documenting** - Comment shows human-readable lengths

### Negative

- Requires understanding bit operations
- Limited to lengths 0-31 (more than sufficient for phone numbers)

## Rationale

Phone number lengths are always small (typically 4-15 digits), so a 32-bit integer can represent all possible lengths. The bitmap approach:

1. Eliminates array allocation and iteration
2. Uses native CPU bit operations
3. Is cache-friendly (single number vs array pointer + data)
