import { stripe } from '@/src/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import type { Product as ShoppingCartProduct } from 'use-shopping-cart/core'
import { IProduct } from '..'
import { formatPrice } from '@/src/utils/formatters'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    currency: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addItem, cartDetails } = useShoppingCart()

  if (isFallback) {
    return <p>Loading...</p>
  }

  const price = formatPrice(product.price)

  function handleAddToCart(
    event: React.MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    event.preventDefault()
    event.stopPropagation()

    const cartKeys = Object.keys(cartDetails || {})
    const productExistsInCart = cartKeys.includes(product.id)

    if (productExistsInCart) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      currency: 'BRL',
    } as ShoppingCartProduct)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{price}</span>

          <p>{product.description}</p>

          <button onClick={(event) => handleAddToCart(event, product)}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

// for static pages that receive params, getStaticPaths is required
export const getStaticPaths: GetStaticPaths = async () => {
  // *request* getting mostly sold / accessed products

  // having the mostly sold products, the others would get 404 with "fallback" false
  // "fallback" true will get the id of the product that is not in the list
  // and run "getStaticProps" to then generate a static page for that product
  // in this case, must check "isFallback" in the Product component
  // if not, the page will render with undefined product and crash
  // you can also leave "paths" empty []
  return {
    paths: [{ params: { id: 'prod_RgPUpDA2datElu' } }],
    fallback: true,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
        currency: price.currency,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
