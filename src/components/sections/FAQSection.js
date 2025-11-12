import { Box, Container, VStack, Heading, Text, Accordion } from "@chakra-ui/react";
import FAQItem from "../shared/FAQItem";
import { FAQ_ITEMS } from "../../constants/faq";

export default function FAQSection() {
  return (
    <Box as="section" id="faq" py={20} bg="bg.surface">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Întrebări Frecvente
            </Heading>
            <Text
              fontSize="1.125rem"
              color="text.secondary"
              textAlign="center"
              maxW="600px"
            >
              Răspunsuri la cele mai comune întrebări despre serviciile noastre de detailing
            </Text>
          </VStack>

          <Box width="100%" maxW="800px">
            <Accordion allowToggle>
              {FAQ_ITEMS.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </Accordion>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

