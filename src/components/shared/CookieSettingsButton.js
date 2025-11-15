"use client";

import { Box, IconButton } from "@chakra-ui/react";
import { useGDPR } from "../../contexts/GDPRContext";

export default function CookieSettingsButton() {
  const { showBanner } = useGDPR();

  return (
    <Box position="fixed" bottom={8} left={8} zIndex={998}>
      <IconButton
        aria-label="Setări Cookie"
        onClick={showBanner}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cookie circle with bite mark cutout */}
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c0.55 0 1 0.45 1 1s-0.45 1-1 1c-3.31 0-6 2.69-6 6s2.69 6 6 6c0.55 0 1 0.45 1 1s-0.45 1-1 1z"
              fill="currentColor"
            />
            {/* Bite mark - white circle overlay */}
            <circle cx="18" cy="7" r="2.5" fill="white" />
            {/* Chocolate chips */}
            <circle cx="8.5" cy="9" r="0.9" fill="currentColor" />
            <circle cx="15" cy="9" r="0.9" fill="currentColor" />
            <circle cx="8.5" cy="15" r="0.9" fill="currentColor" />
            <circle cx="15" cy="15" r="0.9" fill="currentColor" />
            <circle cx="11.5" cy="6" r="0.75" fill="currentColor" />
            <circle cx="11.5" cy="18" r="0.75" fill="currentColor" />
            <circle cx="6" cy="12" r="0.75" fill="currentColor" />
          </svg>
        }
        colorScheme="brand"
        bg="brand.500"
        color="white"
        size="lg"
        borderRadius="full"
        boxShadow="0 4px 20px rgba(0, 102, 204, 0.4)"
        _hover={{
          bg: "brand.600",
          transform: "scale(1.1)",
          boxShadow: "0 6px 25px rgba(0, 102, 204, 0.5)",
        }}
        transition="all 0.3s ease"
      />
    </Box>
  );
}

