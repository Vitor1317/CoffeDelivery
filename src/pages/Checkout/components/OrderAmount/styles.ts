import styled from 'styled-components'

export const OrderAmountContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  padding: 2.5rem;
  border-radius: 4px 40px 4px 40px;
  margin-bottom: 7rem;
`

export const CoffeeOrder = styled.div`
  display: flex;
  gap: 3rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.button};

  &:first-child {
    padding-top: 0;
  }

  div > img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

export const ButtonCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.button};

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    svg {
      color: ${({ theme }) => theme.purple};
      cursor: pointer;
      margin: 0 0.25rem;
    }
  }
`

export const SubmitOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;

  button {
    padding: 0.75rem;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.yellow};
    font-weight: bold;
    font-size: 0.875rem;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    height: 3rem;
    text-transform: uppercase;
  }

  button:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.yellowDark};
    opacity: 0.8;
  }
`

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div strong {
    font-size: 1.25rem;
  }
`
