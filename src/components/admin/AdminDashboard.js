"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiLogOut, FiType, FiImage, FiVideo, FiUploadCloud, FiCheckCircle, FiArrowLeft } from "react-icons/fi";

const SectionCard = ({ title, icon: Icon, description, children }) => (
  <Box bg="gray.700" borderRadius="xl" p={6} border="1px solid rgba(255,255,255,0.08)">
    <HStack spacing={3} mb={3}>
      <Box
        bg="rgba(255,255,255,0.08)"
        borderRadius="lg"
        p={2}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon size={20} />
      </Box>
      <Heading size="md">{title}</Heading>
    </HStack>
    {description && (
      <Text color="gray.300" mb={4}>
        {description}
      </Text>
    )}
    {children}
  </Box>
);

export default function AdminDashboard() {
  const [heroContent, setHeroContent] = useState({ title: "", subtitle: "" });
  const [heroVideo, setHeroVideo] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleSave = (section) => {
    toast({
      title: `${section} salvat`,
      description: "Integrează API-ul preferat pentru a persista aceste modificări.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  const handleBackHome = () => router.push("/");

  return (
    <Box
      bg="gray.800"
      color="white"
      p={{ base: 8, md: 12 }}
      borderRadius="2xl"
      boxShadow="0 40px 120px rgba(0, 0, 0, 0.5)"
    >
      <Stack direction={{ base: "column", md: "row" }} justify="space-between" spacing={6} mb={8}>
        <Box>
          <Heading size="lg">Panou administrare Sicko Design</Heading>
          <Text color="gray.300">Gestionează conținutul media și textele site-ului dintr-un singur loc.</Text>
        </Box>
        <HStack spacing={3}>
          <Button leftIcon={<FiArrowLeft />} variant="ghost" onClick={handleBackHome}>
            Înapoi la site
          </Button>
          <Button leftIcon={<FiLogOut />} variant="outline" colorScheme="red" onClick={handleLogout}>
            Deconectează-te
          </Button>
        </HStack>
      </Stack>
      <Divider borderColor="rgba(255,255,255,0.1)" mb={8} />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <SectionCard
          title="Hero Content"
          icon={FiType}
          description="Actualizează titlul și subtitlul afișate în secțiunea principală."
        >
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Noul titlu</FormLabel>
              <Input
                value={heroContent.title}
                onChange={(event) => setHeroContent((prev) => ({ ...prev, title: event.target.value }))}
                placeholder="Ex: Detailing Auto pentru Perfecțiune"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Subtitlu</FormLabel>
              <Textarea
                rows={4}
                value={heroContent.subtitle}
                onChange={(event) => setHeroContent((prev) => ({ ...prev, subtitle: event.target.value }))}
                placeholder="Descriere scurtă pentru clienți"
              />
            </FormControl>
            <Button colorScheme="brand" onClick={() => handleSave("Conținutul Hero")}>
              Salvează modificările
            </Button>
          </VStack>
        </SectionCard>

        <SectionCard
          title="Bibliotecă Media"
          icon={FiImage}
          description="Încarcă sau elimină imagini utilizate în secțiunile galerie, testimoniale sau fundaluri."
        >
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Adaugă imagini noi</FormLabel>
              <Input type="file" multiple accept="image/*" />
            </FormControl>
            <Button leftIcon={<FiUploadCloud />} variant="outline" onClick={() => handleSave("Biblioteca media")}>
              Încărcați fișierele selectate
            </Button>
            <List spacing={2}>
              <ListItem display="flex" alignItems="center" gap={2} color="gray.300">
                <ListIcon as={FiCheckCircle} color="brand.400" />
                Folosește format .jpg sau .png pentru compatibilitate maximă.
              </ListItem>
              <ListItem display="flex" alignItems="center" gap={2} color="gray.300">
                <ListIcon as={FiCheckCircle} color="brand.400" />
                Fișierele se stochează în directorul `public/assets`.
              </ListItem>
            </List>
          </VStack>
        </SectionCard>

        <SectionCard
          title="Video Background"
          icon={FiVideo}
          description="Actualizează materialul video utilizat în hero după animația imaginii."
        >
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Fișier MP4</FormLabel>
              <Input
                type="file"
                accept="video/mp4"
                onChange={(event) => setHeroVideo(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Sau link existent</FormLabel>
              <Input
                placeholder="/assets/video.mp4"
                value={heroVideo}
                onChange={(event) => setHeroVideo(event.target.value)}
              />
            </FormControl>
            <Button variant="outline" onClick={() => handleSave("Video background")}>
              Actualizează video-ul
            </Button>
          </VStack>
        </SectionCard>

        <SectionCard
          title="Instrucțiuni rapide"
          icon={FiCheckCircle}
          description="Pași recomandați pentru a sincroniza conținutul administrat cu site-ul live."
        >
          <List spacing={3} color="gray.200">
            <ListItem>1. Editează textele și media folosind formularele de mai sus.</ListItem>
            <ListItem>2. Implementează un API sau conectează-te la un CMS (ex: Sanity, Contentful) pentru persistență.</ListItem>
            <ListItem>3. Repornește serverul după ce încarci fișiere noi în `public/assets`.</ListItem>
            <ListItem>4. Folosește acest panou doar prin acces direct la `/admin-console` pentru a-l ține ascuns vizitatorilor.</ListItem>
          </List>
        </SectionCard>
      </SimpleGrid>
    </Box>
  );
}
