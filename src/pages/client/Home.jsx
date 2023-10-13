import React from "react";
import { Box, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";

import {
  hero,
  FaDollarSign,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTruck,
  FaCreditCard,
  FaShieldAlt,
  FaMoneyBillWave,
} from "../../utils/assets";

const Home = () => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };

  return (
    <Box>
      <Box style={backgroundStyles}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} mb={4}>
          Welcome to Our Website
        </Heading>
        <Text fontSize={["md", "lg", "xl"]} mb={8}>
          Discover amazing things with us
        </Text>
        <Flex>
          <Button colorScheme="gray" size="lg" mr={4}>
            Learn More
          </Button>
          <Button colorScheme="primary" size="lg">
            Get Started
          </Button>
        </Flex>
      </Box>

      <Box py={12} bg="gray.100">
        <Text fontSize={{ base: "4xl", lg: "6xl" }} textAlign={"center"} my={5}>
          Enabling Growth, Increasing Throughput
        </Text>
        <Flex
          direction={["column", "column", "row"]}
          justify="space-around"
          align="center"
          maxW="1200px"
          mx="auto"
          textAlign="center"
        >
          <Box p={6}>
            <Icon as={FaDollarSign} boxSize={10} color="primary.500" />
            <Text mt={4} fontWeight="bold" fontSize="xl">
              $500K+
            </Text>
            <Text>Cost saved for clients</Text>
          </Box>

          <Box p={6}>
            <Icon as={FaClock} boxSize={10} color="primary.500" />
            <Text mt={4} fontWeight="bold" fontSize="xl">
              48 hrs
            </Text>
            <Text>Time saved per delivery</Text>
          </Box>

          <Box p={6}>
            <Icon as={FaMapMarkerAlt} boxSize={10} color="primary.500" />
            <Text mt={4} fontWeight="bold" fontSize="xl">
              10+
            </Text>
            <Text>Cities Reached</Text>
          </Box>

          <Box p={6}>
            <Icon as={FaCheckCircle} boxSize={10} color="primary.500" />
            <Text mt={4} fontWeight="bold" fontSize="xl">
              5,000+
            </Text>
            <Text>Transactions Processed</Text>
          </Box>
        </Flex>
      </Box>

      <Box py={12}>
        <Heading fontSize={["xl", "2xl", "3xl"]} textAlign="center" mb={8}>
          Why Buy from Zarea
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          justify="space-around"
          align="center"
          maxW="1200px"
          mx="auto"
          textAlign="center"
        >
          <Box p={6}>
            <Box bg={"primary.500"} p={5} borderRadius={"full"}>
              <Icon as={FaTruck} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Fastest Delivery
            </Text>
            <Text>Within 72 hours and order tracking</Text>
          </Box>

          <Box p={6}>
            <Box bg={"primary.500"} p={5} borderRadius={"full"}>
              <Icon as={FaCreditCard} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Buy on Credit
            </Text>
            <Text>Build your credit history with Zarea</Text>
          </Box>

          <Box p={6}>
            <Box bg={"primary.500"} p={5} borderRadius={"full"}>
              <Icon as={FaShieldAlt} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Quality Assurance
            </Text>
            <Text>Certified suppliers & 24-hour refund policy</Text>
          </Box>

          <Box p={6}>
            <Box bg={"primary.500"} p={5} borderRadius={"full"}>
              <Icon as={FaMoneyBillWave} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Cheapest Rates
            </Text>
            <Text>Wide range of products & lowest rates guaranteed</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
