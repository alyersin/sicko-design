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
                Sicko Design - Excelență în Fiecare Detaliu
              </Heading>
              <Text fontSize="1.0625rem" lineHeight="1.8" color="text.secondary">
                Suntem o echipă tânără și dinamică din Constanța, pasionată de arta auto detailing. 
                La Sicko Design, nu doar curățăm mașini - le readucem strălucirea și protecția pe care 
                o merită. Fiecare proiect este o oportunitate de a demonstra că atenția la detalii 
                face diferența între un serviciu bun și unul excepțional.
              </Text>
              <Text fontSize="1.0625rem" lineHeight="1.8" color="text.secondary">
                Ne specializăm în tehnici moderne de detailing, folosind echipamente profesionale și 
                produse de ultimă generație. Indiferent dacă ai nevoie de o spălare rapidă sau de un 
                pachet complet de protecție ceramică, abordăm fiecare lucrare cu același nivel de 
                seriozitate și profesionalism. Mașina ta nu este doar un vehicul - este o investiție 
                pe care o protejăm cu măiestrie.
              </Text>
              <Text fontSize="1.0625rem" lineHeight="1.8" color="text.secondary" fontWeight="500">
                Venim la tine sau poți aduce mașina la noi. Flexibilitatea și satisfacția clientului 
                sunt prioritățile noastre principale.
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

