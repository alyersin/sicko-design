"use client";

import { Box, chakra } from "@chakra-ui/react";

export default chakra(function WhatsAppTooltip({ children, ...props }) {
  return (
    <Box position="absolute" right="90%" mr={2} bottom="100%" mb={1} {...props}>
      <Box
        bg="rgba(11, 24, 43, 0.95)"
        color="white"
        px={5}
        py={3.5}
        borderRadius="999px"
        boxShadow="0 18px 45px rgba(0,0,0,0.55)"
        fontWeight="600"
        fontSize="0.8rem"
        textAlign="center"
        whiteSpace="pre-line"
        position="relative"
        display="inline-flex"
        flexDirection="column"
        gap={1}
      >
        <Box as="span" position="relative" zIndex={1}>
          {children}
        </Box>
        <Box
          position="absolute"
          right="-10px"
          bottom="6px"
          width="26px"
          height="26px"
          bg="rgba(11, 24, 43, 0.95)"
          borderBottomRightRadius="70%"
          borderTopLeftRadius="70%"
          transform="rotate(130deg)"
        />
      </Box>
    </Box>
  );
});
