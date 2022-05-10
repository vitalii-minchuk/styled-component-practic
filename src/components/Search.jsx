import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2 rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  & svg {
    margin-left: 1rem;
    cursor: pointer;
  }

  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 270px;
  }
`
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country ...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  padding: 1rem 0;
  background-color: var(--colors-ui-base);
`

export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={ search } />
    </InputContainer>
  )
}