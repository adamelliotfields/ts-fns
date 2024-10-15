/**
 * Clamp a number between two values.
 * @example
 * clamp(1, 2, 3) // 2
 * clamp(4, 2, 3) // 3
 */
export default function clamp(n: number, lower: number, upper: number): number {
  const min = Math.min(lower, upper)
  const max = Math.max(lower, upper)
  return Math.min(Math.max(n, min), max)
}
