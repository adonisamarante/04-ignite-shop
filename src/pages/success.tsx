import Link from 'next/link'
import {
  ImageContainer,
  ImagesWrapper,
  SuccessContainer,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        {/* for crawlers to not index this page, so it wont show on Google, etc... */}
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImagesWrapper>
          {products &&
            products.map((product) => (
              <ImageContainer key={product.imageUrl}>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            ))}
        </ImagesWrapper>

        {products &&
          (products.length === 1 ? (
            <p>
              Uhuul <strong>{customerName}</strong>, sua camiseta{' '}
              <strong>{products[0].name}</strong> já está a caminho da sua casa
            </p>
          ) : (
            <p>
              Uhuul <strong>{customerName}</strong>, sua compra de{' '}
              {products.length} camisetas já está a caminho da sua casa
            </p>
          ))}

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const productList = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  console.log('products list', productList)

  return {
    props: {
      customerName,
      products: productList,
    },
  }
}
