import styled from 'styled-components'
import NavButton from './NavButton'

export default function Navigation() {
  return (
    <NavigationWrapper>
      <NavButton>Play</NavButton>
      <NavButton isActive>History</NavButton>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
