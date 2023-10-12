import { Box, HStack, List, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "../../utils/assets";
export default function Footer() {
  return (
   <Box
   bgColor={"primary.500"}
   textColor={"white"}
   >
     <Box
     
      padding={{ base: "5" }}
      display={{ base: "block", lg: "flex" }}
      justifyContent={"space-around"}
  

    >
      <VStack gap={{base:5 , lg:10}} alignItems={{base:'center' , lg:'flex-start'}}>
        <Text fontSize={"6xl"}>Logo</Text>
        <HStack  justifyContent={'space-around'} gap={5}  fontSize={'26'} >
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </HStack>
      </VStack>
      <VStack alignItems={{base:"center",lg:"flex-start"}} my={10}>
        
         <Text>Home</Text>
         <Text>About</Text>
         <Text>Stay In Touch</Text>
         <Text>Calculator</Text>
         <Text>Project</Text>
      </VStack>
      <VStack alignItems={{base:"center",lg:"flex-start"}}  my={10}>
        
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Stay In Touch</Text>
        <Text>Calculator</Text>
        <Text>Project</Text>
     </VStack>
    </Box>
    <Text py={5} textAlign={'center'}  borderTop={'1px'} borderTopColor={"white"}>
    © {new Date().getFullYear()} BuildMizer. All rights reserved.
    </Text>
   </Box>
  );
}
