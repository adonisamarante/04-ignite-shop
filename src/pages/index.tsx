import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Head from 'next/head'
import { Handbag } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'
import type { Product as ShoppingCartProduct } from 'use-shopping-cart/core'
import { formatPrice } from '../utils/formatters'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: number
}

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto', // 3
      spacing: 48,
    },
  })

  const { addItem, cartDetails } = useShoppingCart()

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
      {/* everything added to this Head, will be "transported" to the
          Head in the "_document.tsx" file */}
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          const price = formatPrice(product.price)

          return (
            // prefetch will work only on hover
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{price}</span>
                  </div>

                  <button onClick={(event) => handleAddToCart(event, product)}>
                    <Handbag size={24} weight="bold" color="#E1E1E6" />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

// a way to load information from the server side
// recommended for sensitive code (authentication, database)
// CAUTION: it can slow down the loading of the entire page
// export const getServerSideProps: GetServerSideProps = async () => {

// to get data that will not change often
// in dev environment it'll work exactly like "GetServerSideProps", must be tested in production or running build
// since it will only run on build, there's no access to current context info like, logged user, cookies, headers
// if the request needs a cookie or info from logged user, then it'll not work using "GetStaticProps"
export const getStaticProps: GetStaticProps = async () => {
  // expand is getting information from another related entity from database
  // in this case, default_price is the id from the related entity, price
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    // getting the actual price object from the "expand: ['data.default_price']"
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // numbers in seconds, this static component will update every 2 hours
  }
}
