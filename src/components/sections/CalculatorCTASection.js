"use client";

import { Box, Container, VStack, Heading, Text, Button, HStack, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { CalculatorIcon } from "../icons";

export default function CalculatorCTASection() {
  return (
    <Box as="section" py={16} bgGradient="linear(135deg, brand.500 0%, brand.600 100%)" position="relative" overflow="hidden">
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        filter="blur(40px)"
      />
      <Box
        position="absolute"
        bottom="-50px"
        left="-50px"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        filter="blur(40px)"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={6} textAlign="center">
          <Box
            p={4}
            bgGradient="linear(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
            borderRadius="2xl"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={CalculatorIcon} w={16} h={16} color="white" />
          </Box>
          <Heading size="xl" color="white" fontWeight="800">
            Calculează Prețul Serviciilor Tale
          </Heading>
          <Text fontSize="lg" color="rgba(255, 255, 255, 0.9)" maxW="600px">
            Obține instant o estimare precisă pentru serviciile de detailing. 
            Selectează tipul de vehicul și serviciile dorite.
          </Text>
          <Button
            as={Link}
            href="/calculator"
            size="lg"
            bg="white"
            color="brand.600"
            fontWeight="700"
            px={8}
            py={6}
            borderRadius="xl"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
            _hover={{
              bg: "brand.50",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
            }}
            style={{ textDecoration: "none" }}
          >
            <HStack spacing={2}>
              <Icon as={CalculatorIcon} w={5} h={5} />
              <Text>Deschide Calculatorul</Text>
            </HStack>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

