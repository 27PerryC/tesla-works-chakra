'use client'

import { Box, Container, Flex, Text, HStack, VStack, Grid, Link } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Events', href: '/events' },
    { label: 'Officers', href: '/officers' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
  ]

  return (
    <Box
      as="footer"
      bg="navy.900"
      color="white"
      borderTop="4px solid"
      borderColor="gold.500"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background element */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        width="500px"
        height="500px"
        bg="gold.500"
        opacity={0.05}
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} position="relative" zIndex={1}>
        {/* Main Footer Content */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={12}
          py={16}
        >
          {/* Brand Section */}
          <VStack align={{ base: 'center', md: 'flex-start' }} gap={4}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              fontFamily="heading"
              letterSpacing="tight"
            >
              Tesla Works
            </Text>

            <Text
              fontSize="sm"
              color="gray.400"
              maxW="280px"
              textAlign={{ base: 'center', md: 'left' }}
              lineHeight={1.7}
            >
              A project-based makerspace where students design, build, and launch innovative ideas.
            </Text>

            {/* Social Media Icons */}
            <HStack gap={4} pt={2}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="40px"
                  height="40px"
                  borderRadius="md"
                  bg="rgba(255, 255, 255, 0.1)"
                  transition="all 0.3s ease"
                  _hover={{
                    bg: 'gold.500',
                    transform: 'translateY(-4px)',
                  }}
                >
                  <Box as={social.icon} fontSize="20px" />
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            gap={3}
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
              color="gold.500"
              mb={2}
            >
              Quick Links
            </Text>

            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                fontSize="sm"
                color="gray.300"
                fontWeight="medium"
                transition="all 0.2s ease"
                _hover={{
                  color: 'gold.500',
                  paddingLeft: '8px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Get Involved Section */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            gap={3}
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
              color="gold.500"
              mb={2}
            >
              Get Involved
            </Text>

            <Text
              fontSize="sm"
              color="gray.300"
              maxW="280px"
              textAlign={{ base: 'center', md: 'left' }}
              lineHeight={1.7}
            >
              Join us at the makerspace and start building your next project.
            </Text>

            <Link
              href="/contact"
              fontSize="sm"
              fontWeight="bold"
              color="white"
              bg="brand.600"
              px={6}
              py={2}
              borderRadius="md"
              mt={2}
              transition="all 0.3s ease"
              _hover={{
                bg: 'brand.700',
                transform: 'translateY(-2px)',
              }}
            >
              Contact Us
            </Link>
          </VStack>
        </Grid>

        {/* Bottom Bar */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
          py={6}
          borderTop="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
        >
          {/* Copyright */}
          <Text fontSize="sm" color="gray.400" textAlign={{ base: 'center', md: 'left' }}>
            © {currentYear} Tesla Works. All rights reserved.
          </Text>

          {/* Additional Links */}
          <HStack gap={6} fontSize="sm">
            <Link
              href="/privacy-policy"
              color="gray.400"
              transition="color 0.2s ease"
              _hover={{ color: 'gold.500' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="gray.400"
              transition="color 0.2s ease"
              _hover={{ color: 'gold.500' }}
            >
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}