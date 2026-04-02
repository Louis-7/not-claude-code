/**
 * Runtime shim for `bun:bundle` when using `bun run` (not `bun build`).
 * Real `feature()` is compile-time in production bundles.
 */
const strict =
  typeof process !== 'undefined' &&
  process.env.CLAUDE_CODE_STRICT_FEATURES === '1'

export function feature(_name: string): boolean {
  return !strict
}
