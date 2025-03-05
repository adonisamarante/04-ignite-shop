import { Product } from 'use-shopping-cart/core'
import { Container, ImageWrapper, ProductInfoWrapper } from './styles'
import { useShoppingCart } from 'use-shopping-cart'

interface ShopCartCardProps {
  product: Product
}

export function ShopCartCard({ product }: ShopCartCardProps) {
  const { removeItem } = useShoppingCart()

  return (
    <Container>
      <ImageWrapper />

      <ProductInfoWrapper>
        <div>
          <span className="shirt-name">{product.name}</span>
          <span className="price">R$ {product.price}</span>
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
