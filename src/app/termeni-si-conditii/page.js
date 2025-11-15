import { Box, Container, Heading, Text, List, ListItem, Divider, VStack } from "@chakra-ui/react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import WhatsAppButton from "../../components/shared/WhatsAppButton";
import CookieSettingsButton from "../../components/shared/CookieSettingsButton";
import GDPRConsent from "../../components/shared/GDPRConsent";

const sections = [
  {
    title: "1. Informații generale",
    content:
      "Sicko Design operează acest website pentru a prezenta și promova serviciile de detailing auto disponibile în Constanța și împrejurimi. Prin accesarea și utilizarea site-ului, confirmi că ai citit și înțeles acești termeni și că îți asumi respectarea lor. Ne rezervăm dreptul de a actualiza documentul fără notificare prealabilă.",
  },
  {
    title: "2. Servicii prezentate",
    content:
      "Informațiile privind pachetele de detailing, fotografiile și testimonialele au scop informativ. Fiecare intervenție se personalizează după evaluarea fizică a vehiculului. Tarifele generate prin calculatorul de preț reprezintă estimări și pot fi ajustate în funcție de complexitatea proiectului.",
  },
  {
    title: "3. Programări și comunicare",
    content:
      "Programările pot fi realizate prin formularul de contact, prin WhatsApp sau telefon. Confirmarea finală are loc după ce stabilim detaliile tehnice și calendarul lucrării. Ne rezervăm dreptul de a refuza sau amâna o programare dacă există condiții care împiedică executarea serviciului la standardele asumate.",
  },
  {
    title: "4. Drepturi de proprietate intelectuală",
    content:
      "Elementele grafice, textele, logo-urile și fotografiile prezente pe site sunt proprietatea Sicko Design sau sunt folosite cu licență. Copierea sau reutilizarea fără acord scris este interzisă.",
  },
  {
    title: "5. Limitarea răspunderii",
    content:
      "Depunem toate eforturile pentru a furniza informații corecte, dar nu garantăm că site-ul este lipsit de erori sau că va funcționa neîntrerupt. Sicko Design nu poate fi făcută răspunzătoare pentru eventuale pierderi generate de utilizarea informațiilor din site sau de indisponibilitatea temporară a serviciului online.",
  },
  {
    title: "6. Date cu caracter personal",
    content:
      "Prelucrăm datele personale conform Politicii de Confidențialitate. Prin utilizarea formularelor confirmi că informațiile furnizate sunt reale și că ești de acord cu modalitățile de prelucrare descrise în documentul dedicat.",
  },
  {
    title: "7. Legislație aplicabilă",
    content:
      "Acești termeni sunt guvernați de legislația din România și de normele europene incidente. Eventualele litigii vor fi soluționate pe cale amiabilă, iar dacă nu este posibil, de instanțele competente din Constanța.",
  },
];

export default function TermsPage() {
  return (
    <Box minH="100vh" bg="bg.body">
      <Header />
      <Box pt={24} pb={16}>
        <Container maxW="960px">
          <VStack align="flex-start" spacing={6}>
            <Heading size="xl">Termeni și Condiții</Heading>
            <Text color="text.secondary" lineHeight="1.8">
              Documentul detaliază regulile de utilizare a site-ului Sicko Design și stabilește
              cadrul contractual între vizitatori și operator. Îți recomandăm să îl parcurgi înainte
              de a folosi formularele sau serviciile noastre.
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
            <Box width="100%">
              <Heading size="md" mb={3}>
                8. Contact
              </Heading>
              <List spacing={2} color="text.secondary">
                <ListItem>• Email: contact@sickodesign.ro</ListItem>
                <ListItem>• Telefon: +40 732 893 053</ListItem>
                <ListItem>• Locație: Constanța, România</ListItem>
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

