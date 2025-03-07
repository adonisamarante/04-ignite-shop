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
import { formatPrice } from '@/src/utils/formatters'
import React, { useState } from 'react'
import axios from 'axios'

export function ShopCartSidebar() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const {
    cartDetails,
    shouldDisplayCart,
    handleCloseCart,
    cartCount,
    totalPrice,
  } = useShoppingCart()

  const cartProducts = cartDetails ? Object.values(cartDetails) : []
  const totalOrderPrice = formatPrice(totalPrice || 0)

  async function handleBuyProducts(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    try {
      setIsCreatingCheckoutSession(true)

      console.log('entrou')

      const response = await axios.post('/api/checkout', {
        products: cartProducts,
      })

      console.log('response', response)

      const { checkoutUrl } = response.data

      // checkoutUrl is returned from Stripe and will go to an external site
      // in this situation is recommended to do this
      window.location.href = checkoutUrl

      // no need to do setIsCreatingCheckoutSession(false) here because
      // the user will be redirected to another page anyways
    } catch (err) {
      console.log(err)

      setIsCreatingCheckoutSession(false)

      // TODO: conectar com alguma ferramenta de observabilidade (Datadog / Sentry)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

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
              <span>
                {cartCount} {cartCount && cartCount > 1 ? 'Itens' : 'Item'}
              </span>
            </div>
            <div className="price-total">
              <span>Valor total</span>
              <span>{totalOrderPrice}</span>
            </div>
          </TotalsWrapper>

          <CheckoutButton
            onClick={(event) => handleBuyProducts(event)}
            disabled={isCreatingCheckoutSession}
          >
            Finalizar compra
          </CheckoutButton>
        </CartInfoWrapper>
      </Container>

      <Overlay
        isVisible={shouldDisplayCart ? 'visible' : 'hidden'}
        onClick={handleCloseCart}
      />
    </>
  )
}
