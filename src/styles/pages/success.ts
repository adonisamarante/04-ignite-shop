import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImagesWrapper = styled('div', {
  position: 'relative',

  width: '100%',
  height: 145,

  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  width: 145,
  height: 145,
  borderRadius: 1000,
  padding: '0.25rem',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '-15px 8px 16px rgba(0, 0, 0, 0.4)',

  marginLeft: -26,
  marginRight: -26,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
