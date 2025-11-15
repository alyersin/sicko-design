import { Box, Container, Heading, Text, List, ListItem, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import WhatsAppButton from "../../components/shared/WhatsAppButton";
import CookieSettingsButton from "../../components/shared/CookieSettingsButton";
import GDPRConsent from "../../components/shared/GDPRConsent";

const sitemapLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre Noi", href: "/#about" },
  { label: "Servicii", href: "/#services" },
  { label: "Calculator Preț", href: "/calculator" },
  { label: "Galerie", href: "/#gallery" },
  { label: "Procesul Nostru", href: "/#process" },
  { label: "Testimoniale", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Hartă", href: "/#map" },
  { label: "Termeni și Condiții", href: "/termeni-si-conditii" },
  { label: "Politica de Confidențialitate", href: "/politica-confidentialitate" },
];

export default function SitemapPage() {
  return (
    <Box minH="100vh" bg="bg.body">
      <Header />
      <Box pt={24} pb={16}>
        <Container maxW="720px">
          <VStack align="flex-start" spacing={6}>
            <Heading size="xl">Hartă Site</Heading>
            <Text color="text.secondary" lineHeight="1.8">
              Utilizează această hartă pentru a naviga rapid către toate zonele importante ale
              site-ului Sicko Design. O actualizăm constant pe măsură ce adăugăm conținut nou.
            </Text>
            <List spacing={3} width="100%">
              {sitemapLinks.map((link) => (
                <ListItem key={link.href}>
                  <Link as={NextLink} href={link.href} color="brand.500" fontWeight="600">
                    {link.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </VStack>
        </Container>
      </Box>
      <Footer />
      <WhatsAppButton />
      <CookieSettingsButton />
      <GDPRConsent />
    </Box>
  );
}

