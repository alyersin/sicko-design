import { Box, Container, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ServiceCard from "../shared/ServiceCard";
import { SERVICES } from "../../constants/services";

export default function ServicesSection() {
  return (
    <Box as="section" id="services" py={20} bg="bg.surface">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Serviciile Noastre
            </Heading>
            <Text
              fontSize="1.125rem"
              color="text.secondary"
              textAlign="center"
              maxW="600px"
            >
              Oferim o gamă completă de servicii de detailing auto pentru a-ți menține mașina în stare perfectă
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

