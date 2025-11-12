import { Box, Container, VStack, Heading, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { PROCESS_STEPS } from "../../constants/process";

export default function ProcessSection() {
  return (
    <Box as="section" id="process" py={20} bg="bg.body">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Cum Lucrăm
            </Heading>
            <Text
              fontSize="1.125rem"
              color="text.secondary"
              textAlign="center"
              maxW="600px"
            >
              Procesul nostru pas cu pas pentru a asigura rezultate de excepție
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8} width="100%">
            {PROCESS_STEPS.map((step, index) => (
              <VStack
                key={step.id}
                spacing={4}
                align="center"
                position="relative"
              >
                <Box
                  width="80px"
                  height="80px"
                  borderRadius="full"
                  bg="brand.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2.5rem"
                  color="white"
                  fontWeight="bold"
                  boxShadow="0 4px 20px rgba(0, 102, 204, 0.3)"
                  position="relative"
                  zIndex={2}
                >
                  {step.icon}
                </Box>
                {index < PROCESS_STEPS.length - 1 && (
                  <Box
                    display={{ base: "none", md: "block" }}
                    position="absolute"
                    top="40px"
                    left="calc(50% + 40px)"
                    width="calc(100% - 80px)"
                    height="2px"
                    bg="brand.200"
                    zIndex={1}
                  />
                )}
                <VStack spacing={2} align="center" textAlign="center">
                  <Text
                    fontSize="sm"
                    fontWeight="600"
                    color="brand.500"
                    textTransform="uppercase"
                    letterSpacing="1px"
                  >
                    Pas {step.id}
                  </Text>
                  <Heading size="sm" color="text.primary">
                    {step.title}
                  </Heading>
                  <Text fontSize="sm" color="text.secondary" lineHeight="1.6">
                    {step.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

