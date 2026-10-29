import { describe, it, expect } from 'vitest'
import { sum } from '../utils/math'

describe('math utils', () => {
  it('soma dois números', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
