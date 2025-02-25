import { X } from '@phosphor-icons/react'
import {
  Overlay,
  Container,
  CloseButtonWrapper,
  CartInfoWrapper,
  ItemsListWrapper,
  TotalsWrapper,
  CheckoutButton,
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

          <TotalsWrapper>
            <div className="quantity-total">
              <span>Quantidade</span>
              <span>3 Itens</span>
            </div>
            <div className="price-total">
              <span>Valor total</span>
              <span>R$ 270,00</span>
            </div>
          </TotalsWrapper>

          <CheckoutButton>Finalizar compra</CheckoutButton>
        </CartInfoWrapper>
      </Container>

      <Overlay
        isVisible={isOpen ? 'visible' : 'hidden'}
        onClick={() => handleOpenCart(false)}
      />
    </>
  )
}
