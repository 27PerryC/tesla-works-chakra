'use client'

import { Box, Container, Heading, Text, Grid, Button, VStack, HStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Light Show',
      image: '/lightshow.jpg',
      description: 'A fully programmable LED light show built by Tesla Works members, synced to music and live events.',
      accent: 'brand.600',
    },
    {
      title: 'Barbie Car',
      image: '/barbiecar.jpg',
      description: 'A high performance rebuild of a kid sized EV featuring upgraded motors, a higher-capacity battery system, and custom electronics.',
      accent: 'gold.500',
    },
  ]

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
        bottom="-20%"
        left="-10%"
        width="600px"
        height="600px"
        bg="brand.600"
        opacity={0.03}
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="1400px">
        <VStack gap={4} mb={16} textAlign="center">
          <HStack gap={3} align="center">
            <Box width="400px" height="4px" bg="gold.500" />
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="black"
              color="gray.900"
              letterSpacing="tight"
            >
              Featured Projects
            </Heading>
            <Box width="400px" height="4px" bg="gold.500" />
          </HStack>
        </VStack>

        {/* Project cards grid */}
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={12}
        >
          {projects.map((project, index) => (
            <Box
              key={index} // Create a key to keep track of multiple project cards 
              role="group"
              position="relative"
              bg="gray.50"
              borderRadius="2xl"
              overflow="hidden"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Project image wrapper */}
              <Box
                position="relative"
                width="100%"
                height={{ base: '250px', md: '350px' }}
                bg="gray.200"
                overflow="hidden"
              >
                {/* Project image */}
                <Box
                  as="img"
                  src={project.image}
                  alt={project.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  transition="transform 0.6s ease"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
                {/* Colored overlay on hover */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg={project.accent}
                  opacity={0}
                  transition="opacity 0.4s ease"
                  _groupHover={{
                    opacity: 0.1,
                  }}
                />
              </Box>

              {/* Project card content */}
              <VStack align="stretch" p={8} gap={4}>
                <Box>
                  <Box
                    width="40px"
                    height="3px"
                    bg={project.accent}
                    mb={3}
                  />
                  <Heading
                    as="h3"
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.900"
                  >
                    {project.title}
                  </Heading>
                </Box>

                {/* Description */}
                <Text
                  fontSize="md"
                  color="gray.600"
                  lineHeight={1.8}
                >
                  {project.description}
                </Text>

                {/* Get Involved button */}
                <Button
                  size="lg"
                  bg={project.accent}
                  color="white"
                  fontWeight="bold"
                  borderRadius="md"
                  px={8}
                  mt={4}
                  alignSelf="flex-start"
                  _hover={{
                    bg: project.accent,
                    opacity: 0.9,
                    transform: 'translateX(4px)',
                  }}
                  transition="all 0.3s ease"
                  rightIcon={
                    <Text fontSize="lg">→</Text>
                  }
                >
                  Get involved
                </Button>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}