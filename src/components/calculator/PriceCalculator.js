"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardBody,
  VStack,
  HStack,
  Heading,
  Text,
  Select,
  Checkbox,
  Button,
  Divider,
  Badge,
  useToast,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { VEHICLE_TYPES, SERVICE_PRICES } from "../../constants/calculator";
import { SERVICES } from "../../constants/services";
import { CalculatorIcon, CarIcon, SparkleIcon, ShieldIcon, WrenchIcon, DiamondIcon, VanIcon, SendIcon, RefreshIcon } from "../icons";

export default function PriceCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const toast = useToast();

  const calculatePrice = () => {
    if (!selectedVehicle || selectedServices.length === 0) {
      return 0;
    }

    const vehicleMultiplier = VEHICLE_TYPES.find((v) => v.id === selectedVehicle)?.multiplier || 1;
    let total = 0;

    selectedServices.forEach((serviceId) => {
      const service = SERVICE_PRICES[serviceId];
      if (service) {
        total += service.base * vehicleMultiplier;
      }
    });

    return Math.round(total);
  };

  const totalPrice = calculatePrice();

  const handleServiceChange = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleReset = () => {
    setSelectedVehicle("");
    setSelectedServices([]);
  };

  const getServiceIcon = (serviceId) => {
    const iconMap = {
      exterior: CarIcon,
      interior: SparkleIcon,
      ceramic: ShieldIcon,
      headlights: WrenchIcon,
      premium: DiamondIcon,
      commercial: VanIcon,
    };
    return iconMap[serviceId] || SparkleIcon;
  };

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      boxShadow="0 10px 40px rgba(0, 102, 204, 0.15)"
      border="1px solid"
      borderColor="border.subtle"
      overflow="hidden"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bgGradient: "linear(to-r, brand.400, brand.600)",
      }}
    >
      <CardBody p={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={3} align="flex-start">
            <HStack spacing={3}>
              <Box
                p={3}
                bgGradient="linear(135deg, brand.400, brand.600)"
                borderRadius="xl"
                boxShadow="0 4px 15px rgba(0, 102, 204, 0.3)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={CalculatorIcon} w={8} h={8} color="white" />
              </Box>
              <VStack align="flex-start" spacing={0}>
                <Heading size="xl" color="text.primary" fontWeight="700">
                  Calculator Preț
                </Heading>
                <Text color="text.secondary" fontSize="sm" fontWeight="500">
                  Obține o estimare rapidă pentru serviciile tale
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Vehicle Selection */}
          <Box>
            <HStack mb={3} spacing={2}>
              <Icon as={CarIcon} w={6} h={6} color="brand.500" />
              <Text fontWeight="700" color="text.primary" fontSize="md" textTransform="uppercase" letterSpacing="0.5px">
                Tip Vehicul
              </Text>
            </HStack>
            <Select
              placeholder="Selectează tipul de vehicul"
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              bg="white"
              border="2px solid"
              borderColor="border.subtle"
              borderRadius="lg"
              height="50px"
              fontSize="md"
              fontWeight="500"
              _hover={{
                borderColor: "brand.400",
              }}
              _focus={{
                borderColor: "brand.500",
                boxShadow: "0 0 0 3px rgba(0, 102, 204, 0.1)",
              }}
            >
              {VEHICLE_TYPES.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.label}
                </option>
              ))}
            </Select>
          </Box>

          {/* Services Selection */}
          <Box>
            <HStack mb={4} spacing={2}>
              <Icon as={SparkleIcon} w={6} h={6} color="brand.500" />
              <Text fontWeight="700" color="text.primary" fontSize="md" textTransform="uppercase" letterSpacing="0.5px">
                Servicii
              </Text>
            </HStack>
            <VStack spacing={3} align="stretch">
              {Object.entries(SERVICE_PRICES).map(([serviceId, service]) => {
                const vehicleMultiplier =
                  VEHICLE_TYPES.find((v) => v.id === selectedVehicle)?.multiplier || 1;
                const servicePrice = Math.round(service.base * vehicleMultiplier);
                const isSelected = selectedServices.includes(serviceId);
                const serviceData = SERVICES.find((s) => s.id === serviceId);

                return (
                  <Box
                    key={serviceId}
                    p={4}
                    borderRadius="xl"
                    border="2px solid"
                    borderColor={isSelected ? "brand.500" : "border.subtle"}
                    bg={isSelected ? "brand.50" : "white"}
                    cursor="pointer"
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: "brand.400",
                      bg: isSelected ? "brand.50" : "gray.50",
                      transform: "translateX(4px)",
                      boxShadow: isSelected ? "0 4px 15px rgba(0, 102, 204, 0.2)" : "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                    onClick={() => handleServiceChange(serviceId)}
                  >
                    <HStack justify="space-between" align="center">
                      <HStack spacing={4} flex={1}>
                        <Box
                          filter={isSelected ? "none" : "grayscale(50%) opacity(0.6)"}
                          transition="all 0.3s ease"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={getServiceIcon(serviceId)} w={8} h={8} color={isSelected ? "brand.500" : "text.secondary"} />
                        </Box>
                        <VStack align="flex-start" spacing={0} flex={1}>
                          <Text fontWeight="600" color="text.primary" fontSize="md">
                            {service.label}
                          </Text>
                          {serviceData && (
                            <Text fontSize="xs" color="text.muted" noOfLines={1}>
                              {serviceData.description}
                            </Text>
                          )}
                        </VStack>
                      </HStack>
                      {selectedVehicle && (
                        <Badge
                          colorScheme="brand"
                          fontSize="md"
                          px={4}
                          py={2}
                          borderRadius="full"
                          fontWeight="700"
                          bgGradient={isSelected ? "linear(to-r, brand.500, brand.600)" : "linear(to-r, brand.400, brand.500)"}
                          color="white"
                          boxShadow="0 2px 8px rgba(0, 102, 204, 0.3)"
                        >
                          {servicePrice.toLocaleString("ro-RO")} RON
                        </Badge>
                      )}
                      <Checkbox
                        isChecked={isSelected}
                        onChange={() => handleServiceChange(serviceId)}
                        colorScheme="brand"
                        size="lg"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </HStack>
                  </Box>
                );
              })}
            </VStack>
          </Box>

          <Divider borderColor="border.subtle" />

          {/* Total Price Display */}
          {totalPrice > 0 && (
            <Box
              p={6}
              bgGradient="linear(135deg, brand.500 0%, brand.600 100%)"
              borderRadius="xl"
              boxShadow="0 8px 30px rgba(0, 102, 204, 0.4)"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                bg: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                animation: "pulse 3s ease-in-out infinite",
              }}
            >
              <VStack spacing={3} position="relative" zIndex={1}>
                <Text fontSize="sm" color="white" fontWeight="600" textTransform="uppercase" letterSpacing="1px" opacity={0.9}>
                  Preț Total Estimativ
                </Text>
                <Heading size="2xl" color="white" fontWeight="800" letterSpacing="-1px">
                  {totalPrice.toLocaleString("ro-RO")} RON
                </Heading>
                <Text fontSize="xs" color="white" textAlign="center" opacity={0.8} maxW="300px">
                  *Prețul este estimativ și poate varia în funcție de starea vehiculului
                </Text>
              </VStack>
            </Box>
          )}

          {/* Action Buttons */}
          <HStack spacing={4}>
            <Button
              colorScheme="brand"
              flex={1}
              size="lg"
              height="50px"
              fontSize="md"
              fontWeight="700"
              borderRadius="xl"
              bgGradient="linear(to-r, brand.500, brand.600)"
              boxShadow="0 4px 15px rgba(0, 102, 204, 0.4)"
              _hover={{
                bgGradient: "linear(to-r, brand.600, brand.700)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(0, 102, 204, 0.5)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              onClick={() => {
                if (!selectedVehicle) {
                  toast({
                    title: "Selectează tipul de vehicul",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                  });
                  return;
                }
                if (selectedServices.length === 0) {
                  toast({
                    title: "Selectează cel puțin un serviciu",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                  });
                  return;
                }
                toast({
                  title: "Mulțumim pentru interes!",
                  description: `Preț estimativ: ${totalPrice.toLocaleString("ro-RO")} RON. Vă vom contacta în curând pentru confirmare.`,
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }}
              isDisabled={totalPrice === 0}
              _disabled={{
                opacity: 0.5,
                cursor: "not-allowed",
                _hover: {
                  transform: "none",
                },
              }}
            >
              <HStack spacing={2}>
                <Icon as={SendIcon} w={5} h={5} />
                <Text>Solicită Ofertă</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              size="lg"
              height="50px"
              fontSize="md"
              fontWeight="600"
              borderRadius="xl"
              borderWidth="2px"
              borderColor="border.subtle"
              onClick={handleReset}
              _hover={{
                borderColor: "brand.400",
                bg: "brand.50",
                transform: "translateY(-2px)",
              }}
            >
              <HStack spacing={2}>
                <Icon as={RefreshIcon} w={5} h={5} />
                <Text>Resetare</Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}
