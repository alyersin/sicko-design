"use client";

import { Box, Container, VStack, HStack, Text, Link } from "@chakra-ui/react";
import Logo from "./Logo";
import { SOCIAL_LINKS } from "../../constants/app";

export default function Footer() {
  return (
    <Box as="footer" bg="dark-black" color="white" py={16} mt={20}>
      <Container maxW="1200px">
        <VStack spacing={8} align="center">
          <Logo />
          <Text
            color="rgba(255, 255, 255, 0.7)"
            maxW="500px"
            textAlign="center"
            lineHeight="1.6"
          >
            Detailing auto profesional în Constanța. Transformăm mașinile tale în opere de artă.
          </Text>
          <HStack spacing={8}>
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                color="rgba(255, 255, 255, 0.7)"
                _hover={{ color: "silver.400" }}
                transition="color 0.3s ease"
              >
                {social.label}
              </Link>
            ))}
          </HStack>
          <Box
            pt={8}
            borderTop="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            width="100%"
            textAlign="center"
          >
            <Text color="rgba(255, 255, 255, 0.5)" fontSize="0.875rem">
              &copy; 2025 Sicko Design. Toate drepturile rezervate.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

