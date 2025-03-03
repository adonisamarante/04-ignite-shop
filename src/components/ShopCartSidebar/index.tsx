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
import { useShoppingCart } from 'use-shopping-cart'
import { Product } from 'use-shopping-cart/core'

export function ShopCartSidebar() {
  const { cartDetails, shouldDisplayCart, handleCloseCart } = useShoppingCart()

  const cartProducts = cartDetails ? Object.values(cartDetails) : []

  return (
    <>
      <Container isOpen={shouldDisplayCart ? 'open' : 'closed'}>
        <CloseButtonWrapper>
          <button id="closeButton" onClick={handleCloseCart}>
            <X size={24} weight="bold" color="#8D8D99" />
          </button>
        </CloseButtonWrapper>

        <CartInfoWrapper>
          <span id="title">Sacola de compras</span>

          <ItemsListWrapper>
            {cartProducts.map((product: Product) => (
              <ShopCartCard key={product.id} product={product} />
            ))}
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
        isVisible={shouldDisplayCart ? 'visible' : 'hidden'}
        onClick={handleCloseCart}
      />
    </>
  )
}
