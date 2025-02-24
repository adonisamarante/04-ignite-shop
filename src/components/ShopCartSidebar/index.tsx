import { X } from '@phosphor-icons/react'
import { Overlay, Container, CloseButtonContainer } from './styles'

interface ShopCartSidebarProps {
  isOpen: boolean
  handleOpenCart: (value: boolean) => void
}

export function ShopCartSidebar({
  isOpen,
  handleOpenCart,
}: ShopCartSidebarProps) {
  return (
    <>
      <Container isOpen={isOpen ? 'open' : 'closed'}>
        <CloseButtonContainer>
          <button id="closeButton" onClick={() => handleOpenCart(false)}>
            <X size={24} weight="bold" color="#8D8D99" />
          </button>
        </CloseButtonContainer>
      </Container>

      <Overlay
        isVisible={isOpen ? 'visible' : 'hidden'}
        onClick={() => handleOpenCart(false)}
      />
    </>
  )
}
