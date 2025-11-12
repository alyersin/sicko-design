"use client";

import { Box, VStack, Text } from "@chakra-ui/react";

export default function Logo({ isMobile = false }) {
  return (
    <Box display="flex" alignItems="center">
      <VStack spacing={0} align="flex-start">
        <Text
          fontSize={isMobile ? "1.25rem" : "1.5rem"}
          fontWeight="800"
          color="brand.500"
          letterSpacing="2px"
          lineHeight="1"
        >
          SICKO
        </Text>
        <Text
          fontSize={isMobile ? "0.65rem" : "0.75rem"}
          fontWeight="600"
          color="text.secondary"
          letterSpacing="4px"
          textTransform="uppercase"
          lineHeight="1"
        >
          DESIGN
        </Text>
      </VStack>
    </Box>
  );
}

