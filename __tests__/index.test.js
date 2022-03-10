import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'
import Home from '@/pages/index'

describe('Home', () => {
  test('renders a form', () => {
    render(<Home />)

    const emailInput = screen.getByRole('textbox', { name: /Email/i })
    const rememberMeInput = screen.getByRole('checkbox', { name: /Remember Me/i })
    const submitButton = screen.getByRole('button', { name: /Sign Up/i })

    expect(emailInput).toBeInTheDocument()
    expect(rememberMeInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
