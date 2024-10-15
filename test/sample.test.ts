import { describe, expect, test } from 'bun:test'

import sample from '@/lib/sample'

describe('sample', () => {
  test('returns the correct number of items', () => {
    const arr = [1, 2, 3, 4, 5]
    const s = sample(arr)
    expect(s).toHaveLength(1)
    expect(arr).toContain(s[0])
  })
})
