import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinusClick: PropTypes.func.isRequired,
  onPlusClick: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinusClick, onPlusClick }) {
  return (
    <PlayerWrapper>
      <span>{name}</span>
      <Button onClick={onMinusClick}>-</Button>
      <Score className="Player__score">{score}</Score>
      <Button onClick={onPlusClick}>+</Button>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px auto auto auto;
  align-items: center;
  width: 300px;
  background: wheat;
`

const Score = styled.span`
  padding: 12px;
`
