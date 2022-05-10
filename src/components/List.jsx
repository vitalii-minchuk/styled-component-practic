import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media(min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media(min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    padding: 2.5rem 0;
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`

export const List = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}