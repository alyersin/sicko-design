"use client";

import { Card, CardBody, VStack, Text, HStack, Box } from "@chakra-ui/react";

export default function TestimonialCard({ testimonial }) {
  return (
    <Card>
      <CardBody>
        <VStack spacing={4} align="flex-start">
          <HStack spacing={1}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Text key={i} color="#ffc107" fontSize="1.25rem">
                ★
              </Text>
            ))}
          </HStack>
          <Text
            fontSize="1.0625rem"
            lineHeight="1.8"
            color="text.secondary"
            fontStyle="italic"
          >
            "{testimonial.text}"
          </Text>
          <Box>
            <Text fontWeight="600" color="text.primary" fontSize="1rem">
              {testimonial.name}
            </Text>
            <Text color="text.muted" fontSize="0.875rem">
              {testimonial.role}
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
}

