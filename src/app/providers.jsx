'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { system } from '../theme'
import { EmotionCacheProvider } from './emotion-cache-provider'

export function Providers({ children }) {
  return (
    <EmotionCacheProvider>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </EmotionCacheProvider>
  )
}
