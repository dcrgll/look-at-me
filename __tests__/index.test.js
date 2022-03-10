import { render } from '@testing-library/react'
import { describe, test } from '@jest/globals'
import Home from '@/pages/index'

describe('Home', () => {
  test('renders without crashing', () => {
    render(<Home />)
  })
})
