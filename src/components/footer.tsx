import { Flex, Text } from "@fidely-ui/react"

export const Footer = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
    >
      <Text>
        Powered by

        <Text asChild ml="1" color="colorPalette.default">
          <a 
            href="https://fidely-ui.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Fidely UI
          </a>
        </Text>
      </Text>
    </Flex>
  );
}