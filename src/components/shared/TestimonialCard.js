"use client";

import { Card, CardBody, VStack, Text, HStack, Box, Avatar } from "@chakra-ui/react";

export default function TestimonialCard({ testimonial }) {
  // Generate initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card
      height="100%"
      bg="white"
      borderRadius="xl"
      boxShadow="0 4px 20px rgba(0, 102, 204, 0.1)"
      border="1px solid"
      borderColor="border.subtle"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 8px 30px rgba(0, 102, 204, 0.2)",
        borderColor: "brand.300",
      }}
      width="100%"
      userSelect="none"
      sx={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <CardBody p={5}>
        <VStack spacing={5} align="flex-start" height="100%">
          {/* Rating Stars */}
          <HStack spacing={1}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Text key={i} color="#ffc107" fontSize="1.25rem" lineHeight="1">
                ★
              </Text>
            ))}
          </HStack>

          {/* Quote Icon */}
          <Box
            fontSize="3rem"
            color="brand.100"
            lineHeight="1"
            position="absolute"
            top={4}
            right={4}
            opacity={0.3}
          >
            "
          </Box>

          {/* Testimonial Text */}
          <Text
            fontSize="1.0625rem"
            lineHeight="1.8"
            color="text.secondary"
            fontStyle="italic"
            flex="1"
            position="relative"
            zIndex={1}
            userSelect="none"
            sx={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            {testimonial.text}
          </Text>

          {/* Author Info */}
          <HStack spacing={4} width="100%" pt={2} borderTop="1px solid" borderColor="border.subtle">
            <Avatar
              name={testimonial.name}
              size="md"
              bgGradient="linear(135deg, brand.400, brand.600)"
              color="white"
              fontWeight="bold"
              fontSize="md"
            >
              {getInitials(testimonial.name)}
            </Avatar>
            <VStack align="flex-start" spacing={0} flex="1">
              <Text fontWeight="700" color="text.primary" fontSize="1rem">
                {testimonial.name}
              </Text>
              <Text color="text.muted" fontSize="0.875rem">
                {testimonial.role}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
