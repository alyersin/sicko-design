"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/shared/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import CalculatorCTASection from "../components/sections/CalculatorCTASection";
import GallerySection from "../components/sections/GallerySection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";
import MapSection from "../components/sections/MapSection";
import Footer from "../components/shared/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";

export default function Home() {
  return (
    <Box minH="100vh" bg="bg.body">
      <Navbar />
      <Box pt={20}>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CalculatorCTASection />
        <GallerySection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <MapSection />
        <Footer />
        <WhatsAppButton />
      </Box>
    </Box>
  );
}
