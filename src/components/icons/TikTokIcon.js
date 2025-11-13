"use client";

import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa";

const TikTokIcon = forwardRef(({ size = "1em", ...props }, ref) => (
  <Box ref={ref} position="relative" display="inline-block" fontSize={size} lineHeight={0} {...props}>
    <Box
      as={FaTiktok}
      color="#69C9D0"
      position="absolute"
      top="0.08em"
      left="0.02em"
      opacity={0.95}
      fontSize="1em"
    />
    <Box
      as={FaTiktok}
      color="#EE1D52"
      position="absolute"
      top="0"
      left="0.08em"
      opacity={0.9}
      fontSize="1em"
    />
    <Box as={FaTiktok} color="#010101" position="relative" fontSize="1em" />
  </Box>
));

TikTokIcon.displayName = "TikTokIcon";

export default TikTokIcon;
