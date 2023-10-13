import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function StayInTouch() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Handle form submission logic, e.g., send the review data to the server
    console.log(data);
    // Show a success message
    toast({
      title: 'Review Submitted',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="400px" mx="auto" p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            {...register('name', { required: 'This field is required' })}
            placeholder="Enter your name"
          />
          {errors.name && <Box color="red.500">{errors.name.message}</Box>}
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <Box color="red.500">{errors.email.message}</Box>}
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Review</FormLabel>
          <Textarea
            {...register('review', { required: 'This field is required' })}
            placeholder="Write your review here"
          />
          {errors.review && <Box color="red.500">{errors.review.message}</Box>}
        </FormControl>

        <Button type="submit" colorScheme="primary">
          Submit Review
        </Button>
      </form>
    </Box>
  );
}
