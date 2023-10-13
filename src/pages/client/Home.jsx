import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

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
  constructionImage,
} from "../../utils/assets";

import { useForm } from "react-hook-form";
import ProductCard from "../../components/ProducCard";
import { products } from "../../utils/constant";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    // Show a success message
    toast({
      title: "Review Submitted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset the form after submission
    reset();
  };

  const formBgColor = useColorModeValue("white", "gray.800");

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

      <Flex
        direction={["column", "column", "row"]}
        bgColor={"primary.500"}
        m="auto"
        p={4}
        alignItems={"center"}
        textColor={"white"}
        boxShadow="md"
      >
        <Box
          flex="1"
          mr={[0, 0, 8]}
          mb={[8, 8, 0]}
          w={"64"}
          bgColor={"white"}
          textColor={"black"}
          borderRadius={"md"}
          p={5}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                {...register("name", { required: "This field is required" })}
                placeholder="Enter your name"
              />
              {errors.name && (
                <Text color="red.500">{errors.name.message}</Text>
              )}
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Review</FormLabel>
              <Textarea
                {...register("review", { required: "This field is required" })}
                placeholder="Write your review here"
              />
              {errors.review && (
                <Text color="red.500">{errors.review.message}</Text>
              )}
            </FormControl>

            <Button type="submit" colorScheme="primary">
              Submit Review
            </Button>
          </form>
        </Box>

        {/* Content on the side */}
        <VStack
          alignItems={"flex-start"}
          flex="1"
          p={4}
          borderRadius="md"
          gap={5}
        >
          <Heading fontSize="6xl" mb={2}>
            Write a Review
          </Heading>
          <Text fontSize={"xl"}>
            Our goal is to build your success by delivering exceptional results
            and meeting all your unique construction needs.
          </Text>
          <Button>Read More</Button>
        </VStack>
      </Flex>
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
          <VStack p={6}>
            <Box
              bg={"primary.500"}
              p={5}
              borderRadius={"full"}
              w={"fit-content"}
            >
              <Icon as={FaTruck} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Fastest Delivery
            </Text>
            <Text>Within 72 hours and order tracking</Text>
          </VStack>

          <VStack p={6}>
            <Box
              bg={"primary.500"}
              p={5}
              borderRadius={"full"}
              w={"fit-content"}
            >
              <Icon as={FaCreditCard} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Buy on Credit
            </Text>
            <Text>Build your credit history with Zarea</Text>
          </VStack>

          <VStack p={6}>
            <Box
              bg={"primary.500"}
              p={5}
              borderRadius={"full"}
              w={"fit-content"}
            >
              <Icon as={FaShieldAlt} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Quality Assurance
            </Text>
            <Text>Certified suppliers & 24-hour refund policy</Text>
          </VStack>

          <VStack p={6}>
            <Box
              bg={"primary.500"}
              p={5}
              borderRadius={"full"}
              w={"fit-content"}
            >
              <Icon as={FaMoneyBillWave} boxSize={12} color="white" />
            </Box>
            <Text mt={4} fontWeight="bold" fontSize="lg">
              Cheapest Rates
            </Text>
            <Text>Wide range of products & lowest rates guaranteed</Text>
          </VStack>
        </Flex>
      </Box>

      <Box p={12} bg={"primary.500"} color={"white"}>
        <Flex
          direction={["column", "column", "row"]}
          justify="center"
          align="center"
          maxW="1200px"
          mx="auto"
        >
          {/* Image on the side for large screens */}
          <Box flex={["none", "none", 1]} mr={[0, 0, 8]} mb={[8, 8, 0]}>
            <Image
              src={constructionImage}
              alt="Construction"
              w="100%"
              h="auto"
              borderRadius="md"
            />
          </Box>

          <Box flex={1}>
            <Heading fontSize={["xl", "2xl", "3xl"]} mb={4}>
              The Best Prices in the Market for Construction
            </Heading>
            <Text fontSize={["md", "lg", "xl"]} mb={8}>
              Looking for affordable construction materials and supplies? Look
              no further than our website, where you’ll find the best prices in
              the market.
            </Text>
            <Text fontWeight="bold" fontSize={["lg", "xl"]} mb={4}>
              Price Monitor
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box my={10}>
        <Heading textAlign={"center"} my={5}>
          Products
        </Heading>
        <Flex flexWrap="nowrap" overflowX="auto" justifyContent={"center"}>
          {products.map((item, index) => (
            <Box>
              <ProductCard
                key={index}
                productImage={item.productImage}
                title={item.title}
                price={item.price}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
