import { add } from '../utils/add'

describe('Add Function', () => {
  test('calls add function', () => {
    expect(add(1, 2)).toBe(3)
  })
})
