import { Box, Container, Heading, Text, Divider, VStack, List, ListItem } from "@chakra-ui/react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import WhatsAppButton from "../../components/shared/WhatsAppButton";
import CookieSettingsButton from "../../components/shared/CookieSettingsButton";
import GDPRConsent from "../../components/shared/GDPRConsent";

const sections = [
  {
    title: "1. Cine suntem",
    content:
      "Sicko Design este un atelier de detailing auto cu sediul în Constanța. Acționăm în calitate de operator de date și prelucrăm informațiile strict pentru a răspunde solicitărilor, a furniza servicii și a îndeplini obligațiile legale.",
  },
  {
    title: "2. Ce date colectăm",
    content:
      "Colectăm nume, număr de telefon, adresă de email, tipul serviciului dorit și informații despre vehicul atunci când completezi formularele sau ne contactezi prin WhatsApp. În plus, folosim cookie-uri necesare și, doar cu acordul tău, module pentru analiză și marketing.",
  },
  {
    title: "3. Temeiul prelucrării",
    content:
      "Prelucrăm datele pentru a executa un contract sau pentru a lua măsuri precontractuale, pentru a respecta obligațiile fiscale și contabile, pe baza consimțământului tău expres pentru marketing și analiză, precum și în baza interesului legitim de a îmbunătăți experiența utilizatorilor.",
  },
  {
    title: "4. Durata stocării",
    content:
      "Păstrăm datele doar atât timp cât este necesar pentru scopul pentru care au fost colectate: maximum 3 ani pentru comunicări comerciale, conform termenelor legale pentru documentele financiar-contabile și până la retragerea consimțământului pentru materialul promoțional.",
  },
  {
    title: "5. Drepturile tale",
    content:
      "Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate, opoziție și retragerea consimțământului. Pentru exercitarea lor, trimite o solicitare la contact@sickodesign.ro, iar noi îți vom răspunde în maximum 30 de zile.",
  },
  {
    title: "6. Transferuri și securitate",
    content:
      "Datele sunt stocate pe infrastructuri sigure localizate în Uniunea Europeană, iar accesul este restricționat doar personalului autorizat. Nu vindem și nu transferăm informațiile către terți în scopuri comerciale. Dacă folosim furnizori implicați în procesarea plăților sau a analizelor, aceștia respectă aceleași standarde GDPR.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Box minH="100vh" bg="bg.body">
      <Header />
      <Box pt={24} pb={16}>
        <Container maxW="960px">
          <VStack align="flex-start" spacing={6}>
            <Heading size="xl">Politica de Confidențialitate</Heading>
            <Text color="text.secondary" lineHeight="1.8">
              Acest document descrie modul în care Sicko Design colectează, folosește și protejează
              datele tale personale atunci când vizitezi site-ul sau soliciți serviciile noastre.
            </Text>
            <Divider />
            {sections.map((section, index) => (
              <Box key={section.title} width="100%">
                <Heading size="md" mb={3}>
                  {section.title}
                </Heading>
                <Text color="text.secondary" lineHeight="1.8">
                  {section.content}
                </Text>
                {index !== sections.length - 1 && <Divider my={6} />}
              </Box>
            ))}
            <Box id="cookie-policy" width="100%">
              <Heading size="md" mb={3}>
                7. Politica de Cookie
              </Heading>
              <Text color="text.secondary" lineHeight="1.8" mb={4}>
                Cookie-urile necesare asigură funcționarea formularului, securitatea accesului și
                memorarea preferințelor tale GDPR. Cookie-urile de analiză (Google Analytics sau
                instrumente similare) sunt activate doar după consimțământ și ne ajută să măsurăm
                performanța site-ului. Cookie-urile de marketing personalizează campaniile și pot
                proveni de la parteneri precum Meta sau Google Ads. Poți modifica oricând
                preferințele din bannerul GDPR sau din setările browserului.
              </Text>
              <List spacing={2} color="text.secondary">
                <ListItem>• Durata de viață: între sesiune și maximum 12 luni.</ListItem>
                <ListItem>• Date colectate: ID vizitator, pagini accesate, evenimente anonime.</ListItem>
                <ListItem>• Deactivare: prin butonul „Preferințe detaliate” sau setările browserului.</ListItem>
              </List>
            </Box>
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

