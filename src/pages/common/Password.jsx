import React from 'react';
import { Input, FormControl, FormLabel, Button, Box, Flex, Center } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Password() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle password submission logic here
    console.log(data.password);
  };

  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box p={8} rounded="lg" borderWidth={1} boxShadow="lg" bgColor="white" w="300px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4} id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <Box color="red.500">{errors.password.message}</Box>}
          </FormControl>

          <Button type="submit" colorScheme="primary" width="full">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
