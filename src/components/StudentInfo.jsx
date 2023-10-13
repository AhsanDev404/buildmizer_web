import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'

export default function StudentInfo({ imageUrl, name, studentId, participation }) {
  return (
    <Box textAlign="center" p={4}>
    <Image src={imageUrl} alt={name} borderRadius="full" boxSize="xs" m="auto" />
    <Text fontSize="xl" fontWeight="bold" mt={4}>
      {name}
    </Text>
    <Text color="gray.600">Student ID: {studentId}</Text>
    <Text color="teal.500">Participation: {participation}</Text>
  </Box>
  )
}

