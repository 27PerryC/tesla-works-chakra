'use client'

import { useState } from 'react'
import { Box, Container, Flex, Text, HStack, VStack, Grid, Link, Input, Button } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

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

  const handleSubscribe = (e) => {
    e.preventDefault()
    // TODO: Connect to newsletter service
    console.log('Subscribing:', email)
    setEmail('')
  }

  return (
    <Box
      as="footer"
      bg="dark.900"
      color="white"
      borderTop="4px solid"
      borderColor="brand.400"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background blur effect */}
      <Box
        position="absolute"
        top="-50%"
        right="-10%"
        width="500px"
        height="500px"
        bg="brand.400"
        opacity={0.05}
        borderRadius="full"
        filter="blur(100px)"
      />

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} position="relative" zIndex={1}>
        {/* Newsletter section */}
        <Box
          py={12}
          borderBottom="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
        >
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            align={{ base: 'center', lg: 'center' }}
            gap={8}
          >
            <VStack align={{ base: 'center', lg: 'flex-start' }} gap={2}>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                fontFamily="heading"
              >
                Stay in the loop
              </Text>
              <Text
                fontSize="sm"
                color="gray.400"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Get updates on projects, events, and workshops. No spam, unsubscribe anytime.
              </Text>
            </VStack>

            <Box as="form" onSubmit={handleSubscribe} width={{ base: '100%', sm: 'auto' }}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={3}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  borderRadius="md"
                  px={4}
                  py={5}
                  fontSize="sm"
                  color="white"
                  width={{ base: '100%', sm: '280px' }}
                  _placeholder={{ color: 'gray.500' }}
                  _hover={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                  _focus={{
                    borderColor: 'brand.400',
                    outline: 'none',
                    boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)',
                  }}
                />
                <Button
                  type="submit"
                  bg="brand.400"
                  color="dark.900"
                  fontWeight="bold"
                  fontSize="sm"
                  px={6}
                  py={5}
                  borderRadius="md"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  Subscribe
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Main footer content */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={12}
          py={16}
        >
          {/* Brand & social media column */}
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
              A project-based community where students design, build, and launch innovative ideas.
            </Text>

            {/* Social media icon links */}
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
                    bg: 'brand.400',
                    transform: 'translateY(-4px)',
                  }}
                >
                  <Box as={social.icon} fontSize="20px" />
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Quick nav links column */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            gap={3}
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
              color="brand.500"
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
                  color: 'brand.400',
                  paddingLeft: '8px',
                }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* CTA & engagement column */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            gap={3}
          >
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
              color="brand.400"
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
              bg="brand.500"
              px={6}
              py={2}
              borderRadius="md"
              mt={2}
              transition="all 0.3s ease"
              _hover={{
                bg: 'brand.600',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              }}
            >
              Contact Us
            </Link>
          </VStack>
        </Grid>

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

          {/* Copyright + privacy policy & terms of service links */}
          <HStack gap={6} fontSize="sm">
            <Link
              href="/privacy-policy"
              color="gray.400"
              transition="color 0.2s ease"
              _hover={{ color: 'brand.400' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="gray.400"
              transition="color 0.2s ease"
              _hover={{ color: 'brand.400' }}
            >
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}