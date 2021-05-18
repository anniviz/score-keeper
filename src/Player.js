import PropTypes from 'prop-types'
import './Player.css'
import Button from './Button'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinusClick: PropTypes.func.isRequired,
  onPlusClick: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinusClick, onPlusClick }) {
  return (
    <div className="Player">
      <span>{name}</span>
      <Button onClick={onMinusClick}>-</Button>
      <span className="Player__score">{score}</span>
      <Button onClick={onPlusClick}>+</Button>
    </div>
  )
}
