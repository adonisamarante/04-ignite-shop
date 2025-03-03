import { Product } from 'use-shopping-cart/core'
import { Container, ImageWrapper, ProductInfoWrapper } from './styles'

interface ShopCartCardProps {
  product: Product
}

export function ShopCartCard({ product }: ShopCartCardProps) {
  return (
    <Container>
      <ImageWrapper />

      <ProductInfoWrapper>
        <div>
          <span className="shirt-name">{product.name}</span>
          <span className="price">R$ {product.price}</span>
        </div>

        <button className="button-remove">Remover</button>
      </ProductInfoWrapper>
    </Container>
  )
}
