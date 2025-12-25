
import { Box, Container } from '@chakra-ui/react'
import Content from './content.mdx'

export default function PrivacyPage() {
  return (
    <Box bg="light.100" minH="100vh">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Box className="mdx">
          <Content />
        </Box>
      </Container>
    </Box>
  )
}
