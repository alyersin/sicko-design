"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormError(data?.error || "Autentificarea a eșuat.");
        return;
      }

      toast({
        title: "Autentificare reușită",
        description: "Bun venit în panoul de administrare.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setUsername("");
      setPassword("");
      router.refresh();
    } catch (error) {
      setFormError("Nu se poate realiza conexiunea. Încercați din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      bg="gray.800"
      color="white"
      p={{ base: 8, md: 12 }}
      borderRadius="2xl"
      boxShadow="0 30px 80px rgba(0, 0, 0, 0.45)"
    >
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg" mb={2}>
            Acces Proprietar
          </Heading>
          <Text color="gray.300">
            Introdu parola administrativă pentru a edita conținutul site-ului. Această pagină nu este listată public.
          </Text>
        </Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} align="stretch">
            <FormControl>
              <FormLabel>Utilizator</FormLabel>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="admin"
                bg="rgba(255, 255, 255, 0.08)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)" }}
                required
              />
            </FormControl>
            <FormControl isInvalid={Boolean(formError)}>
              <FormLabel>Parolă administrare</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                bg="rgba(255, 255, 255, 0.08)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                _focus={{ borderColor: "brand.400", boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)" }}
                required
              />
              {formError && <FormErrorMessage>{formError}</FormErrorMessage>}
            </FormControl>
            <Button type="submit" colorScheme="brand" isLoading={isSubmitting}>
              Intră în panou
            </Button>
          </VStack>
        </form>
        <Text fontSize="sm" color="gray.400">
          * Configurează variabilele <code>ADMIN_USERNAME</code> și <code>ADMIN_PASSCODE</code> (sau{" "}
          <code>ADMIN_PASS</code>) în fișierul `.env.local` pentru a seta datele folosite la autentificare.
        </Text>
      </VStack>
    </Box>
  );
}
