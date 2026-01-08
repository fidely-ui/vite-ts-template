import { Box, Button, Center, Heading, Stack, Text, Flex } from "@fidely-ui/react"
import { FaGithub } from "react-icons/fa6"

import "~/App.css"

function App() {
  return (
    <Box
      as="section"
      position="relative"
      height="auto"
    >
      <Center height="85vh">
        <Stack gap="6" textAlign="center" maxWidth="900px">
          <Heading size={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="semibold" lineHeight="1.4em">
            Build <Text as="span" color="colorPalette.default"> modern</Text> apps with speed and flexibility
          </Heading>
          <Text fontSize={{ base: "md", lg: "xl" }} color="fg.muted">
            UI library for modern React apps
          </Text>
          <Flex justify="center" gap={4} flexDirection={{ base: "column", md: "row" }}>
            <Button size="lg" asChild>
              <a href="https://fidely-ui.vercel.app" target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              colorPalette="gray"
              asChild
            >
              <a href="https://github.com/fidely-ui/fidely-ui" target="_blank" rel="noopener noreferrer">
                Github <FaGithub />
              </a>
            </Button>
          </Flex>
          <Center mt="3">
            <Box
              p="2.5"
              rounded="s2"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="border.disabled"
            >
              <Text>Get started by editing <Text as="span" ml="1.5" bg="colorPalette.5" p="1.5" rounded="s2">src/App.tsx</Text> </Text>
            </Box>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default App
