import { Card, CardBody, VStack, Heading, Text, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function ServiceCard({ service }) {
  return (
    <Card>
      <CardBody>
        <VStack spacing={4} align="flex-start">
          <Text fontSize="3rem">{service.icon}</Text>
          <Heading size="lg" color="text.primary">
            {service.title}
          </Heading>
          <Text color="text.secondary" lineHeight="1.6">
            {service.description}
          </Text>
          <List spacing={2} width="100%">
            {service.features.map((feature, index) => (
              <ListItem key={index} color="text.secondary" pl={6} position="relative">
                <ListIcon
                  as="span"
                  position="absolute"
                  left={0}
                  color="brand.500"
                  fontWeight="bold"
                >
                  ✓
                </ListIcon>
                {feature}
              </ListItem>
            ))}
          </List>
        </VStack>
      </CardBody>
    </Card>
  );
}

