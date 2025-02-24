import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container, Overlay, Sidebar } from '../styles/pages/app'

import { useState } from 'react'
import { Header } from '../components/Header'

// every time something happen, App will re-render, so it is recommended to
// leave globalStyles() out of the App function because it's values don't change
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openCart, setOpenCart] = useState(false)

  function handleOpenCard(value: boolean) {
    setOpenCart(value)
  }

  return (
    <>
      <Container>
        <Header handleOpenCart={handleOpenCard} />

        <Component {...pageProps} />

        <Sidebar isOpen={openCart ? 'open' : 'closed'}>
          <button onClick={() => setOpenCart(false)}>Close</button>
        </Sidebar>
        <Overlay
          isVisible={openCart ? 'visible' : 'hidden'}
          onClick={() => setOpenCart(false)}
        />
      </Container>
    </>
  )
}
