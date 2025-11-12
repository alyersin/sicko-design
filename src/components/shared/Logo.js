import Link from "next/link";
import { Box, VStack, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Box display="flex" alignItems="center">
        <VStack spacing={0} align="flex-start">
          <Text
            fontSize={{ base: "1.25rem", md: "1.5rem" }}
            fontWeight="800"
            color="brand.500"
            letterSpacing="2px"
            lineHeight="1"
          >
            SICKO
          </Text>
          <Text
            fontSize={{ base: "0.65rem", md: "0.75rem" }}
            fontWeight="600"
            color="text.secondary"
            letterSpacing="4px"
            textTransform="uppercase"
            lineHeight="1"
          >
            DESIGN
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
