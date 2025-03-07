import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (products.length === 0) {
    return res.status(400).json({ error: 'The shopping cart is empty.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    line_items: products.map((product: any) => ({
      price_data: {
        currency: 'BRL',
        unit_amount: product.price,
        product_data: {
          name: product.name,
          images: [product.image],
        },
      },
      quantity: product.quantity,
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
