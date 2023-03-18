import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.5rem;
  background: ${({ theme }) => theme.card};

  border-radius: 4px 40px 4px 40px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  small {
    margin: 0 1.25rem;
    margin-top: 0.5rem;
    text-align: center;
  }
`

export const VariantCoffe = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  strong {
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: ${({ theme }) => theme.yellowLight};
    color: ${({ theme }) => theme.yellowDark};
    border-radius: 99px;
    font-size: 10px;
    text-transform: uppercase;
  }
`

export const FooterCard = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 2rem;

  span {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 0.875rem;
  }
`

export const CartContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    width: 4.5rem;
    height: 2.25rem;
    border: 0;
    background: ${({ theme }) => theme.button};
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme.purple};
      cursor: pointer;
    }
  }

  div {
    width: 2.25rem;
    height: 2.25rem;
    background: ${({ theme }) => theme.purpleDark};
    color: ${({ theme }) => theme.card};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
`
