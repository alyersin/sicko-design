"use client";

import { Box, Container, VStack, Heading, Text } from "@chakra-ui/react";

export default function MapSection() {
  return (
    <Box as="section" py={20} bg="bg.surface">
      <Container maxW="1200px">
        <VStack spacing={8}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Locația Noastră
            </Heading>
            <Text
              fontSize="1.125rem"
              color="text.secondary"
              textAlign="center"
              maxW="600px"
            >
              Vizitează-ne la sediul nostru din Constanța
            </Text>
          </VStack>

          <Box
            width="100%"
            height="400px"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5!2d28.6584!3d44.1598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA5JzM1LjMiTiAyOMKwMzknMzAuMiJF!5e0!3m2!1sen!2sro!4v1234567890"
              title="Sicko Design Location"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

