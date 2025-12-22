import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: {
          800: { value: 'hsl(212, 45%, 18%)' },
          900: { value: 'hsl(212, 45%, 14%)' },
        },
        brand: {
          600: { value: 'hsl(345, 100%, 28%)' },
          700: { value: 'hsl(345, 100%, 24%)' },
        },
        gold: {
          500: { value: 'hsl(46, 100%, 60%)' },
        },
        cream: {
          50: { value: '#FAF8F3' },
          100: { value: '#F7F3ED' },
        }
      },
      fonts: {
        heading: { value: '"IBM Plex Sans", sans-serif' },
        body: { value: '"IBM Plex Sans", sans-serif' },
      },
    },
  },

  globalCss: {
    body: {
      bg: '{colors.gray.100}',
      color: 'gray.900',
    },
  },
})

export const system = createSystem(defaultConfig, config)