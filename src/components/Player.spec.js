import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Player from './Player'
describe('Player', () => {
  it('returns a name, score and two buttons', async () => {
    render(
      <Player
        name="John"
        score={55}
        onPlusClick={() => {}}
        onMinusClick={() => {}}
      />
    )
    const buttons = screen.getAllByRole('button')
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('55')).toBeInTheDocument()
    expect(buttons.length).toBe(2)
  })
  it('calls handlePlusClick and handleMinusClick correctly', async () => {
    const handlePlusClick = jest.fn()
    const handleMinusClick = jest.fn()
    render(
      <Player
        name="John"
        score={0}
        onPlusClick={handlePlusClick}
        onMinusClick={handleMinusClick}
      />
    )
    const plusButton = screen.getByRole('button', { name: '+' })
    userEvent.click(plusButton)
    expect(handlePlusClick).toBeCalled()
    const minusButton = screen.getByRole('button', { name: '-' })
    userEvent.click(minusButton)
    expect(handleMinusClick).toBeCalled()
  })
})
