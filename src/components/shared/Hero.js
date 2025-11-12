"use client";

import { Box, Container, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ROUTES } from "../../constants/routes";
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation";

const zoomInFromDepth = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.25);
    opacity: 0;
    filter: blur(14px);
  }
  60% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    filter: blur(0);
  }
`;

const quakeImpact = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  20% {
    transform: translate3d(6px, -4px, 0) rotate(0.4deg);
  }
  40% {
    transform: translate3d(-6px, 4px, 0) rotate(-0.4deg);
  }
  60% {
    transform: translate3d(4px, 3px, 0) rotate(0.2deg);
  }
  80% {
    transform: translate3d(-4px, -3px, 0) rotate(-0.2deg);
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-120%, 0, 0);
    opacity: 0;
  }
`;

const fadeInVideo = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default function Hero() {
  const navigate = useSmoothNavigation();
  const createNavHandler = (href) => (event) => navigate(event, href);

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH={{ base: "auto", md: "90vh" }}
      py={{ base: 8, md: 0 }}
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
      <Box
        position="absolute"
        inset={0}
        zIndex={1}
        pointerEvents="none"
        overflow="hidden"
        aria-hidden="true"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={{ base: "90vw", md: "90vw", lg: "90vw" }}
          maxW="1500px"
          height={{ base: "40vh", md: "68vh", lg: "85vh" }}
          borderRadius="2xl"
          transform="translate(-50%, -50%) scale(0.25)"
          opacity={0}
          animation={`${zoomInFromDepth} 2.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`}
          boxShadow="0 60px 160px rgba(0, 0, 0, 0.45)"
          overflow="hidden"
        >
          <Box
            position="absolute"
            inset={0}
            borderRadius="inherit"
            backgroundImage="url('/assets/sicko-design.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            filter="contrast(1.05) saturate(1.1)"
            sx={{
              animation: `${quakeImpact} 0.4s ease-in-out 3, ${slideOutLeft} 0.9s ease-in forwards`,
              animationDelay: "2.4s, 4.8s",
              animationFillMode: "both, forwards",
            }}
          />
          <Box
            position="absolute"
            inset={0}
            borderRadius="inherit"
            bgGradient="linear(to-b, rgba(0,0,0,0.75), rgba(0,0,0,0.35))"
            pointerEvents="none"
          />
        </Box>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={{ base: "90vw", md: "90vw", lg: "90vw" }}
          maxW="1500px"
          height={{ base: "40vh", md: "68vh", lg: "85vh" }}
          borderRadius="2xl"
          transform="translate(-50%, -50%)"
          opacity={0}
          overflow="hidden"
          sx={{
            animation: `${fadeInVideo} 0.8s ease-out forwards`,
            animationDelay: "5.3s",
          }}
        >
          {/* Replace with actual video embed */}
          <Box width="100%" height="100%" bg="black" />
        </Box>
      </Box>
      <Container
        maxW="1200px"
        position="relative"
        zIndex={3}
        pt={{ base: 6, md: 0 }}
      >
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
      {/* Scroll indicator intentionally removed */}
    </Box>
  );
}
