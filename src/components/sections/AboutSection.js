"use client";

import { Box, Container, VStack, Heading, Text, SimpleGrid, Grid } from "@chakra-ui/react";
import StatCard from "../shared/StatCard";
import { STATS } from "../../constants/app";

export default function AboutSection() {
  return (
    <Box as="section" id="about" py={20} bg="bg.body">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Despre Noi
            </Heading>
          </VStack>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={16} alignItems="center">
            <VStack spacing={6} align="flex-start">
              <Heading size="lg" color="brand.500">
                Pasiune pentru Detalii
              </Heading>
              <Text fontSize="1.0625rem" lineHeight="1.8" color="text.secondary">
                La Sicko Design, transformăm fiecare mașină într-o operă de artă. Cu ani de experiență 
                în industria auto detailing, echipa noastră aduce perfecțiune în fiecare detaliu.
              </Text>
              <Text fontSize="1.0625rem" lineHeight="1.8" color="text.secondary">
                Folosim doar produse premium și tehnici avansate pentru a oferi rezultate de excepție. 
                De la spălare exterior până la protecție ceramică, fiecare serviciu este executat cu 
                precizie și dedicare.
              </Text>
            </VStack>
            
            <Box
              width="100%"
              aspectRatio="4/3"
              bgGradient="linear(135deg, brand.500 0%, brand.600 100%)"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontWeight="600"
              boxShadow="0 10px 40px rgba(0, 102, 204, 0.2)"
            >
              Imagine Detailing
            </Box>
          </Grid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
            {STATS.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

