import styled from 'styled-components'

export const SuccessContainer = styled.main`
  h1 {
    color: ${({ theme }) => theme.yellowDark};
  }

  & > p {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`
export const Wrapper = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );
  border-radius: 6px 36px;
  padding: 1px;
`

export const DeliveryData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  padding: 2.5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 5px 35px;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      line-height: 1.3;
    }
  }
`
interface IconDataProps {
  variant: 'purple' | 'yellow' | 'yellowDark'
}

export const IconData = styled.span<IconDataProps>`
  border-radius: 50%;
  background-color: ${({ theme, variant }) => theme[variant]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.background};
`
