import { describe, expect, test } from 'bun:test'

import stripIndent, { stripIndentOneLine } from '@/lib/strip-indent'

describe('stripIndent', () => {
  test('should strip outer indentation', () => {
    expect(stripIndent`
      foo
        bar
    `).toBe('foo\n  bar')
  })
})

describe('stripIndentOneLine', () => {
  test('should strip outer indentation and newlines', () => {
    expect(stripIndentOneLine`
      foo
        bar
    `).toBe('foo bar')
  })
})
