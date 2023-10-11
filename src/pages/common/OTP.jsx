import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Center, Heading, Stack, useToast } from '@chakra-ui/react';
import OtpInput from '../../components/OTPInput';

const OTP = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Concatenate OTP digits
    const otp = Object.values(data).reduce((accumulator, currentValue) => accumulator + currentValue, '');
    
    // Validate OTP length
    if (otp.length === 6) {
      // Handle OTP validation logic here
      console.log(otp);
      // Show a success message
      toast({
        title: 'OTP Verified',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      // Show an error message if the OTP is not valid
      toast({
        title: 'Invalid OTP',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const otpFields = Array.from({ length: 6 }, (_, index) => index); // Array to map OTP input fields

  return (
    <Center minH="100vh">
      <Box p={8} rounded="lg" borderWidth={1} boxShadow="lg" bgColor="white" w="300px">
        <Heading mb={4} textAlign="center" fontSize="2xl" color="primary.500">
          Enter OTP
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <OtpInput register={register} otpFields={otpFields} />
            <Button type="submit" colorScheme="primary" width="full">
              Verify OTP
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default OTP;
