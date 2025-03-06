import { styled } from '@/src/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  width: '100%',
  height: '5.875rem',
})

export const ImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: '6.375rem',
  height: '5.812rem',
  borderRadius: 8,

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
})

export const ProductInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  overflow: 'hidden',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem',

    '.shirt-name': {
      fontSize: '$md',
      lineHeight: '160%',
      color: '$gray300',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    '.price': {
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: '160%',
      color: '$gray100',
    },
  },

  '.button-remove': {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$green500',
    lineHeight: '160%',

    width: 'fit-content',
    background: 'transparent',
    border: 0,

    '&:hover': {
      color: '$green300',
      cursor: 'pointer',
    },
  },
})
