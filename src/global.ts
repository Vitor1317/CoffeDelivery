import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color: ${({ theme }) => theme.title};
    }

    p {
        color: ${({ theme }) => theme.subtitle};
    }

    small {
        color: ${({ theme }) => theme.label}
    }
`
