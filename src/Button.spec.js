import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('returns a text/child', () => {
    render(<Button onClick={() => {}}>'click me'</Button>)
    const button = screen.getByRole('button', { name: 'click me' })
    expect(button).toBeInTheDocument()
  })
})
