import { useState } from "react"
import {
  Box,
  Button,
  CommandInput,
  Flex,
  HStack,
  IconButton,
  Text,
  useDialog,
} from "@fidely-ui/react"
import { FaBars, FaGithub, FaHeart, FaXTwitter } from "react-icons/fa6"

import { ColorModeButton } from "~/components/color-mode-button"
import { Drawer } from "~/components/drawer"
import { Icon } from "~/components/icon"
import { SearchDialog } from "~/components/search-dialog"

export const NavBar = () => {
  const dialog = useDialog()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <Box as="nav" px="4" py="4">
      <Flex
        align="center"
        justify="space-between"
        width="90%"
        mx="auto"
      >
        {/* Desktop Nav */}
        <Flex gap="4" align="center">
          {/* Logo */}
          <Text
            as="h1"
            size="xl"
            fontWeight="semibold"
            color="colorPalette.default"
          >
            Acme
          </Text>

          <HStack
            gap="3.5"
            display={{ base: "none", lg: "flex" }}
            mt="1"
          >
            {navLinks.map(({ href, label }, index: number) => (
              <Text
                key={index}
                transition="color 0.2s ease"
                _hover={{ color: "fg.subtle" }}
              >
                <a href={href}>{label}</a>
              </Text>
            ))}
          </HStack>
        </Flex>

        <Flex
          align="center"
          gap="2"
          display={{ base: "none", lg: "flex" }}
          colorPalette="gray"
        >
          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
          >
            <a
              href="https://x.com/FidelyUi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaXTwitter />
              </Icon>
            </a>
          </IconButton>

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
          >
            <a
              href="https://github.com/fidely-ui/fidely-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <FaGithub />
              </Icon>
            </a>
          </IconButton>

          <ColorModeButton />

          <CommandInput
            onOpen={() => dialog.setOpen(true)}
            width="240px"
            bg="transparent"
          />

          <Button asChild variant="subtle">
            <a
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon aria-hidden="true" color="red.10">
                <FaHeart />
              </Icon>
              Sponsor
            </a>
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: "block", lg: "none" }}>
          <IconButton
            aria-label="Toggle Menu"
            variant="ghost"
            size="md"
            onClick={toggleDrawer}
            colorPalette="gray"
          >
            <Icon>
              <FaBars />
            </Icon>
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
        commandOpen={() => dialog.setOpen(true)}
      />

      {/* search dialog/combobox */}
      <SearchDialog value={dialog} />
    </Box>
  )
}

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]
