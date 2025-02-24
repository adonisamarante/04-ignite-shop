import { styled } from '..'

export const Container = styled('div', {
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Sidebar = styled('aside', {
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
