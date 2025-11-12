import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function FAQItem({ faq }) {
  return (
    <AccordionItem border="none" mb={4}>
      <AccordionButton
        py={4}
        px={0}
        _hover={{ bg: "transparent" }}
        _expanded={{ bg: "transparent" }}
      >
        <Box flex="1" textAlign="left">
          <Heading size="md" color="text.primary" fontWeight="600">
            {faq.question}
          </Heading>
        </Box>
        <AccordionIcon color="brand.500" />
      </AccordionButton>
      <AccordionPanel pb={4} px={0}>
        <Text color="text.secondary" lineHeight="1.8">
          {faq.answer}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
}

