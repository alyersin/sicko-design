"use client";

import { Box, Container, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import TestimonialCard from "../shared/TestimonialCard";
import { TESTIMONIALS } from "../../constants/app";

export default function TestimonialsSection() {
  return (
    <Box as="section" py={20} bg="bg.surface">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading size="xl" textAlign="center">
            Ce Spun Clienții
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

