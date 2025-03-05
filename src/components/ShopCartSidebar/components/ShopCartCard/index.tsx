import { Product } from 'use-shopping-cart/core'
import { Container, ImageWrapper, ProductInfoWrapper } from './styles'
import { useShoppingCart } from 'use-shopping-cart'
import { formatPrice } from '@/src/utils/formatters'

interface ShopCartCardProps {
  product: Product
}

export function ShopCartCard({ product }: ShopCartCardProps) {
  const { removeItem } = useShoppingCart()
  const price = formatPrice(product.price)

  return (
    <Container>
      <ImageWrapper />

      <ProductInfoWrapper>
        <div>
          <span className="shirt-name">{product.name}</span>
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
