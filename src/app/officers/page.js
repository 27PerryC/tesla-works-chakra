'use client'

import React from 'react'
import { Box, Container, Heading, Text, Grid, VStack, HStack } from '@chakra-ui/react'

export default function Officers() {
  // Top Leadership - President & VP
  const topLeadership = [
    {
      name: 'Johnny Quick',
      role: 'President',
      bio: 'Johnny is a senior studying Computer Science from Eagan, Minnesota. As President, he oversees all Tesla Works operations and serves as the primary liaison with university administration.',
      image: '/officers/johnny.jpeg',
      email: 'president@teslaworks.org',
    },
    {
      name: 'Humza Murad',
      role: 'Vice President',
      bio: 'Humza is a sophomore studying Electrical Engineering from St Paul, Minnesota. As Vice President, he supports the President in organizational leadership and manages internal operations.',
      image: '/officers/humza.jpeg',
      email: 'vp@teslaworks.org',
    },
  ]

  const executiveTeam = [
    {
      name: 'Carson Perry',
      role: 'Lead Project Manager',
      bio: 'Carson is a junior studying Computer Engineering from Chanhassen, Minnesota. As Lead Project Manager, he coordinates all active projects and ensures teams meet their goals.',
      image: '/officers/carson.png',
      email: 'tech@teslaworks.org',
    },
    {
      name: 'Randal Fluery',
      role: 'Outreach Director',
      bio: 'Randal is a sophomore studying Mechanical Engineering from Eagan, Minnesota. As Outreach Director, he is in charge of all social presense and recruitment for the club.',
      image: '/officers/randal.jpeg',
      email: 'projects@teslaworks.org',
    },
    {
      name: 'Omer Mitha',
      role: 'Cool Guy :D',
      bio: 'Omer is a sophomore studying Human Physiology on the pre-med path from Eagan, Minnesota. As a Cool Guy, he manages partnerships with local schools and organizes community workshops. Omer is passionate about making engineering accessible to everyone and previously coordinated the High School Robotics Workshop series.',
      image: '/officers/omer.jpeg',
      email: 'outreach@teslaworks.org',
    },
    {
      name: 'Oscar Drowe',
      role: 'Community Builds Director',
      bio: 'Oscar is a sophomore studying Materials Science from Portland, Oregon. As Workshop Coordinator, he schedules and runs weekly technical workshops for members. Oscar specializes in PCB design and has taught over 50 students to solder. He also maintains the makerspace component inventory.',
      image: '',
      email: 'workshops@teslaworks.org',
    },
    {
      name: 'Rachel Jensen',
      role: 'Co-Treasurer',
      bio: 'Rachel is a sophomore studying Communications from Austin, Texas. As Social Media Manager, she creates content showcasing Tesla Works projects and events. Rachel runs our Instagram, TikTok, and YouTube channels, documenting the journey from concept to completed build.',
      image: '',
      email: 'social@teslaworks.org',
    },
    {
      name: 'Himal Trivedi',
      role: 'Treasurer',
      bio: '',
      image: '',
      email: 'social@teslaworks.org',
    },
  ]

  const otherLeaders = [
    {
      name: 'Open Position',
      role: 'Team Leader',
      bio: 'This role is currently being filled. Check back soon for updates!',
      image: '',
      email: '',
    },
    {
      name: 'Open Position',
      role: 'Team Leader',
      bio: 'This role is currently being filled. Check back soon for updates!',
      image: '',
      email: '',
    },
    {
      name: 'Open Position',
      role: 'Team Leader',
      bio: 'This role is currently being filled. Check back soon for updates!',
      image: '',
      email: '',
    },
    {
      name: 'Open Position',
      role: 'Team Leader',
      bio: 'This role is currently being filled. Check back soon for updates!',
      image: '',
      email: '',
    },
  ]

  // Component to render officer card
  const OfficerCard = ({ officer, featured = false }) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const firstName = officer?.name?.split(' ')?.[0] ?? 'TBD'

    return (
      <Grid
        templateColumns={{ base: '1fr', md: '200px 1fr' }}
        gap={{ base: 6, md: 8 }}
        p={{ base: 6, md: 8 }}
        transition="all 0.3s ease"
      >
        {/* Circular Image */}
        <VStack align="center" justify="flex-start">
          <Box
            width="180px"
            height="180px"
            borderRadius="full"
            overflow="hidden"
            border="4px solid"
            borderColor={featured ? 'brand.400' : 'light.200'}
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={!officer.image ? 'light.100' : 'transparent'}
          >
            {officer.image ? (
              <Box
                as="img"
                src={officer.image}
                alt={officer.name}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            ) : (
              <VStack gap={1}>
                <Text fontSize="3xl" fontWeight="black" color="gray.400">
                  TBD
                </Text>
                <Text fontSize="sm" fontWeight="semibold" color="gray.500">
                  Coming soon
                </Text>
              </VStack>
            )}
          </Box>
        </VStack>

        {/* Officer Info */}
        <VStack align="flex-start" justify="flex-start" gap={3}>
          <Box>
            <Text
              fontSize="sm"
              fontWeight="bold"
              color={featured ? 'brand.500' : 'dark.900'}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {officer.role}
            </Text>
            <Heading as="h3" fontSize="2xl" fontWeight="bold" color="dark.900" mt={1}>
              {officer.name}
            </Heading>
          </Box>

          <Text fontSize="md" color="gray.600" lineHeight={1.8}>
            {officer.bio}
          </Text>

          {officer.email && (
            <Box
              as="button"
              position="relative"
              px={6}
              py={2}
              fontSize="md"
              fontWeight="semibold"
              borderRadius="full"
              mt={2}
              cursor="pointer"
              overflow="visible"
              bg="transparent"
              border="none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Gradient border */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderRadius="full"
                padding="2px"
                background="linear-gradient(90deg, #3B82F6, #60A5FA)"
                zIndex={0}
              >
                <Box
                  position="absolute"
                  top="2px"
                  left="2px"
                  right="2px"
                  bottom="2px"
                  borderRadius="full"
                  bg="white"
                  zIndex={1}
                />
              </Box>

              {/* Gradient fill that slides in */}
              <Box
                position="absolute"
                top="2px"
                left="2px"
                bottom="2px"
                width={isHovered ? 'calc(100% - 4px)' : '0%'}
                borderRadius="full"
                background="linear-gradient(90deg, #3B82F6, #60A5FA)"
                transition="width 0.5s ease, opacity 0.5s ease"
                opacity={isHovered ? 1 : 0}
                zIndex={2}
              />

              {/* Text */}
              <Text
                as="span"
                position="relative"
                zIndex={3}
                color={isHovered ? 'white' : 'dark.900'}
                transition="color 0.4s ease"
              >
                ✉ Email {firstName}
              </Text>
            </Box>
          )}
        </VStack>
      </Grid>
    )
  }

  return (
    <Box bg="light.100" minHeight="100vh">
      {/* Hero Section */}
      <Box
        position="relative"
        pt={{ base: 32, md: 40 }}
        pb={{ base: 20, md: 32 }}
        px={{ base: 4, md: 8 }}
        bg="dark.900"
        overflow="hidden"
      >
        {/* "TEAM" watermark */}
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: '200px', md: '400px', lg: '500px' }}
          fontWeight="black"
          color="white"
          opacity={0.02}
          letterSpacing="tight"
          userSelect="none"
          whiteSpace="nowrap"
        >
          TEAM
        </Text>

        {/* Glowing orb */}
        <Box
          position="absolute"
          top="10%"
          right="20%"
          width="500px"
          height="500px"
          bg="brand.500"
          opacity={0.1}
          borderRadius="full"
          filter="blur(120px)"
        />

        <Container maxW="1400px" position="relative" zIndex={1}>
          <VStack gap={6} align="center" textAlign="center">
            <HStack gap={3}>
              <Box width="50px" height="3px" bg="brand.400" />
              <Text
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.400"
              >
                Leadership
              </Text>
              <Box width="50px" height="3px" bg="brand.400" />
            </HStack>

            <Heading
              as="h1"
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              fontWeight="black"
              color="white"
              letterSpacing="tight"
              lineHeight={0.9}
            >
              Meet the<br />
              <Text as="span" color="brand.400">Team</Text>
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.400"
              maxW="600px"
              lineHeight={1.8}
            >
              The dedicated leaders driving innovation and community at Tesla Works.
            </Text>
          </VStack>
        </Container>
        {/* Angled transition */}
        <Box
          position="absolute"
          bottom="-1px"
          left={0}
          right={0}
          height="100px"
          bg="light.100"
          clipPath="polygon(0 100%, 100% 0, 100% 100%, 0 100%)"
        />

      </Box>

      {/* Main Content */}
      <Container maxW="1400px" px={{ base: 4, md: 8 }} py={16}>
        {/* President & Vice President Section */}
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8} mb={20}>
          {topLeadership.map((officer, index) => (
            <OfficerCard key={index} officer={officer} featured={true} />
          ))}
        </Grid>

        {/* Executive Team Section */}
        <VStack gap={12} mb={16}>
          <VStack gap={3}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="dark.900"
            >
              Executive Team
            </Text>
            <Box width="40px" height="3px" bg="brand.500" />
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8} width="100%">
            {executiveTeam.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </Grid>
        </VStack>

        {/* Team Leaders Section */}
        <VStack gap={12}>
          <VStack gap={3}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              textTransform="uppercase"
              color="dark.900"
            >
              Team Leaders
            </Text>
            <Box width="40px" height="3px" bg="brand.400" />
          </VStack>

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={8} width="100%">
            {otherLeaders.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}
