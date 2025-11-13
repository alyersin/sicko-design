import { Box, Container, VStack, HStack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";
import TikTokIcon from "../icons/TikTokIcon";

export default function Footer() {
  return (
    <Box as="footer" bg="dark-black" color="white" py={16} mt={20}>
      <Container maxW="1200px">
        <VStack spacing={8} align="center">
          <Logo />
          <Text
            color="rgba(255, 255, 255, 0.7)"
            maxW="500px"
            textAlign="center"
            lineHeight="1.6"
          >
            Detailing auto profesional în Constanța. Transformăm mașinile tale în opere de artă.
          </Text>
          <HStack spacing={6}>
            <Link
              href="https://www.facebook.com/profile.php?id=100083218658083"
              target="_blank"
              rel="noopener noreferrer"
              color="#1877F2"
              _hover={{ color: "#99C2FF" }}
              transition="color 0.3s ease"
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="#E1306C"
              _hover={{ color: "#FF8AB4" }}
              transition="color 0.3s ease"
            >
              <FaInstagram size={28} />
            </Link>
            <Link
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ filter: "brightness(1.2)" }}
              transition="filter 0.3s ease"
            >
              <TikTokIcon size="28px" />
            </Link>
          </HStack>
          <HStack spacing={6} flexWrap="wrap" justify="center">
            <Link
              as={NextLink}
              href="/termeni-si-conditii"
              color="rgba(255, 255, 255, 0.7)"
              _hover={{ color: "silver.400" }}
            >
              Termeni și Condiții
            </Link>
            <Link
              as={NextLink}
              href="/politica-confidentialitate"
              color="rgba(255, 255, 255, 0.7)"
              _hover={{ color: "silver.400" }}
            >
              Politica de Confidențialitate
            </Link>
            <Link
              as={NextLink}
              href="/harta-site"
              color="rgba(255, 255, 255, 0.7)"
              _hover={{ color: "silver.400" }}
            >
              Hartă Site
            </Link>
          </HStack>
          <Box
            pt={8}
            borderTop="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            width="100%"
            textAlign="center"
          >
            <Text color="rgba(255, 255, 255, 0.5)" fontSize="0.875rem">
              &copy; 2025 Sicko Design. Toate drepturile rezervate.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
