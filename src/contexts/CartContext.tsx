'use client'
import { loadStripe } from '@stripe/stripe-js'
import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)

function CartContext({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      shouldPersist={false}
      cartMode="checkout-session"
      stripe={stripePromise as unknown as string}
      currency="BRL"
    >
      <>{children}</>
    </CartProvider>
  )
}

export default CartContext
