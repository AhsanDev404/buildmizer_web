import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import StudentInfo from '../../components/StudentInfo';
import { studentData } from '../../utils/constant';



export default function About() {
  

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Student Information
      </Text>
     {
      studentData.map((item)=> <StudentInfo {...item} />)
     }
    </Box>
  );
}
