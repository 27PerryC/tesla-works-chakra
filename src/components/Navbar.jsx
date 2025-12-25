'use client'

import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react' // Import primitive components from chakra library 
import { useState, useEffect, useRef } from 'react' // Import hooks from react library 
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false) // Initialize state hooks
  const [showDropdown, setShowDropdown] = useState(false)
  const closeTimer = useRef(null) // Initialize ref hook 

  // Pass scroll logic into useEffect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent a pending close from firing if user re-enters quickly
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setShowDropdown(true)
  }

  // Add a delay so accidental mouse exits don't instantly close the menu
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setShowDropdown(false), 120)
  }

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={isScrolled ? 'dark.800' : 'transparent'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      borderBottom={isScrolled ? '4px solid' : 'none'}
      borderColor="brand.400"
      transition="all 0.3s ease"
      boxShadow={isScrolled ? 'lg' : 'none'}
    >
      <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
        <Flex align="center" justify="space-between" py={4}>
          {/* Brand logo - links to homepage */}
          <Link href="/" passHref>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              fontFamily="heading"
              letterSpacing="tight"
            >
              Tesla <Text as="span" color="brand.400">Works</Text>
            </Text>
          </Link>

          {/* Navigation Links */}
          <HStack gap={8}>
            {/* About + Dropdown with hover menu */}
            <Box position="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <Text
                fontSize="md"
                fontWeight="semibold"
                color="white"
                cursor="pointer"
                transition="color 0.3s ease"
                _hover={{ color: 'brand.400' }}
              >
                About ▾
              </Text>

              {/* Dropdown container with invisible bridge to prevent accidental close */}
              <Box
                position="absolute"
                top="100%"
                left="-24px"
                right="-24px"
                pt={1.9}
                pointerEvents={showDropdown ? 'auto' : 'none'}
              >
                {/* Invisible bridge between trigger and menu */}
                <Box height="18px" />

                {/* Dropdown menu */}
                <Box
                  bg="dark.800"
                  borderRadius="md"
                  minW="170px"
                  boxShadow="xl"
                  py={2}
                  ml="24px"
                  opacity={showDropdown ? 1 : 0}
                  transform={showDropdown ? 'translateY(0)' : 'translateY(-8px)'}
                  transition="all 0.2s ease"
                  overflow="hidden"
                >
                  <Text
                    px={4}
                    py={2}
                    fontSize="md"
                    fontWeight="semibold"
                    color="white"
                    cursor="pointer"
                    borderRadius="md"
                    transition="all 0.2s ease"
                    _hover={{
                      bg: 'brand.400',
                      color: 'dark.800',
                      transform: 'translateX(6px)',
                    }}
                  >
                    Events
                  </Text>

                  <Text
                    as={Link}
                    href="/officers"
                    display="block"
                    px={4}
                    py={2}
                    fontSize="md"
                    fontWeight="semibold"
                    color="white"
                    cursor="pointer"
                    borderRadius="md"
                    transition="all 0.2s ease"
                    _hover={{
                      bg: 'brand.400',
                      color: 'dark.800',
                      transform: 'translateX(6px)',
                    }}
                  >
                    Officers
                  </Text>
                </Box>
              </Box>
            </Box>

            <NavLink label="Projects" href="/projects" />
            <NavLink label="Contact Us" href="/contact-us" />

            {/* CTA button */}
            <Box
              as="a"
              href="/apply"
              bg="white"
              color="blue.400"
              px={8}
              py={3}
              borderRadius="full"
              fontWeight="700"
              fontSize="lg"
              lineHeight="1"
              boxShadow="lg"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ transform: 'translateY(-1px)', boxShadow: 'xl' }}
              _active={{ transform: 'translateY(0)', boxShadow: 'md' }}
            >
              Apply Now
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

// Reusable navigation link with hover animation
function NavLink({ label, href }) {
  return (
    <Text
      as={Link}
      href={href}
      fontSize="md"
      fontWeight="semibold"
      color="white"
      cursor="pointer"
      position="relative"
      transition="color 0.3s ease"
      _hover={{ color: 'brand.400' }}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: 0,
        width: '0%',
        height: '3px',
        bg: 'brand.400',
        transition: 'width 0.3s ease',
      }}
      sx={{
        '&:hover::after': { width: '100%' },
      }}
    >
      {label}
    </Text>
  )
}