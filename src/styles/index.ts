import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214', // background
      gray800: '#202024', // elements
      gray500: '#8D8D99', // icon
      gray300: '#C4C4CC', // text
      gray100: '#E1E1E6', // title

      green500: '#00875F', // principal
      green300: '#00B37E', // light
    },

    fontSizes: {
      md: '1.125rem', // 18
      lg: '1.25rem', // 20
      xl: '1.5rem', // 24
      '2xl': '2rem', // 32
    },
  },
})
