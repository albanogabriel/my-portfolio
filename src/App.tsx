import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/theme/darkTheme'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <Helmet titleTemplate="%s | albano.portfolio" />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
