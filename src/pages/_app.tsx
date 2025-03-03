import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { useState } from 'react'
import { Header } from '../components/Header'
import { ShopCartSidebar } from '../components/ShopCartSidebar'
import CartContext from '../contexts/CartContext'

// every time something happen, App will re-render, so it is recommended to
// leave globalStyles() out of the App function because it's values don't change
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openCart, setOpenCart] = useState(false)

  function handleOpenCart(value: boolean) {
    setOpenCart(value)
  }

  return (
    <CartContext>
      <Container>
        <Header handleOpenCart={handleOpenCart} />

        <Component {...pageProps} />

        <ShopCartSidebar isOpen={openCart} handleOpenCart={handleOpenCart} />
      </Container>
    </CartContext>
  )
}
