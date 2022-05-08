import styled from 'styled-components'
import { IoMoon, IoSunnySharp} from 'react-icons/io5'
import { Container } from './Container'
import { useEffect, useState } from 'react'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  color: var(--colors-text)
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0;
`
const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold)
`

const ModeSwitcher = styled.div`
  cursor: pointer;
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-transform: capitalize;
  & svg {
    margin-right: 0.75rem;
    width: 14px;
  }
`

export const Header = () => {
  const [theme, setTheme] = useState('light')

  const ToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={ToggleTheme}>
            {theme === 'light' ? (<IoMoon />) : (<IoSunnySharp />)}
            {theme} theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}