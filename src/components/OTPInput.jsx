import React from 'react';
import { Flex, Input } from '@chakra-ui/react';

const OtpInput = ({ register, otpFields }) => {
  return (
    <Flex>
      {otpFields.map((field, index) => (
        <Input
          key={index}
          {...register(`otp${index}`, {
            required: 'Required',
            maxLength: {
              value: 1,
              message: 'Invalid input',
            },
          })}
          type="text"
          size="lg"
          width="12"
          textAlign="center"
          marginX={1}
        />
      ))}
    </Flex>
  );
};

export default OtpInput;
