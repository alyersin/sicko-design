"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Container, VStack, Heading, Text, HStack, IconButton, Flex } from "@chakra-ui/react";
import TestimonialCard from "../shared/TestimonialCard";
import { TESTIMONIALS } from "../../constants/testimonials";

// Arrow icons
const LeftArrow = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || TESTIMONIALS.length <= 1 || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  // Handle mouse drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
    
    // Temporarily disable smooth scroll during drag for better performance
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "auto";
    }
  };

  const handleMouseLeave = () => {
    if (isDragging && carouselRef.current) {
      // Re-enable smooth scroll behavior
      carouselRef.current.style.scrollBehavior = "smooth";
      
      // Smooth snap to nearest card when mouse leaves during drag
      setTimeout(() => {
        if (carouselRef.current) {
          const firstCard = carouselRef.current.querySelector('[data-testimonial-card]');
          let cardWidth = 320 + 24;
          
          if (firstCard) {
            const cardRect = firstCard.getBoundingClientRect();
            cardWidth = cardRect.width + 24;
          }
          
          const scrollPosition = carouselRef.current.scrollLeft;
          const newIndex = Math.round(scrollPosition / cardWidth);
          const targetIndex = Math.max(0, Math.min(newIndex, TESTIMONIALS.length - 1));
          
          carouselRef.current.scrollTo({
            left: targetIndex * cardWidth,
            behavior: "smooth",
          });
          
          setCurrentIndex(targetIndex);
        }
      }, 50);
    }
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (!carouselRef.current) return;
    
    // Re-enable smooth scroll behavior
    carouselRef.current.style.scrollBehavior = "smooth";
    
    setIsDragging(false);
    
    // Smooth snap to nearest card after drag with slight delay for better UX
    setTimeout(() => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector('[data-testimonial-card]');
        let cardWidth = 320 + 24; // fallback
        
        if (firstCard) {
          const cardRect = firstCard.getBoundingClientRect();
          cardWidth = cardRect.width + 24; // card width + gap
        }
        
        const scrollPosition = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        const targetIndex = Math.max(0, Math.min(newIndex, TESTIMONIALS.length - 1));
        
        // Smooth scroll to nearest card
        carouselRef.current.scrollTo({
          left: targetIndex * cardWidth,
          behavior: "smooth",
        });
        
        setCurrentIndex(targetIndex);
      }
    }, 50); // Small delay for smoother transition
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.2; // Reduced multiplier for smoother, more controlled drag
    
    // Direct scroll update for responsive dragging
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle wheel scroll with smooth behavior
  const handleWheel = (e) => {
    if (carouselRef.current) {
      e.preventDefault();
      setIsAutoPlaying(false);
      
      // Smooth wheel scrolling
      const delta = e.deltaY * 0.5;
      const currentScroll = carouselRef.current.scrollLeft;
      const targetScroll = currentScroll + delta;
      
      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Note: Button navigation is now handled directly in scrollToIndex function
  // This useEffect only handles auto-play scrolling
  useEffect(() => {
    if (carouselRef.current && !isDragging && isAutoPlaying && !isScrolling) {
      const firstCard = carouselRef.current.querySelector('[data-testimonial-card]');
      let cardWidth = 320 + 24;
      
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        cardWidth = cardRect.width + 24;
      }
      
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, isDragging, isAutoPlaying, isScrolling]);

  // Update currentIndex based on scroll position (only when not programmatically scrolling)
  useEffect(() => {
    if (!carouselRef.current || isDragging || isScrolling) return;

    const handleScroll = () => {
      if (isScrolling) return; // Don't update if we're programmatically scrolling
      const cardWidth = 320 + 24;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < TESTIMONIALS.length) {
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [currentIndex, isDragging, isScrolling]);

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;
    
    setIsScrolling(true);
    setIsAutoPlaying(false);
    
    // Calculate card width dynamically
    const firstCard = carouselRef.current.querySelector('[data-testimonial-card]');
    let cardWidth = 320 + 24; // fallback
    
    if (firstCard) {
      const cardRect = firstCard.getBoundingClientRect();
      cardWidth = cardRect.width + 24; // card width + gap
    }
    
    const scrollPosition = index * cardWidth;
    
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    
    setCurrentIndex(index);
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % TESTIMONIALS.length;
    scrollToIndex(newIndex);
  };

  const goToSlide = (index) => {
    scrollToIndex(index);
  };

  // Calculate visible items (3 on desktop, 1 on mobile)
  const visibleItems = 3;
  const showCarousel = TESTIMONIALS.length > visibleItems;

  return (
    <Box as="section" id="testimonials" py={20} bg="bg.surface" position="relative" overflow="hidden">
      {/* Decorative background elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        width="300px"
        height="300px"
        borderRadius="full"
        bgGradient="linear(135deg, brand.200, brand.300)"
        opacity={0.1}
        filter="blur(60px)"
      />

      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <VStack spacing={4} maxW="700px" mx="auto" textAlign="center">
            <Heading size="xl" color="text.primary">
              Ce Spun Clienții Noștri
            </Heading>
            <Text fontSize="1.125rem" color="text.secondary" lineHeight="1.8">
              Povestile de succes ale clienților noștri vorbesc de la sine. 
              Descoperă experiențele reale ale celor care au ales Sicko Design.
            </Text>
          </VStack>

          {showCarousel ? (
            // Carousel view with drag and wheel support
            <Box width="100%" position="relative">
              {/* Carousel Container */}
              <Box
                ref={carouselRef}
                width="100%"
                overflowX="auto"
                overflowY="hidden"
                position="relative"
                borderRadius="xl"
                cursor={isDragging ? "grabbing" : "grab"}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onWheel={handleWheel}
                userSelect="none"
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
                css={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: "smooth",
                }}
                style={{
                  scrollBehavior: "smooth",
                }}
              >
                <Flex
                  gap={6}
                  width="max-content"
                  px={{ base: 4, md: 0 }}
                  userSelect="none"
                  sx={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  }}
                >
                  {TESTIMONIALS.map((testimonial, index) => (
                    <Box
                      key={testimonial.id}
                      data-testimonial-card
                      minW={{ base: "280px", md: "320px" }}
                      maxW={{ base: "280px", md: "320px" }}
                      flexShrink={0}
                      css={{
                        scrollSnapAlign: "start",
                        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                      }}
                      userSelect="none"
                      sx={{
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        msUserSelect: "none",
                      }}
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </Box>
                  ))}
                </Flex>
              </Box>

              {/* Navigation Arrows */}
              <HStack spacing={4} justify="center" mt={8}>
                <IconButton
                  icon={<LeftArrow />}
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                  variant="outline"
                  borderRadius="full"
                  size="lg"
                  borderWidth="2px"
                  borderColor="brand.300"
                  color="brand.600"
                  _hover={{
                    bg: "brand.50",
                    borderColor: "brand.500",
                    transform: "scale(1.1)",
                  }}
                  transition="all 0.3s ease"
                />

                {/* Dots Indicator */}
                <HStack spacing={2}>
                  {TESTIMONIALS.map((_, index) => (
                    <Box
                      key={index}
                      as="button"
                      onClick={() => goToSlide(index)}
                      w={currentIndex === index ? "24px" : "8px"}
                      h="8px"
                      borderRadius="full"
                      bg={currentIndex === index ? "brand.500" : "brand.200"}
                      transition="all 0.3s ease"
                      _hover={{
                        bg: currentIndex === index ? "brand.600" : "brand.300",
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </HStack>

                <IconButton
                  icon={<RightArrow />}
                  onClick={goToNext}
                  aria-label="Next testimonial"
                  variant="outline"
                  borderRadius="full"
                  size="lg"
                  borderWidth="2px"
                  borderColor="brand.300"
                  color="brand.600"
                  _hover={{
                    bg: "brand.50",
                    borderColor: "brand.500",
                    transform: "scale(1.1)",
                  }}
                  transition="all 0.3s ease"
                />
              </HStack>
            </Box>
          ) : (
            // Grid view for 3 or fewer testimonials
            <Box width="100%">
              <Flex
                gap={6}
                flexWrap="wrap"
                justify="center"
                align="stretch"
              >
                {TESTIMONIALS.map((testimonial) => (
                  <Box
                    key={testimonial.id}
                    flex={{ base: "1 1 100%", md: "1 1 calc(33.333% - 16px)" }}
                    maxW={{ base: "100%", md: "320px" }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </Box>
                ))}
              </Flex>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
