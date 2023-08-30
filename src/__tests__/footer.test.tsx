import { Footer } from '@components'
import { render } from '@testing-library/react'

describe('Footer', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Footer />)
    expect(getByText('Copyright 2023 iPlayed Inc. All rights reserved')).toBeTruthy()
  })
})
