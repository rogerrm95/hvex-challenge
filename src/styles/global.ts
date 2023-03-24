import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.blue700};
        -webkit-font-smoothing: antialiased;
    }

    html, body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body, input, textarea, button {
        all: 'unset';
        font: 400 1rem "Inter", sans-serif;
    }
`
