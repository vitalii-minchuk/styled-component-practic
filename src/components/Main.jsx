import styled from 'styled-components'
import { Container } from './Container'

const Wrapper = styled.main`
  padding: 1.5rem 0;

  @media(min-width: 767px) {
    padding: 2.5rem 0;
  }
`

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}