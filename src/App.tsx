import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { DeliveryContextProvider } from './context/delivery'
import { OrderContextProvider } from './context/order'
import { GlobalStyles } from './global'
import { Router } from './Router'
import { defaultTheme } from './themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <DeliveryContextProvider>
            <Router />
          </DeliveryContextProvider>
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
