import { Overlay, Sidebar } from './styles'

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
      <Sidebar isOpen={isOpen ? 'open' : 'closed'}>
        <button onClick={() => handleOpenCart(false)}>Close</button>
      </Sidebar>
      <Overlay
        isVisible={isOpen ? 'visible' : 'hidden'}
        onClick={() => handleOpenCart(false)}
      />
    </>
  )
}
