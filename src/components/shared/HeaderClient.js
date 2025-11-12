"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "../../constants/navigation";
import HamburgerIcon from "../icons/HamburgerIcon";
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation";

const navLinkVariants = {
  desktop: {
    color: "text.primary",
    fontWeight: "500",
    fontSize: "0.95rem",
    position: "relative",
    _after: {
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: 0,
      width: "0",
      height: "2px",
      bg: "brand.500",
      transition: "width 0.3s ease",
    },
    _hover: {
      color: "brand.500",
      _after: { width: "100%" },
    },
  },
  drawer: {
    fontSize: "1.1rem",
    fontWeight: "500",
    py: 4,
    borderBottom: "1px solid",
    borderColor: "border.subtle",
    _hover: { color: "brand.500" },
  },
};

const DesktopLinks = ({ onNavigate }) => (
  <HStack spacing={8}>
    {NAV_ITEMS.map((item) => (
      <Link
        key={item.id}
        href={item.href}
        onClick={(event) => onNavigate(event, item.href)}
        {...navLinkVariants.desktop}
      >
        {item.label}
      </Link>
    ))}
  </HStack>
);

const DrawerLinks = ({ onNavigate }) => (
  <VStack spacing={4} align="stretch">
    {NAV_ITEMS.map((item) => (
      <Link
        key={item.id}
        href={item.href}
        onClick={(event) => onNavigate(event, item.href)}
        {...navLinkVariants.drawer}
      >
        {item.label}
      </Link>
    ))}
  </VStack>
);

export default function HeaderClient({ desktopLogo, drawerLogo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useSmoothNavigation();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    onClose();
    navigate(event, href);
  };

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(255, 255, 255, 0.95)"
        backdropFilter="blur(10px)"
        boxShadow={isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.15)" : "0 2px 20px rgba(0, 0, 0, 0.1)"}
        transition="all 0.3s ease"
        py={isScrolled ? 3 : 4}
      >
        <Flex maxW="1200px" mx="auto" px={5} align="center" justify="space-between">
          {desktopLogo}

          {!mounted ? (
            <DesktopLinks onNavigate={handleNavClick} />
          ) : isMobile ? (
            <IconButton icon={<HamburgerIcon />} variant="ghost" onClick={onOpen} aria-label="Open menu" />
          ) : (
            <DesktopLinks onNavigate={handleNavClick} />
          )}
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{drawerLogo}</DrawerHeader>
          <DrawerBody>
            <DrawerLinks onNavigate={handleNavClick} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
