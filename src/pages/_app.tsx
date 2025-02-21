import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Handbag } from '@phosphor-icons/react'

import logoImg from '../assets/logo.svg'
import { Container, Header, Overlay, Sidebar } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

// every time something happen, App will re-render, so it is recommended to
// leave globalStyles() out of the App function because it's values don't change
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [openCart, setOpenCart] = useState(false)

  const { pathname } = useRouter()
  const isHomePage = pathname === '/'

  return (
    <>
      <Container>
        <Header>
          {!isHomePage ? (
            <Link href="/">
              <Image src={logoImg} alt="" />
            </Link>
          ) : (
            <Image src={logoImg} alt="" />
          )}
          <div onClick={() => setOpenCart(true)}>
            <Handbag size={24} weight="bold" color="#E1E1E6" />
            <div />
          </div>
        </Header>

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
