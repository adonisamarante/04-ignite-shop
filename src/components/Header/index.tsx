import { useRouter } from 'next/router'
import logoImg from '../../assets/logo.svg'
import { StyledHeader } from './styles'
import Link from 'next/link'
import Image from 'next/image'

import { Handbag } from '@phosphor-icons/react'

interface HeaderProps {
  handleOpenCart: (value: boolean) => void
}

export function Header({ handleOpenCart }: HeaderProps) {
  const { pathname } = useRouter()
  const isHomePage = pathname === '/'
  const isSuccess = pathname === '/success'

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
        <div onClick={() => handleOpenCart(true)}>
          <Handbag size={24} weight="bold" color="#E1E1E6" />
          <div id="cartAmount">2</div>
        </div>
      )}
    </StyledHeader>
  )
}
