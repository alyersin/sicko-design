"use client";

import { Card, CardBody, VStack, Text } from "@chakra-ui/react";

export default function StatCard({ stat }) {
  return (
    <Card>
      <CardBody>
        <VStack spacing={2} textAlign="center">
          <Text fontSize="2.5rem" fontWeight="800" color="brand.500" lineHeight="1">
            {stat.number}
          </Text>
          <Text
            fontSize="0.9rem"
            color="text.secondary"
            textTransform="uppercase"
            letterSpacing="1px"
          >
            {stat.label}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}

