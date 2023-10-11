import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Center, Heading } from '@chakra-ui/react';

export default function PageNotFound() {
  return (
    <Center minH="100vh">
      <Box p={8} rounded="lg" borderWidth={1} boxShadow="lg" bgColor="white" w="300px" textAlign="center">
        <Heading mb={4} fontSize="2xl" color="primary.500">
          Page Not Found
        </Heading>
        <p>Oops! The page you are looking for does not exist.</p>
        <Button as={Link} to="/" colorScheme="primary" width="full" mt={4}>
          Go to Home
        </Button>
      </Box>
    </Center>
  );
}
