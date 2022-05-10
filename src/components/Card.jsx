import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-git: cover;
  object-size: center;
  box-shadow: var(--shadow);
`
const CardBody = styled.div`
  padding: 1.5rem 0.5rem 2rem;
`
const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-align: center;
`
const CardList = styled.ul`
  margin: 0;
  padding: 1rem 0 0;
  list-style: none;
`
const CardListItem = styled.li`
  font-size: var(--fw-sm);
  line-height: 1.5rem;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`

export const Card = ({img, name, info = [], onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el =>(
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}