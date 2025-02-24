import { X } from '@phosphor-icons/react'
import {
  Overlay,
  Container,
  CloseButtonWrapper,
  CartInfoWrapper,
  ItemsListWrapper,
} from './styles'
import { ShopCartCard } from './components/ShopCartCard'

interface ShopCartSidebarProps {
  isOpen: boolean
  handleOpenCart: (value: boolean) => void
}

export function ShopCartSidebar({
  isOpen,
  handleOpenCart,
}: ShopCartSidebarProps) {
  return (
    <>
      <Container isOpen={isOpen ? 'open' : 'closed'}>
        <CloseButtonWrapper>
          <button id="closeButton" onClick={() => handleOpenCart(false)}>
            <X size={24} weight="bold" color="#8D8D99" />
          </button>
        </CloseButtonWrapper>

        <CartInfoWrapper>
          <span id="title">Sacola de compras</span>

          <ItemsListWrapper>
            <ShopCartCard />
          </ItemsListWrapper>

          <span style={{ marginTop: '2rem' }}>TESTE</span>
        </CartInfoWrapper>
      </Container>

      <Overlay
        isVisible={isOpen ? 'visible' : 'hidden'}
        onClick={() => handleOpenCart(false)}
      />
    </>
  )
}
