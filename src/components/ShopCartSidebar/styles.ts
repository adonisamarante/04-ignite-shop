import { styled } from '@/src/styles'

export const Container = styled('aside', {
  position: 'absolute',
  zIndex: 2,
  top: 0,
  right: 0,

  height: '100vh',
  width: '30rem',
  backgroundColor: '$gray800',
  padding: '1.5rem',

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

export const CloseButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',

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
