import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'

import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import { AppContainer } from '../styles/pages/app'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}
