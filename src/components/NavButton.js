import styled from 'styled-components/macro'

const NavButton = styled.button`
  background: white;
  color: ${props => (props.isActive ? 'black' : 'gray')};
  border: solid black 2px;
  border-radius: 0;
`

export default NavButton
