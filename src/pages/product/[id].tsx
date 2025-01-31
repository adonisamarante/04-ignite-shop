import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit pariatur nam labore! Repellat rem fugiat reiciendis
          perferendis voluptatum illo iusto praesentium, magnam eaque recusandae
          cupiditate accusamus expedita molestiae sed vitae.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
