import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Locale = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  gap: 0.25rem;
  padding: 0.6rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.purpleLight};
  color: ${({ theme }) => theme.purpleDark};

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.6rem;
  border-radius: 8px;
  height: 2.5rem;
  background: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.yellowDark};
    width: 1.5rem;
    height: 1.5rem;
    font-weight: bold;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`
