import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem', // done in the carrousel config (spacing)
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 2rem 1.25rem 1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
        lineHeight: '160%',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
        lineHeight: '140%',
      },
    },

    button: {
      backgroundColor: '$green500',
      padding: '0.75rem',
      borderRadius: 6,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&:hover': {
        backgroundColor: '$green300',
        cursor: 'pointer',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
