'use client'

import { Box, Container, Heading, Text, Button, HStack, VStack } from '@chakra-ui/react'

// Need to add mobile compatibility
export default function Hero() {
  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden" // Prevents image from overflowing
    >

      <Box
        as="img"
        src="/trebuchet.jpg"
        alt="Hero background"
        position="absolute"
        top="-10%"
        left="50%"
        transform="translateX(-50%)"
        minWidth="100%"
        minHeight="100%"
        width="auto"
        height="auto"
        objectFit="cover"
        zIndex={0}
      />

      {/* Dark overlay for text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.4)" // 40% dark overlay
        zIndex={1}
      />
      {/* Content Container */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        zIndex={2}
      >
        {/* Centered Content */}
        <VStack
          height="100%"
          justify="center"
          align="center"
          textAlign="center"
          gap={6}
          px={{ base: 4, md: 8 }}
        >
          {/* Main Headline */}
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            color="white"
            fontFamily="heading"
            lineHeight={1.2}
            maxW="900px"
            // Subtle text shadow for readability
            textShadow="0 2px 20px rgba(0, 0, 0, 0.6)"
          >
            Student-Led Innovation
          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="white"
            maxW="700px"
            lineHeight={1.7}
            textShadow="0 2px 10px rgba(0, 0, 0, 0.6)"
          >
            A project-based community of makers turning ideas into reality through
            engineering, creativity, and hands-on builds.
          </Text>

          {/* Call-to-Action Buttons */}
          <HStack gap={4} pt={4}>
            {/* Primary CTA - Join Us */}
            <Button
              size="lg"
              minW="160px"
              bg="brand.500"
              color="white"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                bg: 'brand.600',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              Join Us
            </Button>

            {/* Secondary CTA - Learn More */}
            <Button
              size="lg"
              minW="160px"
              bg="transparent"
              color="white"
              px={8}
              py={6}
              fontSize="md"
              fontWeight="bold"
              borderRadius="md"
              border="2px solid"
              borderColor="white"
              _hover={{
                bg: 'white',
                color: 'dark.900',
                opacity: 0.9,
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              Learn More
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}