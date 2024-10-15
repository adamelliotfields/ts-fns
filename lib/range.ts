/**
 * Generate an array of numbers within a given range.
 * @example
 * range(0, 5) // [0, 1, 2, 3, 4]
 * range(0, 10, 2) // [0, 2, 4, 6, 8]
 * range(0, -5, -1) // [0, -1, -2, -3, -4]
 * range(0, 10, 2, true) // [0, 2, 4, 6, 8, 10]
 */
export default function range(start: number, end: number, step = 1, inclusive = false): number[] {
  if ((start > end && step > 0) || (start < end && step < 0)) return []
  const length = Math.floor(Math.abs((end - start) / step)) + (inclusive ? 1 : 0)
  return Array.from({ length }, (_, i) => start + i * step)
}
