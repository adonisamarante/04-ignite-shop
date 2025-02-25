import { styled } from '@/src/styles'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  zIndex: 2,
  top: 0,
  right: 0,

  height: '100vh',
  width: '30rem',
  backgroundColor: '$gray800',

  transition: 'transform 0.3s ease-in-out',

  variants: {
    isOpen: {
      open: {
        transform: 'translateX(0)',
      },
      closed: {
        transform: 'translateX(100%)',
      },
    },
  },
})

export const CloseButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',

  padding: '1.5rem',

  '#closeButton': {
    width: 'fit-content',
    background: 'transparent',

    border: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const CartInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 3rem 3rem 3rem',

  '#title': {
    fontSize: '$lg',
    lineHeight: '160%',
    fontWeight: 'bold',
  },
})

export const ItemsListWrapper = styled('div', {
  marginTop: '2rem',
  flex: 1,
})

export const TotalsWrapper = styled('div', {
  width: '100%',
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  '.quantity-total': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'span:first-child': {
      fontSize: 16,
      lineHeight: '160%',
    },
    span: {
      fontSize: '$md',
      lineHeight: '160%',
    },
  },

  '.price-total': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'span:first-child': {
      fontSize: 18,
      lineHeight: '160%',
      fontWeight: 'bold',
    },
    span: {
      fontSize: '$xl',
      lineHeight: '160%',
      fontWeight: 'bold',
    },
  },
})

export const CheckoutButton = styled('button', {
  height: '4.312rem',
  backgroundColor: '$green500',
  borderRadius: 8,
  marginTop: '3.437rem',

  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: '160%',
  color: '$white',

  '&:hover': {
    backgroundColor: '$green300',
  },
})

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 1,

  variants: {
    isVisible: {
      visible: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      hidden: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },
})
