import { styled } from '@/src/styles'

export const StyledHeader = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    position: 'relative',
    height: '3rem',
    width: '3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6,
    backgroundColor: '$gray800',
    boxShadow: 'none',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '$gray500',
    },

    '#cartAmount': {
      position: 'absolute',
      top: '-0.65rem',
      right: '-0.65rem',

      height: '1.75rem',
      width: '1.75rem',

      border: '4px solid $gray900',
      backgroundColor: '$green300',
      borderRadius: 50,

      fontSize: '0.875rem',
      fontWeight: 'bold',
    },
  },
})
