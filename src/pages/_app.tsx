import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'

import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import { AppContainer } from '../styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}
