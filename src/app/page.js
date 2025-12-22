'use client'
import { Box } from '@chakra-ui/react'
import Hero from '@/app/sections/Hero'
import WhatWeDo from './sections/WhatWeDo'
import Projects from './sections/Projects'

export default function Home() {
  return (
    <Box bg="cream.100" minHeight="100vh">
      {/* Hero takes full screen */}
      <Hero />
      <WhatWeDo />
      <Projects />
    </Box>
  )
}