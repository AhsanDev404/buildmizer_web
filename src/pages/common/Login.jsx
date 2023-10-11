import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Handle login logic here (you can make an API call here for authentication)
    console.log(data);
    // Show a success message
    toast({
      title: "Login Successful",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box p={8} rounded="lg" borderWidth={1} boxShadow="lg" bgColor="white" w="300px">
        <Heading mb={4} textAlign="center" fontSize="2xl" color="primary.500">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4} id="email" isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <Box color="red.500">{errors.email.message}</Box>}
          </FormControl>

          <FormControl mb={4} id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters',
                },
              })}
            />
            {errors.password && <Box color="red.500">{errors.password.message}</Box>}
          </FormControl>

          <Button type="submit" colorScheme="primary" width="full" mb={4}>
            Login
          </Button>

          {/* Navigation link to Signup page */}
          <Flex justify="center">
            <Link to="/signup" color="primary.500">
              Don't have an account? Sign up here
            </Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
