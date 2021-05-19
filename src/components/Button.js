// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

// Button.propTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func.isRequired,
//   isActive: PropTypes.bool,
// }

// export default function Button({ children, onClick, isActive }) {
//   return (
//     <Button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
//       {children}
//     </Button>
//   )
// }

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${props => (props.isActive ? 'maroon' : 'goldenrod')};
  color: whitesmoke;
`

export default Button
