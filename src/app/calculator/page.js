"use client";

import { Box, Container, VStack, Heading, Text, Button, HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import PriceCalculator from "../../components/calculator/PriceCalculator";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { CalculatorIcon, ZapIcon, DiamondIcon, TargetIcon, InfoIcon, ClipboardIcon, SearchIcon, MessageIcon, GiftIcon, PhoneIcon } from "../../components/icons";

export default function CalculatorPage() {
  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      bgGradient="linear(135deg, rgba(4,18,48,1) 0%, rgba(0,102,204,0.65) 50%, rgba(8,17,26,1) 100%)"
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.4}
        backgroundImage="radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0, transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08) 0, transparent 35%), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.1) 0, transparent 40%)"
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="absolute"
        inset={0}
        opacity={0.25}
        bg="linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)"
        mixBlendMode="screen"
        pointerEvents="none"
        zIndex={0}
      />

      <Header />
      <Box pt={{ base: 16, md: 24 }} pb={{ base: 12, md: 20 }} position="relative" zIndex={1}>
        <Container maxW="1000px" px={{ base: 4, md: 6 }}>
          <VStack spacing={{ base: 8, md: 12 }}>
            {/* Header Section */}
            <VStack spacing={{ base: 4, md: 6 }} textAlign="center" maxW="700px" mx="auto">
              <Box
                p={{ base: 3, md: 4 }}
                bgGradient="linear(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))"
                borderRadius="2xl"
                boxShadow="0 12px 35px rgba(3, 15, 28, 0.4)"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Icon as={CalculatorIcon} w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} color="white" />
              </Box>
              <Heading
                fontSize={{ base: "2.25rem", md: "3rem" }}
                color="white"
                fontWeight="800"
                letterSpacing="-0.02em"
                lineHeight="1.1"
                textShadow="0 10px 35px rgba(0,0,0,0.45)"
              >
                Calculator Preț Detailing
              </Heading>
              <Text
                fontSize={{ base: "md", md: "xl" }}
                color="rgba(255,255,255,0.86)"
                lineHeight={{ base: "1.6", md: "1.8" }}
                fontWeight="500"
              >
                Obține instant o estimare precisă pentru serviciile de detailing auto. 
                Selectează tipul de vehicul și serviciile dorite pentru a calcula prețul total.
              </Text>
              <HStack spacing={4} pt={4} flexWrap="wrap" justify="center" width="100%">
                <Box
                  px={{ base: 3, md: 4 }}
                  py={{ base: 2, md: 2 }}
                  bg="rgba(255,255,255,0.12)"
                  borderRadius="full"
                  border="1px solid rgba(255,255,255,0.25)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                  minW={{ base: "100%", sm: "auto" }}
                >
                  <HStack spacing={2}>
                    <Icon as={ZapIcon} w={4} h={4} color="white" />
                    <Text fontSize="sm" fontWeight="600" color="white" textAlign="center">
                      Calcul Rapid
                    </Text>
                  </HStack>
                </Box>
                <Box
                  px={{ base: 3, md: 4 }}
                  py={{ base: 2, md: 2 }}
                  bg="rgba(255,255,255,0.12)"
                  borderRadius="full"
                  border="1px solid rgba(255,255,255,0.25)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                  minW={{ base: "100%", sm: "auto" }}
                >
                  <HStack spacing={2}>
                    <Icon as={DiamondIcon} w={4} h={4} color="white" />
                    <Text fontSize="sm" fontWeight="600" color="white" textAlign="center">
                      Prețuri Transparente
                    </Text>
                  </HStack>
                </Box>
                <Box
                  px={{ base: 3, md: 4 }}
                  py={{ base: 2, md: 2 }}
                  bg="rgba(255,255,255,0.12)"
                  borderRadius="full"
                  border="1px solid rgba(255,255,255,0.25)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                  minW={{ base: "100%", sm: "auto" }}
                >
                  <HStack spacing={2}>
                    <Icon as={TargetIcon} w={4} h={4} color="white" />
                    <Text fontSize="sm" fontWeight="600" color="white" textAlign="center">
                      Estimare Precisă
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>

            {/* Calculator Component */}
            <Box
              width="100%"
              maxW="980px"
              borderRadius="3xl"
              p={{ base: 3, md: 5 }}
              bgGradient="linear(145deg, rgba(12,36,74,0.75), rgba(21,70,121,0.75))"
              border="1px solid rgba(112,181,255,0.2)"
              boxShadow="0 35px 110px rgba(0,0,0,0.55)"
              backdropFilter="blur(10px)"
            >
              <Box
                bgGradient="linear(145deg, rgba(17,39,71,0.95), rgba(24,58,106,0.9))"
                borderRadius="2xl"
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.15)"
                overflow="hidden"
              >
                <Box
                  bgGradient="linear(180deg, rgba(17,39,71,0.93) 0%, rgba(18,46,90,0.93) 100%)"
                  borderRadius="2xl"
                  px={{ base: 3, md: 5 }}
                  py={{ base: 3, md: 5 }}
                >
                  <PriceCalculator />
                </Box>
              </Box>
            </Box>

            {/* Additional Info Section */}
            <Box
              p={{ base: 5, md: 8 }}
              bg="rgba(255,255,255,0.92)"
              borderRadius="2xl"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.15)"
              border="1px solid rgba(255,255,255,0.6)"
              width="100%"
            >
              <VStack spacing={4} align="flex-start">
                <HStack spacing={2}>
                  <Icon as={InfoIcon} w={{ base: 5, md: 6 }} h={{ base: 5, md: 6 }} color="brand.500" />
                  <Heading fontSize={{ base: "lg", md: "md" }} color="text.primary">
                    Informații Importante
                  </Heading>
                </HStack>
                <VStack spacing={3} align="flex-start" color="text.secondary" fontSize={{ base: "sm", md: "md" }}>
                  <HStack spacing={3} align="flex-start" width="100%">
                    <Icon as={ClipboardIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      Prețurile afișate sunt <strong>estimative</strong> și pot varia în funcție de starea actuală a vehiculului.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start" width="100%">
                    <Icon as={SearchIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      Pentru o <strong>evaluare precisă</strong>, recomandăm o consultare la fața locului.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start" width="100%">
                    <Icon as={MessageIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      După calcularea prețului, poți <strong>solicita o ofertă</strong> și te vom contacta în cel mai scurt timp.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start" width="100%">
                    <Icon as={GiftIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      Oferim <strong>pachete speciale</strong> pentru combinații de servicii multiple.
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            {/* CTA Section */}
            <VStack spacing={4}>
              <Text fontSize={{ base: "md", md: "lg" }} color="rgba(255,255,255,0.9)" fontWeight="500" textAlign="center">
                Ai întrebări sau preferi să discutăm direct?
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center" width="100%">
                <Button
                  as={Link}
                  href="/#contact"
                  colorScheme="brand"
                  size={{ base: "md", md: "lg" }}
                  bgGradient="linear(135deg, #0091ff, #5ad7ff)"
                  boxShadow="0 20px 45px rgba(0, 145, 255, 0.35)"
                  _hover={{
                    bgGradient: "linear(135deg, #5ad7ff, #0091ff)",
                    transform: "translateY(-3px) scale(1.01)",
                    boxShadow: "0 30px 60px rgba(0, 145, 255, 0.4)",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <HStack spacing={2}>
                    <Icon as={PhoneIcon} w={5} h={5} />
                    <Text>Contactează-ne</Text>
                  </HStack>
                </Button>
                <Button
                  as={Link}
                  href="/#services"
                  variant="outline"
                  size={{ base: "md", md: "lg" }}
                  borderWidth="2px"
                  borderColor="rgba(255,255,255,0.6)"
                  color="white"
                  boxShadow="0 10px 25px rgba(0,0,0,0.35)"
                  _hover={{
                    bg: "rgba(255,255,255,0.12)",
                    borderColor: "white",
                    transform: "translateY(-3px)",
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <HStack spacing={2}>
                    <Icon as={SearchIcon} w={5} h={5} />
                    <Text>Vezi Serviciile</Text>
                  </HStack>
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
