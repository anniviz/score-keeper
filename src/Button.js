// import './Button.css'
// import PropTypes from 'prop-types'

// Button.propTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func.isRequired,
//   isActive: PropTypes.bool,
// }

// export default function Button({ children, onClick, isActive }) {
//   return (
//     <button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
//       {children}
//     </button>
//   )
// }

import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ children, isActive, onClick }) {
  return (
    <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
