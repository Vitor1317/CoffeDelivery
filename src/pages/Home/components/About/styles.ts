import styled from 'styled-components'

export const AboutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  margin: 6rem 0;
`

export const Section = styled.section`
  h1 {
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;

  margin-top: 4rem;
`

interface ItemProps {
  variant: 'yellowDark' | 'text' | 'yellow' | 'purple'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${({ theme }) => theme.background};
    background: ${({ theme, variant }) => theme[variant]};
    padding: 0.5rem;
  }
`
