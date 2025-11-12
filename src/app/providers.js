"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  colors: {
    brand: {
      50: "#e6f2ff",
      100: "#b3d9ff",
      200: "#80bfff",
      300: "#4da6ff",
      400: "#1a8cff",
      500: "#0066cc",
      600: "#0052a3",
      700: "#003d7a",
      800: "#002952",
      900: "#001429",
    },
    silver: {
      50: "#f8f8f8",
      100: "#e8e8e8",
      200: "#d8d8d8",
      300: "#c8c8c8",
      400: "#c0c0c0",
      500: "#a8a8a8",
      600: "#909090",
      700: "#787878",
      800: "#606060",
      900: "#484848",
    },
  },
  semanticTokens: {
    colors: {
      "bg.body": { default: "#ffffff" },
      "bg.surface": { default: "#f5f5f5" },
      "bg.surfaceAlt": { default: "#ffffff" },
      "border.subtle": { default: "#e0e0e0" },
      "text.primary": { default: "#1a1a1a" },
      "text.secondary": { default: "#666666" },
      "text.muted": { default: "#999999" },
      "accent.primary": { default: "#0066cc" },
      "dark-black": { default: "#1a1a1a" },
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "bg.body",
        color: "text.primary",
        minHeight: "100%",
        scrollBehavior: "smooth",
      },
      "*::selection": {
        background: "brand.500",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "600",
        transition: "all 0.3s ease",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: { 
            bg: "brand.600",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(0, 102, 204, 0.3)",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: { bg: "brand.50" },
        },
        ghost: {
          color: "text.secondary",
          bg: "transparent",
          _hover: {
            color: "brand.500",
            bg: "transparent",
          },
        },
        hero: {
          bg: "rgba(255, 255, 255, 0.1)",
          color: "white",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          _hover: {
            bg: "rgba(255, 255, 255, 0.2)",
            borderColor: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
      sizes: {
        lg: {
          fontSize: "1rem",
          px: "32px",
          py: "14px",
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "bg.surfaceAlt",
          borderRadius: "xl",
          borderWidth: "1px",
          borderColor: "border.subtle",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
          _hover: {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 30px rgba(0, 102, 204, 0.15)",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: "white",
          borderColor: "border.subtle",
          color: "text.primary",
          _placeholder: { color: "text.muted" },
          _hover: { borderColor: "brand.500" },
          _focus: {
            borderColor: "brand.500",
            boxShadow: "0 0 0 3px rgba(0, 102, 204, 0.1)",
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          bg: "white",
          borderColor: "border.subtle",
          color: "text.primary",
          _focus: {
            borderColor: "brand.500",
            boxShadow: "0 0 0 3px rgba(0, 102, 204, 0.1)",
          },
        },
        icon: {
          color: "text.primary",
        },
      },
    },
    Textarea: {
      baseStyle: {
        bg: "white",
        borderColor: "border.subtle",
        color: "text.primary",
        _placeholder: { color: "text.muted" },
        _focus: {
          borderColor: "brand.500",
          boxShadow: "0 0 0 3px rgba(0, 102, 204, 0.1)",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.02em",
      },
      sizes: {
        "2xl": {
          fontSize: "4rem",
          lineHeight: "1.1",
        },
        xl: {
          fontSize: "2.5rem",
        },
        lg: {
          fontSize: "2rem",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "1200px",
        px: "20px",
      },
    },
  },
});

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

