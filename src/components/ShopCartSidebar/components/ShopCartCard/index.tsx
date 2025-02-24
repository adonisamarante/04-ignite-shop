import { Container, ImageWrapper, ProductInfoWrapper } from './styles'

export function ShopCartCard() {
  return (
    <Container>
      <ImageWrapper />

      <ProductInfoWrapper>
        <div>
          <span className="shirt-name">Camiseta Beyond the Limits</span>
          <span className="price">R$ 79,90</span>
        </div>

        <button className="button-remove">Remover</button>
      </ProductInfoWrapper>
    </Container>
  )
}
