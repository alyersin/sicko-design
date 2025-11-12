"use client";

import { Box, Container, VStack, Heading, Text, Button, HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import PriceCalculator from "../../components/calculator/PriceCalculator";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { CalculatorIcon, ZapIcon, DiamondIcon, TargetIcon, InfoIcon, ClipboardIcon, SearchIcon, MessageIcon, GiftIcon, PhoneIcon } from "../../components/icons";

export default function CalculatorPage() {
  return (
    <Box minH="100vh" bgGradient="linear(135deg, brand.50 0%, white 50%, brand.50 100%)" position="relative" overflow="hidden">
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        width="400px"
        height="400px"
        borderRadius="full"
        bgGradient="linear(135deg, brand.200, brand.300)"
        opacity={0.1}
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        width="500px"
        height="500px"
        borderRadius="full"
        bgGradient="linear(135deg, brand.300, brand.400)"
        opacity={0.1}
        filter="blur(80px)"
      />

      <Header />
      <Box pt={24} pb={20} position="relative" zIndex={1}>
        <Container maxW="1000px">
          <VStack spacing={12}>
            {/* Header Section */}
            <VStack spacing={6} textAlign="center" maxW="700px" mx="auto">
              <Box
                p={4}
                bgGradient="linear(135deg, brand.400, brand.600)"
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0, 102, 204, 0.3)"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <Icon as={CalculatorIcon} w={16} h={16} color="white" />
              </Box>
              <Heading
                size="2xl"
                bgGradient="linear(135deg, brand.600, brand.500)"
                bgClip="text"
                fontWeight="800"
                letterSpacing="-0.02em"
              >
                Calculator Preț Detailing
              </Heading>
              <Text fontSize="xl" color="text.secondary" lineHeight="1.8" fontWeight="500">
                Obține instant o estimare precisă pentru serviciile de detailing auto. 
                Selectează tipul de vehicul și serviciile dorite pentru a calcula prețul total.
              </Text>
              <HStack spacing={4} pt={4}>
                <Box
                  px={4}
                  py={2}
                  bg="white"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.200"
                  boxShadow="0 2px 10px rgba(0, 102, 204, 0.1)"
                >
                  <HStack spacing={2}>
                    <Icon as={ZapIcon} w={4} h={4} color="brand.600" />
                    <Text fontSize="sm" fontWeight="600" color="brand.600">
                      Calcul Rapid
                    </Text>
                  </HStack>
                </Box>
                <Box
                  px={4}
                  py={2}
                  bg="white"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.200"
                  boxShadow="0 2px 10px rgba(0, 102, 204, 0.1)"
                >
                  <HStack spacing={2}>
                    <Icon as={DiamondIcon} w={4} h={4} color="brand.600" />
                    <Text fontSize="sm" fontWeight="600" color="brand.600">
                      Prețuri Transparente
                    </Text>
                  </HStack>
                </Box>
                <Box
                  px={4}
                  py={2}
                  bg="white"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.200"
                  boxShadow="0 2px 10px rgba(0, 102, 204, 0.1)"
                >
                  <HStack spacing={2}>
                    <Icon as={TargetIcon} w={4} h={4} color="brand.600" />
                    <Text fontSize="sm" fontWeight="600" color="brand.600">
                      Estimare Precisă
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>

            {/* Calculator Component */}
            <Box width="100%" maxW="900px">
              <PriceCalculator />
            </Box>

            {/* Additional Info Section */}
            <Box
              p={8}
              bg="white"
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
              border="1px solid"
              borderColor="border.subtle"
              width="100%"
            >
              <VStack spacing={4} align="flex-start">
                <HStack spacing={2}>
                  <Icon as={InfoIcon} w={6} h={6} color="brand.500" />
                  <Heading size="md" color="text.primary">
                    Informații Importante
                  </Heading>
                </HStack>
                <VStack spacing={3} align="flex-start" color="text.secondary">
                  <HStack spacing={3} align="flex-start">
                    <Icon as={ClipboardIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      Prețurile afișate sunt <strong>estimative</strong> și pot varia în funcție de starea actuală a vehiculului.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start">
                    <Icon as={SearchIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      Pentru o <strong>evaluare precisă</strong>, recomandăm o consultare la fața locului.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start">
                    <Icon as={MessageIcon} w={5} h={5} color="brand.500" mt={1} flexShrink={0} />
                    <Text>
                      După calcularea prețului, poți <strong>solicita o ofertă</strong> și te vom contacta în cel mai scurt timp.
                    </Text>
                  </HStack>
                  <HStack spacing={3} align="flex-start">
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
              <Text fontSize="lg" color="text.secondary" fontWeight="500">
                Ai întrebări sau preferi să discutăm direct?
              </Text>
              <HStack spacing={4}>
                <Button
                  as={Link}
                  href="/#contact"
                  colorScheme="brand"
                  size="lg"
                  bgGradient="linear(to-r, brand.500, brand.600)"
                  boxShadow="0 4px 15px rgba(0, 102, 204, 0.4)"
                  _hover={{
                    bgGradient: "linear(to-r, brand.600, brand.700)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0, 102, 204, 0.5)",
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
                  size="lg"
                  borderWidth="2px"
                  _hover={{
                    bg: "brand.50",
                    borderColor: "brand.500",
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

