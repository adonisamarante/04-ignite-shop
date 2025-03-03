import { useRouter } from 'next/router'
import logoImg from '../../assets/logo.svg'
import { StyledHeader } from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { Handbag } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'

export function Header() {
  const { pathname } = useRouter()
  const isHomePage = pathname === '/'
  const isSuccess = pathname === '/success'

  const { handleCartClick } = useShoppingCart()

  return (
    <StyledHeader>
      {!isHomePage ? (
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      ) : (
        <Image src={logoImg} alt="" />
      )}

      {!isSuccess && (
        <button onClick={handleCartClick}>
          <Handbag size={24} weight="bold" color="#E1E1E6" />
          <div id="cartAmount">2</div>
        </button>
      )}
    </StyledHeader>
  )
}
