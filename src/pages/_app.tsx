import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// every time something happen, App will re-render, so it is recommended to
// leave globalStyles() out of the App function because it's values don't change
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const isHomePage = pathname === '/'

  return (
    <Container>
      <Header>
        {!isHomePage ? (
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
        ) : (
          <Image src={logoImg} alt="" />
        )}
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
