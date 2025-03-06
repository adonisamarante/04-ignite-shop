import { Product } from 'use-shopping-cart/core'
import { Container, ImageWrapper, ProductInfoWrapper } from './styles'
import { useShoppingCart } from 'use-shopping-cart'
import { formatPrice } from '@/src/utils/formatters'
import Image from 'next/image'

interface ShopCartCardProps {
  product: Product
}

export function ShopCartCard({ product }: ShopCartCardProps) {
  const { removeItem } = useShoppingCart()
  const price = formatPrice(product.price)

  return (
    <Container>
      <ImageWrapper>
        <Image src={product.image as string} width={95} height={95} alt="" />
      </ImageWrapper>

      <ProductInfoWrapper>
        <div>
          <span className="shirt-name" title={product.name}>
            {product.name}
          </span>
          <span className="price">{price}</span>
        </div>

        <button
          className="button-remove"
          onClick={() => removeItem(product.id)}
        >
          Remover
        </button>
      </ProductInfoWrapper>
    </Container>
  )
}
