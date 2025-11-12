"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
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
// HamburgerIcon component (temporary until @chakra-ui/icons is installed)
const HamburgerIcon = ({ ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);
import Logo from "./Logo";
import { NAV_ITEMS } from "../../constants/app";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Listen for resize
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

  const handleNavClick = (e, href) => {
    onClose();
    
    // Handle full page routes (like /calculator)
    if (href.startsWith("/") && !href.startsWith("#")) {
      router.push(href);
      return;
    }
    
    e.preventDefault();
    
    // Handle hash links
    if (href === "/" || href === "#home") {
      // If not on home page, navigate first
      if (pathname !== "/") {
        router.push("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 200);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
      // If not on home page, navigate to home first with hash
      if (pathname !== "/") {
        // Use window.location for proper hash handling
        window.location.href = `/${href}`;
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)"}
        backdropFilter="blur(10px)"
        boxShadow={isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.15)" : "0 2px 20px rgba(0, 0, 0, 0.1)"}
        transition="all 0.3s ease"
        py={isScrolled ? 3 : 4}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          px={5}
          align="center"
          justify="space-between"
        >
          <Logo isMobile={isMobile} />
          
          {!mounted ? (
            // Show desktop menu during SSR to prevent hydration mismatch
            <HStack spacing={8}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  color="text.primary"
                  fontWeight="500"
                  fontSize="0.95rem"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "0",
                    height: "2px",
                    bg: "brand.500",
                    transition: "width 0.3s ease",
                  }}
                  _hover={{
                    color: "brand.500",
                    _after: { width: "100%" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>
          ) : isMobile ? (
            <IconButton
              icon={<HamburgerIcon />}
              variant="ghost"
              onClick={onOpen}
              aria-label="Open menu"
            />
          ) : (
            <HStack spacing={8}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  color="text.primary"
                  fontWeight="500"
                  fontSize="0.95rem"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "0",
                    height: "2px",
                    bg: "brand.500",
                    transition: "width 0.3s ease",
                  }}
                  _hover={{
                    color: "brand.500",
                    _after: { width: "100%" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>
          )}
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo isMobile={true} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  fontSize="1.1rem"
                  fontWeight="500"
                  py={4}
                  borderBottom="1px solid"
                  borderColor="border.subtle"
                  _hover={{ color: "brand.500" }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

