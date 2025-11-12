"use client";

import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Grid,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import { CONTACT_INFO, FORM_PLACEHOLDERS, SERVICES } from "../../constants/app";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mulțumim pentru mesaj! Vă vom contacta în curând.");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box as="section" id="contact" py={20} bg="bg.body">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading size="xl" textAlign="center">
              Contactează-ne
            </Heading>
            <Text
              fontSize="1.125rem"
              color="text.secondary"
              textAlign="center"
              maxW="600px"
            >
              Suntem aici să-ți răspundem la întrebări și să programăm următoarea ta vizită
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={16} width="100%">
            <VStack spacing={8} align="flex-start">
              {Object.values(CONTACT_INFO).map((info, index) => (
                <HStack key={index} spacing={4} align="flex-start">
                  <Text fontSize="2rem">{info.icon}</Text>
                  <VStack align="flex-start" spacing={1}>
                    <Heading size="md" color="text.primary">
                      {info.label}
                    </Heading>
                    {Array.isArray(info.value) ? (
                      info.value.map((line, i) => (
                        <Text key={i} color="text.secondary" lineHeight="1.6">
                          {line}
                        </Text>
                      ))
                    ) : (
                      <Text color="text.secondary" lineHeight="1.6">
                        {info.value}
                      </Text>
                    )}
                  </VStack>
                </HStack>
              ))}
            </VStack>

            <Box as="form" onSubmit={handleSubmit} width="100%">
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Nume</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={FORM_PLACEHOLDERS.name}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={FORM_PLACEHOLDERS.email}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Telefon</FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={FORM_PLACEHOLDERS.phone}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Serviciu Dorit</FormLabel>
                  <Select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Selectează un serviciu (opțional)"
                    bg="white"
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} width="100%">
                  <FormControl>
                    <FormLabel>Data Preferată</FormLabel>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      bg="white"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Ora Preferată</FormLabel>
                    <Select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="Selectează ora"
                      bg="white"
                    >
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </Select>
                  </FormControl>
                </Grid>
                <FormControl>
                  <FormLabel>Mesaj</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={FORM_PLACEHOLDERS.message}
                    rows={5}
                  />
                </FormControl>
                <Button type="submit" colorScheme="brand" size="lg" width="100%">
                  Trimite Mesaj
                </Button>
              </VStack>
            </Box>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}

