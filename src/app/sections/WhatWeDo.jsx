'use client'

import { Box, Container, Heading, Text, Grid, VStack, HStack } from '@chakra-ui/react'

// WhatWeDo section
export default function WhatWeDo() {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      bg="gray.250"
      position="relative"
      overflow="hidden"
    >

      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        width="500px"
        height="500px"
        bg="gold.500"
        opacity={0.05}
        borderRadius="full"
        filter="blur(80px)"
      />

      <Container maxW="1400px">
        {/* Section Header - Centered */}
        <VStack align="center" gap={3} mb={16} textAlign="center">
          <HStack gap={3} align="center">
            <Box width="40px" height="4px" bg="gold.500" />
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="navy.900"
            >
              What We Do
            </Text>
            <Box width="40px" height="4px" bg="gold.500" />
          </HStack>

          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="black"
            color="gray.900"
            lineHeight={1.1}
            letterSpacing="tight"
            maxW="900px"
          >
            Student-led engineering,{' '}
            <Text as="span" color="brand.600">
              projects
            </Text>
            , and{' '}
            <Text as="span" color="gold.500">
              community
            </Text>
            .
          </Heading>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            lineHeight={1.8}
            maxW="700px"
          >
            Tesla Works is a project-based makerspace where students design, build, and
            launch hardware and software ideas together—from first sketch to working prototype.
          </Text>
        </VStack>

        {/* Feature Cards - Clean Aligned Grid */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
          position="relative"
        >
          {/* Card 1 - Project Teams */}
          <Box
            bg="navy.900"
            borderRadius="2xl"
            p={{ base: 8, md: 10 }}
            position="relative"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Decorative corner accent */}
            <Box
              position="absolute"
              top={0}
              right={0}
              width="120px"
              height="120px"
              bg="gold.500"
              opacity={0.1}
              borderBottomLeftRadius="full"
            />

            <VStack align="center" gap={4} position="relative" zIndex={1} textAlign="center">
              <Text fontSize="5xl">💡</Text>

              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                color="white"
              >
                Project Teams
              </Heading>

              <Text
                fontSize="md"
                color="gray.300"
                lineHeight={1.8}
              >
                Join or start project teams, building everything from trebuchets and
                launchers to LEDs, hardware mods, and full-stack apps.
              </Text>
            </VStack>
          </Box>

          {/* Card 2 - Hands-On Workshops */}
          <Box
            bg="white"
            border="2px solid"
            borderColor="gray.200"
            borderRadius="2xl"
            p={{ base: 8, md: 10 }}
            position="relative"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            }}
          >
            <VStack align="center" gap={4} textAlign="center">
              <Text fontSize="5xl">🔧</Text>

              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                color="gray.900"
              >
                Hands-On Workshops
              </Heading>

              <Text
                fontSize="md"
                color="gray.600"
                lineHeight={1.8}
              >
                Learn PCB design, soldering, microcontrollers, and practical tools you
                won't get from lecture alone.
              </Text>
            </VStack>
          </Box>

          {/* Card 3 - Community & Events */}
          <Box
            bg="brand.600"
            borderRadius="2xl"
            p={{ base: 8, md: 10 }}
            position="relative"
            overflow="hidden"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: 'translateY(-4px)',
              bg: 'brand.700',
              boxShadow: '0 20px 60px rgba(139, 21, 56, 0.3)',
            }}
          >
            {/* Decorative pattern overlay */}
            <Box
              position="absolute"
              bottom={-20}
              left={-20}
              width="200px"
              height="200px"
              border="40px solid"
              borderColor="rgba(255, 255, 255, 0.05)"
              borderRadius="full"
            />

            <VStack align="center" gap={4} position="relative" zIndex={1} textAlign="center">
              <Text fontSize="5xl">🤝</Text>

              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                color="white"
              >
                Community & Events
              </Heading>

              <Text
                fontSize="md"
                color="rgba(255, 255, 255, 0.9)"
                lineHeight={1.8}
              >
                Build with other students, demo your work, and connect with industry
                partners who care about real projects.
              </Text>
            </VStack>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}