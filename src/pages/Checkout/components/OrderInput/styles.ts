import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const OrderInputContainer = styled.div`
  margin-bottom: 7rem;
  margin-left: -2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.subtitle};
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 0.875rem;
  }
`

export const MethodsPayments = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const MethodsPaymentsButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.button};
  height: 3.25rem;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;

  &[data-state='checked'] {
    background: ${({ theme }) => theme.purpleLight};
    border: 2px solid ${({ theme }) => theme.purple};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.text};
  }
`

export const OrderInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  input {
    height: 2.5rem;
    background: ${({ theme }) => theme.input};
    border: 1px solid ${({ theme }) => theme.button};
    border-radius: 6px;
    padding: 0.75rem;
    margin: 0.5rem 0.375rem;

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }

  input[placeholder='CEP'] {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  input[placeholder='Rua'] {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  input[placeholder='Número'] {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  input[placeholder='Complemento'] {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  input[placeholder='Complemento']::after {
    content: '';
    width: 1rem;
    height: 1rem;
    background: blue;
  }
  input[placeholder='Bairro'] {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  div {
    display: grid;
    grid-template-columns: 85% 15%;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`
