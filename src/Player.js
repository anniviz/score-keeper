// import Button from './Button'
// import './Player.css'
// import PropTypes from 'prop-types'

// Button.propTypes = {
//   name: PropTypes.string,
//   score: PropTypes.number,
//   onMinusClick: PropTypes.func.isRequired,
//   onPlusClick: PropTypes.func.isRequired,
// }

// export default function Player({ name, score, onMinusClick, onPlusClick }) {
//   return (
//     <div className="Player">
//       <span>{name}</span>
//       <Button onClick={onMinusClick}>-</Button>
//       <span className="Player__score">{score}</span>
//       <Button onClick={onPlusClick}>+</Button>
//     </div>
//   )
// }
import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}
export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name} <button onClick={onMinus}>-</button> {score}{' '}
      <button onClick={onPlus}>+</button>
    </section>
  )
}
