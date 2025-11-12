"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Switch,
  Text,
  VStack,
  HStack,
  Slide,
  Collapse,
  IconButton,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CloseIcon } from "@chakra-ui/icons";
import { CONTACT_INFO } from "../../constants/contact";

const STORAGE_KEY = "sicko_gdpr_preferences_v1";

const CONSENT_OPTIONS = [
  {
    id: "necessary",
    label: "Cookie-uri necesare",
    description: "Obligatorii pentru funcționarea site-ului și pentru securitate. Nu pot fi dezactivate.",
    isRequired: true,
  },
  {
    id: "analytics",
    label: "Analiză și măsurare",
    description: "Ne ajută să înțelegem cum este folosit site-ul pentru a îmbunătăți experiența.",
  },
  {
    id: "marketing",
    label: "Personalizare și marketing",
    description: "Permite afișarea de conținut și oferte personalizate, inclusiv pe platforme terțe.",
  },
];

const defaultPreferences = CONSENT_OPTIONS.reduce((acc, option) => {
  acc[option.id] = option.isRequired || false;
  return acc;
}, {});

const contactEmail = CONTACT_INFO.email.value;

const loadPreferences = () => {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Failed to parse GDPR preferences:", error);
    return null;
  }
};

const savePreferences = (prefs) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: Date.now() }));
};

export default function GDPRConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setPreferences((prev) => ({ ...prev, ...stored }));
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const updated = Object.keys(preferences).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    savePreferences(updated);
    setPreferences(updated);
    setIsVisible(false);
  };

  const handleDecline = () => {
    const updated = Object.keys(preferences).reduce((acc, key) => {
      acc[key] = CONSENT_OPTIONS.find((opt) => opt.id === key)?.isRequired || false;
      return acc;
    }, {});
    savePreferences(updated);
    setPreferences(updated);
    setIsVisible(false);
  };

  const handleSave = () => {
    savePreferences(preferences);
    setIsVisible(false);
  };

  const handleToggle = (optionId) => {
    const option = CONSENT_OPTIONS.find((opt) => opt.id === optionId);
    if (option?.isRequired) return;
    setPreferences((prev) => ({ ...prev, [optionId]: !prev[optionId] }));
  };

  return (
    <Slide direction="bottom" in={isVisible} style={{ zIndex: 1400 }}>
      <Box bg="dark-black" color="white" px={{ base: 4, md: 8 }} py={6} shadow="0 -10px 30px rgba(0,0,0,0.4)">
        <Flex align="flex-start" justify="space-between" gap={4}>
          <VStack align="flex-start" spacing={4} maxW="4xl">
            <Heading size="md">Preferințe GDPR & Cookie</Heading>
            <Text color="rgba(255,255,255,0.85)" lineHeight="1.7">
              Folosim cookie-uri pentru funcționalitate, analiză și marketing, în conformitate cu
              Regulamentul (UE) 2016/679 și legislația din România. Poți personaliza din butonul
              „Preferințe” sau accepta totul pentru o experiență completă. Politicile complete pot fi
              consultate în{" "}
              <Link as={NextLink} href="/politica-confidentialitate" color="brand.200" fontWeight="600">
                Politica de Confidențialitate
              </Link>{" "}
              și în secțiunea dedicată{" "}
              <Link
                as={NextLink}
                href="/politica-confidentialitate#cookie-policy"
                color="brand.200"
                fontWeight="600"
              >
                Politicii de Cookie
              </Link>
              , sau ne poți scrie la{" "}
              <Text as="span" fontWeight="600">
                {contactEmail}
              </Text>
              .
            </Text>

            <Collapse in={showDetails} animateOpacity>
              <VStack spacing={4} align="stretch">
                {CONSENT_OPTIONS.map((option) => (
                  <Box
                    key={option.id}
                    bg="rgba(255,255,255,0.08)"
                    borderRadius="lg"
                    p={4}
                    border="1px solid rgba(255,255,255,0.15)"
                  >
                    <Flex align="center" justify="space-between" gap={4}>
                      <Box>
                        <Text fontWeight="600">{option.label}</Text>
                        <Text fontSize="sm" color="rgba(255,255,255,0.7)" mt={1}>
                          {option.description}
                        </Text>
                      </Box>
                      <Switch
                        isChecked={preferences[option.id]}
                        onChange={() => handleToggle(option.id)}
                        colorScheme="green"
                        isReadOnly={option.isRequired}
                        pointerEvents={option.isRequired ? "none" : "auto"}
                      />
                    </Flex>
                    {option.isRequired && (
                      <Text fontSize="xs" color="rgba(255,255,255,0.6)" mt={2}>
                        Obligatoriu prin legislație. Este activat permanent.
                      </Text>
                    )}
                  </Box>
                ))}
              </VStack>
            </Collapse>

            <HStack spacing={3} flexWrap="wrap">
              <Button colorScheme="brand" onClick={handleAcceptAll}>
                Accept Tot
              </Button>
              <Button variant="outline" colorScheme="whiteAlpha" onClick={handleDecline}>
                Refuz
              </Button>
              <Button variant="outline" colorScheme="brand" onClick={handleSave}>
                Salvează Preferințe
              </Button>
              <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => setShowDetails((prev) => !prev)}
              >
                {showDetails ? "Ascunde detalii" : "Preferințe detaliate"}
              </Button>
            </HStack>
          </VStack>

          <IconButton
            aria-label="Închide bannerul GDPR"
            icon={<CloseIcon fontSize="0.8rem" />}
            variant="ghost"
            color="whiteAlpha.800"
            _hover={{ color: "white" }}
            onClick={() => setIsVisible(false)}
          />
        </Flex>
      </Box>
    </Slide>
  );
}
