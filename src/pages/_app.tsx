import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { Header } from '../components/Header'
import { ShopCartSidebar } from '../components/ShopCartSidebar'
import CartContext from '../contexts/CartContext'

// every time something happen, App will re-render, so it is recommended to
// leave globalStyles() out of the App function because it's values don't change
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Container>
        <Header />

        <Component {...pageProps} />

        <ShopCartSidebar />
      </Container>
    </CartContext>
  )
}
