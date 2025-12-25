'use client'

import { Box, Container, Heading, Text, VStack, HStack, Grid, Link } from '@chakra-ui/react'
import { HiUserAdd, HiOfficeBuilding, HiNewspaper, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'

export default function Contact() {
  // Contact card data - edit here to update cards
  const contactOptions = [
    {
      icon: HiUserAdd,
      title: 'Join Us',
      description: 'Want to become a member? Fill out our application and come to a meeting.',
      buttonText: 'Apply Now',
      href: '/apply',
      number: '01', // Watermark number
    },
    {
      icon: HiOfficeBuilding,
      title: 'Partner With Us',
      description: 'Company or sponsor inquiry? Wed love to collaborate on projects and events.',
      buttonText: 'Get in Touch',
      href: 'mailto:partners@teslaworks.org',
      number: '02',
    },
    {
      icon: HiNewspaper,
      title: 'Press & Media',
      description: 'Covering student innovation? Reach out for interviews, photos, or stories.',
      buttonText: 'Media Inquiry',
      href: 'mailto:press@teslaworks.org',
      number: '03',
    },
  ]

  return (
    <Box bg="light.100" minHeight="100vh" overflow="hidden">

      {/* Hero Section */}
      <Box
        bg="dark.900"
        pt={32} // Accounts for fixed navbar
        pb={32}
        px={{ base: 4, md: 8 }}
        position="relative"
        overflow="hidden"
      >
        {/* Grid pattern background */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.03}
          backgroundImage="linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)"
          backgroundSize="50px 50px"
          zIndex={1}
        />

        {/* "CONNECT" watermark */}
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: '150px', md: '250px', lg: '350px' }}
          fontWeight="black"
          color="white"
          opacity={0.02}
          letterSpacing="tight"
          whiteSpace="nowrap"
          zIndex={1}
          userSelect="none"
        >
          CONNECT
        </Text>

        {/* Glowing orb */}
        <Box
          position="absolute"
          top="20%"
          right="10%"
          width="400px"
          height="400px"
          bg="brand.500"
          opacity={0.15}
          borderRadius="full"
          filter="blur(100px)"
          zIndex={1}
        />

        {/* Corner accent - top left */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="200px"
          height="200px"
          borderRight="2px solid"
          borderBottom="2px solid"
          borderColor="brand.400"
          opacity={0.3}
          zIndex={2}
        />

        {/* Corner accent - bottom right */}
        <Box
          position="absolute"
          bottom={0}
          right={0}
          width="200px"
          height="200px"
          borderLeft="2px solid"
          borderTop="2px solid"
          borderColor="brand.400"
          opacity={0.3}
          zIndex={2}
        />

        {/* Hero content */}
        <Container maxW="1400px" position="relative" zIndex={10}>
          <VStack gap={6} textAlign="center">
            {/* Eyebrow label */}
            <HStack gap={3}>
              <Box width="40px" height="2px" bg="brand.400" />
              <Text
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.400"
              >
                Get in Touch
              </Text>
              <Box width="40px" height="2px" bg="brand.400" />
            </HStack>

            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="black"
              color="white"
              letterSpacing="tight"
            >
              How Can We Help?
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.400"
              maxW="600px"
              lineHeight={1.7}
            >
              Whether you want to join, partner, or learn more — we'd love to hear from you.
            </Text>
          </VStack>
        </Container>

        {/* Angled bottom edge */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="80px"
          bg="light.100"
          clipPath="polygon(0 100%, 100% 0, 100% 100%)"
          zIndex={10}
        />
      </Box>

      {/* Main Content */}
      <Container maxW="1200px" px={{ base: 4, md: 8 }} py={16}>

        {/* Section divider */}
        <HStack justify="center" mb={12}>
          <Box flex={1} height="1px" bg="light.200" />
          <Text
            px={4}
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="widest"
            textTransform="uppercase"
            color="gray.500"
          >
            Choose Your Path
          </Text>
          <Box flex={1} height="1px" bg="light.200" />
        </HStack>

        {/* Contact cards grid */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
        >
          {contactOptions.map((option, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="2xl"
              p={8}
              position="relative"
              overflow="hidden"
              border="2px solid"
              borderColor="light.200"
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                borderColor: 'brand.400',
              }}
              role="group" // Enables _groupHover on children
            >
              {/* Number watermark */}
              <Text
                position="absolute"
                top="-20px"
                right="-10px"
                fontSize="140px"
                fontWeight="black"
                color="light.100"
                lineHeight={1}
                userSelect="none"
                transition="all 0.4s ease"
                _groupHover={{ color: 'brand.400', opacity: 0.1 }}
              >
                {option.number}
              </Text>

              <VStack align="flex-start" gap={5} position="relative" zIndex={1}>
                {/* Icon with halo */}
                <Box position="relative">
                  {/* Halo - grows on hover */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="70px"
                    height="70px"
                    bg="brand.400"
                    opacity={0.1}
                    borderRadius="full"
                    transition="all 0.4s ease"
                    _groupHover={{ width: '80px', height: '80px', opacity: 0.2 }}
                  />
                  <Box p={4} bg="brand.500" borderRadius="xl" color="white" position="relative" zIndex={1}>
                    <Box as={option.icon} fontSize="28px" />
                  </Box>
                </Box>

                <Heading as="h3" fontSize="xl" fontWeight="bold" color="dark.900">
                  {option.title}
                </Heading>

                <Text fontSize="md" color="gray.600" lineHeight={1.8}>
                  {option.description}
                </Text>

                {/* CTA button */}
                <Link
                  href={option.href}
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="dark.900"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontWeight="bold"
                  fontSize="sm"
                  mt={2}
                  transition="all 0.3s ease"
                  _hover={{ bg: 'brand.500', textDecoration: 'none' }}
                >
                  {option.buttonText}
                  <Text as="span" transition="transform 0.3s ease" _groupHover={{ transform: 'translateX(4px)' }}>
                    →
                  </Text>
                </Link>
              </VStack>
            </Box>
          ))}
        </Grid>

        {/* Divider with mail icon */}
        <HStack justify="center" my={16}>
          <Box flex={1} height="1px" bg="light.200" />
          <Box p={3} bg="white" border="2px solid" borderColor="light.200" borderRadius="full">
            <Box as={HiMail} fontSize="20px" color="brand.500" />
          </Box>
          <Box flex={1} height="1px" bg="light.200" />
        </HStack>

        {/* Bento grid - 2:1 ratio on desktop */}
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>

          {/* Main contact card */}
          <Box p={10} bg="dark.900" borderRadius="2xl" position="relative" overflow="hidden">
            {/* Decorative rings */}
            <Box
              position="absolute"
              top="-50px"
              right="-50px"
              width="200px"
              height="200px"
              border="40px solid"
              borderColor="brand.500"
              opacity={0.1}
              borderRadius="full"
            />
            <Box
              position="absolute"
              bottom="-30px"
              left="-30px"
              width="150px"
              height="150px"
              border="30px solid"
              borderColor="brand.400"
              opacity={0.1}
              borderRadius="full"
            />

            <VStack align="flex-start" gap={6} position="relative" zIndex={1}>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color="brand.400"
                  mb={2}
                >
                  General Inquiries
                </Text>
                <Heading as="h3" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="white">
                  Have a question?<br />
                  We'd love to help.
                </Heading>
              </Box>

              <Text fontSize="md" color="gray.400" maxW="400px" lineHeight={1.8}>
                For anything else, drop us an email and we'll get back to you within 48 hours.
              </Text>

              <Link
                href="mailto:contact@teslaworks.org"
                display="inline-flex"
                alignItems="center"
                gap={3}
                bg="brand.500"
                color="white"
                px={8}
                py={4}
                borderRadius="full"
                fontWeight="bold"
                fontSize="md"
                transition="all 0.3s ease"
                _hover={{ bg: 'brand.400', transform: 'translateY(-2px)', textDecoration: 'none' }}
              >
                <Box as={HiMail} fontSize="20px" />
                contact@teslaworks.org
              </Link>
            </VStack>
          </Box>

          {/* Side cards */}
          <VStack gap={6}>
            {/* Location */}
            <Box
              p={6}
              bg="white"
              borderRadius="2xl"
              border="2px solid"
              borderColor="light.200"
              width="100%"
              transition="all 0.3s ease"
              _hover={{ borderColor: 'brand.400' }}
            >
              <HStack gap={4} align="flex-start">
                <Box p={3} bg="brand.500" borderRadius="lg" color="white">
                  <Box as={HiLocationMarker} fontSize="20px" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="bold" color="dark.900">Makerspace Room 123</Text>
                  <Text fontSize="sm" color="gray.500" lineHeight={1.6}>
                    Engineering Building<br />
                    University of Minnesota
                  </Text>
                </VStack>
              </HStack>
            </Box>

            {/* Meeting times */}
            <Box
              p={6}
              bg="white"
              borderRadius="2xl"
              border="2px solid"
              borderColor="light.200"
              width="100%"
              transition="all 0.3s ease"
              _hover={{ borderColor: 'brand.400' }}
            >
              <HStack gap={4} align="flex-start">
                <Box p={3} bg="brand.400" borderRadius="lg" color="white">
                  <Box as={HiClock} fontSize="20px" />
                </Box>
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight="bold" color="dark.900">Thursdays, 6–8 PM</Text>
                  <Text fontSize="sm" color="gray.500" lineHeight={1.6}>
                    Open to all students<br />
                    No experience required
                  </Text>
                </VStack>
              </HStack>
            </Box>

            {/* Response time stat */}
            <Box p={6} bg="brand.500" borderRadius="2xl" width="100%" textAlign="center">
              <Text fontSize="4xl" fontWeight="black" color="white">48h</Text>
              <Text fontSize="sm" fontWeight="medium" color="white" opacity={0.8}>
                Average response time
              </Text>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}