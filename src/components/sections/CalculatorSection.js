"use client";

import { Box, Container, VStack, Heading, Text, Grid } from "@chakra-ui/react";
import PriceCalculator from "../shared/PriceCalculator";

export default function CalculatorSection() {
  return (
    <Box as="section" id="calculator" py={20} bg="bg.body">
      <Container maxW="1200px">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
          <VStack spacing={6} align="flex-start">
            <Heading size="xl" color="text.primary">
              Calculează Prețul Serviciilor
            </Heading>
            <Text fontSize="1.125rem" color="text.secondary" lineHeight="1.8">
              Folosește calculatorul nostru pentru a obține o estimare rapidă a prețului serviciilor
              de detailing. Selectează tipul de vehicul și serviciile dorite pentru a vedea prețul
              total estimativ.
            </Text>
            <VStack spacing={3} align="flex-start" pt={4}>
              <Text fontWeight="600" color="text.primary">
                Ce include calcularea prețului:
              </Text>
              <Box as="ul" pl={6} color="text.secondary">
                <li>Tipul de vehicul (mărimea afectează prețul)</li>
                <li>Serviciile selectate</li>
                <li>Prețuri competitive și transparente</li>
                <li>Estimare rapidă și precisă</li>
              </Box>
            </VStack>
          </VStack>

          <Box>
            <PriceCalculator />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

