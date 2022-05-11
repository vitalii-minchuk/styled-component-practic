import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      cursor: 'pointer',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  }
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & * {
    color: var(--colors-text) !important;
    background-color: var(--colors-ui-base) !important;
  }

  & > div[id] {
    margin-top: 0.75rem;
    background-color: white !important;
  }

`