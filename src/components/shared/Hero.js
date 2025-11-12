"use client";

import { Box, Container, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { ROUTES } from "../../constants/routes";
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation";

export default function Hero() {
  const navigate = useSmoothNavigation();
  const createNavHandler = (href) => (event) => navigate(event, href);

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(135deg, #1a1a1a 0%, #2d2d2d 50%, #0066cc 100%)"
      bgSize="200% 200%"
      animation="gradientShift 15s ease infinite"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.4)"
      />
      <Container maxW="1200px" position="relative" zIndex={2}>
        <VStack spacing={8} textAlign="center" color="white">
          <Heading
            size="2xl"
            fontWeight="800"
            lineHeight="1.1"
            letterSpacing="-0.02em"
          >
            Detailing Auto de{" "}
            <Text as="span" color="silver.400">
              Elită
            </Text>
          </Heading>
          <Text fontSize="1.25rem" color="rgba(255, 255, 255, 0.9)" maxW="800px">
            Transformăm mașinile tale în opere de artă cu atenție la detalii și pasiune pentru perfecțiune
          </Text>
          <HStack spacing={4} flexWrap="wrap" justify="center">
            <Button
              size="lg"
              colorScheme="brand"
              onClick={createNavHandler(ROUTES.contact)}
            >
              Rezervă Acum
            </Button>
            <Button
              size="lg"
              variant="hero"
              onClick={createNavHandler(ROUTES.services)}
            >
              Serviciile Noastre
            </Button>
          </HStack>
        </VStack>
      </Container>
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        color="rgba(255, 255, 255, 0.7)"
        fontSize="0.875rem"
      >
        <Text>Scroll</Text>
        <Box
          width="2px"
          height="30px"
          bg="rgba(255, 255, 255, 0.5)"
          position="relative"
        >
          <Box
            position="absolute"
            bottom={0}
            left="-4px"
            width="10px"
            height="10px"
            borderRight="2px solid rgba(255, 255, 255, 0.5)"
            borderBottom="2px solid rgba(255, 255, 255, 0.5)"
            transform="rotate(45deg)"
          />
        </Box>
      </Box>
    </Box>
  );
}

