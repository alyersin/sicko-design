"use client";

import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { GALLERY_ITEMS_COUNT, GALLERY_FILTERS } from "../../constants/app";

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Generate gallery items with categories
  const galleryItems = Array.from({ length: GALLERY_ITEMS_COUNT }, (_, i) => {
    const categories = ["exterior", "interior", "ceramic", "before-after"];
    return {
      id: i + 1,
      category: categories[i % categories.length],
      title: `Proiect ${i + 1}`,
    };
  });

  const filteredItems =
    selectedFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    onOpen();
  };

  return (
    <>
      <Box as="section" id="gallery" py={20} bg="bg.body">
        <Container maxW="1200px">
          <VStack spacing={12}>
            <VStack spacing={4}>
              <Heading size="xl" textAlign="center">
                Galerie
              </Heading>
              <Text
                fontSize="1.125rem"
                color="text.secondary"
                textAlign="center"
                maxW="600px"
              >
                Rezultatele vorbesc de la sine. Vezi transformările realizate de echipa noastră
              </Text>
            </VStack>

            {/* Filter Buttons */}
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {GALLERY_FILTERS.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "solid" : "outline"}
                  colorScheme="brand"
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </HStack>

            {/* Gallery Grid */}
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6} width="100%">
              {filteredItems.map((item) => (
                <Box
                  key={item.id}
                  aspectRatio="4/3"
                  bgGradient="linear(135deg, dark-black 0%, #2d2d2d 100%)"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="600"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 30px rgba(0, 102, 204, 0.3)",
                  }}
                  onClick={() => handleImageClick(item)}
                >
                  <VStack spacing={2}>
                    <Text fontSize="2rem">{item.category === "before-after" ? "📸" : "🚗"}</Text>
                    <Text fontSize="sm">{item.title}</Text>
                    <Text fontSize="xs" opacity={0.7}>
                      {GALLERY_FILTERS.find((f) => f.id === item.category)?.label}
                    </Text>
                  </VStack>
                  <Box
                    position="absolute"
                    top={2}
                    right={2}
                    bg="rgba(0, 0, 0, 0.6)"
                    borderRadius="full"
                    p={2}
                    fontSize="1.5rem"
                  >
                    🔍
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" />
          <ModalBody p={0}>
            {selectedImage && (
              <Box
                aspectRatio="16/9"
                bgGradient="linear(135deg, dark-black 0%, #2d2d2d 100%)"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="3rem"
              >
                {selectedImage.category === "before-after" ? "📸" : "🚗"}
                <VStack spacing={2} position="absolute">
                  <Text fontSize="xl" fontWeight="bold">
                    {selectedImage.title}
                  </Text>
                  <Text fontSize="sm" opacity={0.8}>
                    {GALLERY_FILTERS.find((f) => f.id === selectedImage.category)?.label}
                  </Text>
                </VStack>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
