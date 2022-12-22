import {
  ActionIcon,
  Badge,
  Button,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { ScreenLayout } from "./ScreenLayout";
import { MainCanvas, MainTitle } from "./components";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme }}
      >
        <ScreenLayout>
          <MainTitle />
          <MainCanvas />
        </ScreenLayout>
        {/* <Text>Welcome to Mantine!</Text>
        <ActionIcon
          variant="outline"
          color={colorScheme === "dark" ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {colorScheme === "dark" ? (
            <IconSun size={18} />
          ) : (
            <IconMoonStars size={18} />
          )}
        </ActionIcon> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const theme = {
  fontFamily: "Open Sans, sans serif",
  spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
};
