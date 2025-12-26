'use client'

import { Box, Container, Heading, Text, VStack, HStack, Grid, Link, Input, Textarea, Button } from '@chakra-ui/react'
import { HiArrowRight, HiMail, HiLocationMarker, HiClock, HiPhone } from 'react-icons/hi'

export default function Contact() {
  return (
    <Box bg="dark.900" minHeight="100vh" overflow="hidden">

      {/* Hero - Full screen split */}
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        minHeight="100vh"
      >
        {/* Left side - Big typography */}
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          theustifyContent="center"
          p={{ base: 8, md: 16 }}
          pt={{ base: 32, lg: 16 }}
        >
          {/* Large number */}
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize={{ base: '300px', md: '500px' }}
            fontWeight="black"
            color="white"
            opacity={0.02}
            lineHeight={1}
            userSelect="none"
          >
            ?
          </Text>
          {/* Contact with line */}
          <VStack align="flex-start" gap={6} position="relative" zIndex={1} maxW="500px">
            <HStack gap={3}>
              <Box width="50px" height="3px" bg="brand.400" />
              <Text
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.400"
              >
                Contact
              </Text>
            </HStack>

            {/* Main heading */}
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
                fontWeight="black"
                color="white"
                lineHeight={0.9}
                letterSpacing="tight"
              >
                Let's
              </Heading>
              <Heading
                as="h1"
                fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
                fontWeight="black"
                color="brand.400"
                lineHeight={0.9}
                letterSpacing="tight"
              >
                talk.
              </Heading>
            </Box>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.400"
              lineHeight={1.8}
              maxW="400px"
            >
              Have a project idea? Want to join the team?
              We're always excited to hear from fellow makers.
            </Text>

            {/* Quick contact info */}
            <VStack align="flex-start" gap={4} pt={4}>
              <HStack gap={3} color="gray.400" _hover={{ color: 'brand.400' }} transition="color 0.2s">
                <Box as={HiMail} fontSize="20px" />
                <Text fontSize="md">contact@teslaworks.org</Text>
              </HStack>
              <HStack gap={3} color="gray.400" _hover={{ color: 'brand.400' }} transition="color 0.2s">
                <Box as={HiLocationMarker} fontSize="20px" />
                <Text fontSize="md">Makerspace Room 123, Engineering Building</Text>
              </HStack>
              <HStack gap={3} color="gray.400" _hover={{ color: 'brand.400' }} transition="color 0.2s">
                <Box as={HiClock} fontSize="20px" />
                <Text fontSize="md">Thursdays, 6–8 PM</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        {/* Contact form card - right side */}
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 8, md: 16 }}
          bg="light.100"
          clipPath={{ base: 'none', lg: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Grid pattern */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={0.03}
            backgroundImage="linear-gradient(hsl(0, 0%, 0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0, 0%, 0%) 1px, transparent 1px)"
            backgroundSize="40px 40px"
          />

          <Box
            bg="white"
            borderRadius="3xl"
            p={{ base: 8, md: 12 }}
            width="100%"
            maxW="500px"
            position="relative"
            boxShadow="0 30px 60px hsla(0, 0%, 0%, 0.1)"
          >
            {/* Form header */}
            <VStack align="flex-start" gap={2} mb={8}>
              <Heading as="h2" fontSize="2xl" fontWeight="bold" color="dark.900">
                Send us a message
              </Heading>
              <Text fontSize="sm" color="gray.500">
                We'll get back to you as soon as we can.
              </Text>
            </VStack>

            {/* Contact form */}
            <VStack as="form" gap={5}>
              <Box width="100%">
                <Text fontSize="sm" fontWeight="medium" color="dark.900" mb={2}>
                  Name
                </Text>
                <Input
                  placeholder="Your name"
                  bg="light.50"
                  border="2px solid"
                  borderColor="light.200"
                  borderRadius="xl"
                  px={4}
                  py={6}
                  fontSize="md"
                  _hover={{ borderColor: 'light.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </Box>

              <Box width="100%">
                <Text fontSize="sm" fontWeight="medium" color="dark.900" mb={2}>
                  Email
                </Text>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  bg="light.50"
                  border="2px solid"
                  borderColor="light.200"
                  borderRadius="xl"
                  px={4}
                  py={6}
                  fontSize="md"
                  _hover={{ borderColor: 'light.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </Box>

              <Box width="100%">
                <Text fontSize="sm" fontWeight="medium" color="dark.900" mb={2}>
                  What's this about?
                </Text>
                <Input
                  placeholder="Joining, partnerships, general question..."
                  bg="light.50"
                  border="2px solid"
                  borderColor="light.200"
                  borderRadius="xl"
                  px={4}
                  py={6}
                  fontSize="md"
                  _hover={{ borderColor: 'light.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </Box>

              <Box width="100%">
                <Text fontSize="sm" fontWeight="medium" color="dark.900" mb={2}>
                  Message
                </Text>
                <Textarea
                  placeholder="Tell us more..."
                  bg="light.50"
                  border="2px solid"
                  borderColor="light.200"
                  borderRadius="xl"
                  px={4}
                  py={4}
                  fontSize="md"
                  rows={4}
                  resize="none"
                  _hover={{ borderColor: 'light.200' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: 'none' }}
                />
              </Box>

              <Button
                type="submit"
                width="100%"
                bg="dark.900"
                color="white"
                py={7}
                fontSize="md"
                fontWeight="bold"
                borderRadius="xl"
                transition="all 0.3s ease"
                _hover={{
                  bg: 'brand.500',
                  transform: 'translateY(-2px)',
                }}
                rightIcon={<Box as={HiArrowRight} />}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>
      </Grid>

      {/* Quick action cards */}
      <Box bg="light.100" py={20} px={{ base: 4, md: 8 }}>
        <Container maxW="1200px">
          {/* Section header */}
          <HStack justify="center" mb={12}>
            <Box flex={1} height="1px" bg="light.200" />
            <Text
              px={6}
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="gray.500"
            >
              Or reach out directly
            </Text>
            <Box flex={1} height="1px" bg="light.200" />
          </HStack>

          {/* 3 Card grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
          >
            {/* Card 1 - Join */}
            <Link
              href="/apply"
              _hover={{ textDecoration: 'none' }}
              height="100%"
              width="100%"
            >
              <Box
                height="100%"
                width="100%"
                bg="dark.900"
                borderRadius="2xl"
                p={8}
                border="2px solid"
                borderColor="dark.200"
                position="relative"
                overflow="hidden"
                transition="all 0.4s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 40px hsla(0, 0%, 0%, 0.2)',
                }}
                role="group"
              >
                {/* Hover gradient */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="brand.500"
                  opacity={0}
                  transition="opacity 0.4s ease"
                  _groupHover={{ opacity: 1 }}
                />

                <VStack align="flex-start" gap={4} position="relative" zIndex={1}>
                  <Text fontSize="4xl" fontWeight="black" color="brand.400" _groupHover={{ color: 'white' }} transition="color 0.3s">
                    01
                  </Text>
                  <Heading as="h3" fontSize="xl" fontWeight="bold" color="white">
                    Join the Team
                  </Heading>
                  <Text fontSize="sm" color="gray.400" _groupHover={{ color: 'hsla(0, 0%, 100%, 0.8)' }} transition="color 0.3s">
                    Apply to become a member and start building.
                  </Text>
                  <HStack color="brand.400" _groupHover={{ color: 'white' }} transition="color 0.3s" pt={2}>
                    <Text fontSize="sm" fontWeight="bold">Apply now</Text>
                    <Box as={HiArrowRight} transition="transform 0.3s" _groupHover={{ transform: 'translateX(4px)' }} />
                  </HStack>
                </VStack>
              </Box>
            </Link>

            {/* Card 2 - Partner */}
            <Link
              href="mailto:partners@teslaworks.org"
              _hover={{ textDecoration: 'none' }}
              height="100%"
              width="100%"
            >
              <Box
                height="100%"
                width="100%"
                bg="white"
                borderRadius="2xl"
                p={8}
                border="2px solid"
                borderColor="light.200"
                transition="all 0.4s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  borderColor: 'brand.400',
                  boxShadow: '0 20px 40px hsla(0, 0%, 0%, 0.1)',
                }}
                role="group"
              >
                <VStack align="flex-start" gap={4}>
                  <Text fontSize="4xl" fontWeight="black" color="light.200" _groupHover={{ color: 'brand.400' }} transition="color 0.3s">
                    02
                  </Text>
                  <Heading as="h3" fontSize="xl" fontWeight="bold" color="dark.900">
                    Partner With Us
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    Sponsor events, mentor students, or collaborate.
                  </Text>
                  <HStack color="dark.900" _groupHover={{ color: 'brand.500' }} transition="color 0.3s" pt={2}>
                    <Text fontSize="sm" fontWeight="bold">Get in touch</Text>
                    <Box as={HiArrowRight} transition="transform 0.3s" _groupHover={{ transform: 'translateX(4px)' }} />
                  </HStack>
                </VStack>
              </Box>
            </Link>

            {/* Card 3 - Visit */}
            <Box
              bg="brand.500"
              borderRadius="2xl"
              p={8}
              position="relative"
              overflow="hidden"
              transition="all 0.4s ease"
              _hover={{
                transform: 'translateY(-4px)',
                bg: 'brand.600',
                boxShadow: '0 20px 40px hsla(221, 92%, 55%, 0.3)',
              }}
              role="group"
            >
              {/* Decorative ring */}
              <Box
                position="absolute"
                bottom={-30}
                right={-30}
                width="150px"
                height="150px"
                border="30px solid"
                borderColor="hsla(0, 0%, 100%, 0.1)"
                borderRadius="full"
              />

              <VStack align="flex-start" gap={4} position="relative" zIndex={1}>
                <Text fontSize="4xl" fontWeight="black" color="hsla(0, 0%, 100%, 0.3)">
                  03
                </Text>
                <Heading as="h3" fontSize="xl" fontWeight="bold" color="white">
                  Visit Us
                </Heading>
                <Text fontSize="sm" color="hsla(0, 0%, 100%, 0.8)">
                  Stop by a meeting.
                </Text>
                <VStack align="flex-start" gap={1} pt={2}>
                  <Text fontSize="sm" fontWeight="bold" color="white">
                    Thursdays, 6–8 PM
                  </Text>
                  <Text fontSize="xs" color="hsla(0, 0%, 100%, 0.6)">
                    Engineering Building, Room 123
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}