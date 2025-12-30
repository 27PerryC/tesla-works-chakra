import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary blue - your main accent color
        brand: {
          400: { value: 'hsl(221, 92%, 65%)' },  // lighter - highlights
          500: { value: 'hsl(221, 92%, 55%)' },  // default - buttons, links
          600: { value: 'hsl(221, 92%, 45%)' },  // hover state
          700: { value: 'hsl(221, 92%, 35%)' },  // active/pressed state
        },

        // Dark backgrounds (header, footer, dark cards)
        dark: {
          700: { value: 'hsl(0, 0%, 15%)' },    // lighter dark
          800: { value: 'hsl(0, 0%, 12%)' },    // dark sections
          900: { value: 'hsl(0, 0%, 9%)' },     // darkest - header/footer
        },

        // Light backgrounds
        light: {
          50: { value: 'hsl(0, 0%, 98%)' },     // almost white
          100: { value: 'hsl(0, 0%, 96%)' },    // light gray bg
          200: { value: 'hsl(0, 0%, 90%)' },    // borders, dividers
        },
      },
      fonts: {
        heading: { value: '"IBM Plex Sans", sans-serif' },
        body: { value: '"IBM Plex Sans", sans-serif' },
      },
    },
  },

  globalCss: {
    body: {
      bg: '{colors.light.100}',
      color: '{colors.dark.900}',
    },
  },
})

export const system = createSystem(defaultConfig, config)