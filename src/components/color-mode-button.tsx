import { useTheme } from "next-themes"
import { ClientOnly, IconButton, Skeleton } from "@fidely-ui/react"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"

import { Icon } from "~/components/icon"

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const title = theme === "light" ? "Switch to dark mode" : "Switch to light mode"

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={handleToggleTheme}
        size="xs"
        variant="ghost"
        color="inherit"
        colorPalette="gray"
        aria-label={title}
        title={title}
      >
        <Icon aria-hidden="true" aria-label="Switch Theme Mode">
          {theme === "light" ? (
            <IoSunnyOutline size="17px" />
          ) : (
            <FaMoon size="17px" />
          )}
        </Icon>
      </IconButton>
    </ClientOnly>
  )
}