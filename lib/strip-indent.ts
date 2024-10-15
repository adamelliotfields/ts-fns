/**
 * Strip outer indentation from a template string. Inspired by `common-tags`.
 * @example
 * stripIndent`
 *   foo
 *     bar
 * ` // "foo\n  bar"
 */
export default function stripIndent(strings: TemplateStringsArray, ...values: unknown[]): string {
  const result = strings.reduce((acc, str, i) => {
    const value = values[i] || ''
    return acc + str + value
  }, '')

  const lines = result.split('\n')

  // remove empty lines
  while (lines.length > 0 && lines[0].trim() === '') lines.shift()
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop()

  // find minimum indent
  const minIndent = lines.reduce((acc, line) => {
    const match = line.match(/^[ \t]*/) // match leading spaces and tabs
    const indent = match ? match[0].length : 0
    return line.trim().length > 0 ? Math.min(acc, indent) : acc
  }, Infinity)

  // remove indent
  return lines.map((line) => line.slice(minIndent)).join('\n')
}

/**
 * Strip outer indentation and newlines from a template string.
 * @example
 * stripIndentOneLine`
 *   foo
 *     bar
 * ` // "foo bar"
 */
export function stripIndentOneLine(strings: TemplateStringsArray, ...values: unknown[]): string {
  return stripIndent(strings, ...values)
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
