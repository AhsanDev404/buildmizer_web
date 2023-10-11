// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#888888",
      100: "#777777",
      200: "#666666",
      300: "#555555",
      400: "#444444",
      500: "#333333",
      600: "#222222",
      700: "#111111",
      800: "#000000",
    },
    // Add more custom colors as needed
  },
});

export default theme;
