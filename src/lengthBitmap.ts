/**
 * Utility functions for working with length bitmaps.
 *
 * A LengthBitmap is a number where each bit position represents whether
 * that phone number length is valid. This provides O(1) membership checks
 * and compact storage compared to arrays.
 *
 * @example
 * ```typescript
 * // Bitmap for lengths [7, 8, 9]
 * const bitmap = 0b1110000000 // = 896
 *
 * isLengthValid(bitmap, 7)  // true
 * isLengthValid(bitmap, 8)  // true
 * isLengthValid(bitmap, 10) // false
 *
 * getMinLength(bitmap)  // 7
 * getMaxLength(bitmap)  // 9
 * ```
 */

import type { LengthBitmap } from "./metadata/types.js"

/**
 * Check if a specific length is valid according to the bitmap.
 *
 * @param bitmap - The length bitmap
 * @param length - The length to check
 * @returns True if the length is valid
 *
 * @example
 * ```typescript
 * const bitmap = 896 // bits 7,8,9 set
 * isLengthValid(bitmap, 8)  // true
 * isLengthValid(bitmap, 10) // false
 * ```
 */
export function isLengthValid(bitmap: LengthBitmap, length: number): boolean {
  return (bitmap & (1 << length)) !== 0
}

/**
 * Get the minimum valid length from a bitmap.
 *
 * @param bitmap - The length bitmap
 * @returns The minimum valid length, or 0 if bitmap is empty
 *
 * @example
 * ```typescript
 * getMinLength(896) // 7 (bits 7,8,9 set)
 * ```
 */
export function getMinLength(bitmap: LengthBitmap): number {
  if (bitmap === 0) return 0
  // Find lowest set bit position
  // (bitmap & -bitmap) isolates the lowest set bit
  // Math.log2 gives us the position
  return Math.log2(bitmap & -bitmap) | 0
}

/**
 * Get the maximum valid length from a bitmap.
 *
 * @param bitmap - The length bitmap
 * @returns The maximum valid length, or 0 if bitmap is empty
 *
 * @example
 * ```typescript
 * getMaxLength(896) // 9 (bits 7,8,9 set)
 * ```
 */
export function getMaxLength(bitmap: LengthBitmap): number {
  if (bitmap === 0) return 0
  // 31 - leading zeros = position of highest set bit
  return 31 - Math.clz32(bitmap)
}

/**
 * Convert a bitmap to an array of valid lengths.
 * Useful for debugging or display purposes.
 *
 * @param bitmap - The length bitmap
 * @returns Array of valid lengths
 *
 * @example
 * ```typescript
 * bitmapToLengths(896) // [7, 8, 9]
 * ```
 */
export function bitmapToLengths(bitmap: LengthBitmap): number[] {
  const lengths: number[] = []
  for (let i = 0; i <= 31; i++) {
    if ((bitmap & (1 << i)) !== 0) {
      lengths.push(i)
    }
  }
  return lengths
}

/**
 * Convert an array of lengths to a bitmap.
 * Used during metadata generation.
 *
 * @param lengths - Array of valid lengths
 * @returns The length bitmap
 *
 * @example
 * ```typescript
 * lengthsToBitmap([7, 8, 9]) // 896
 * ```
 */
export function lengthsToBitmap(lengths: number[]): LengthBitmap {
  let bitmap = 0
  for (const len of lengths) {
    bitmap |= 1 << len
  }
  return bitmap
}
