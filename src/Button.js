import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
}

export default function Button({ children, onClick, isActive }) {
  return (
    <button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
      {children}
    </button>
  )
}
