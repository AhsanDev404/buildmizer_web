import React from 'react';
import { Box, Image, Text, Flex,Card } from '@chakra-ui/react';

const ProductCard = ({ productImage, title, price }) => {
  

  return (
    <Card borderWidth="1px" borderRadius="md" overflow="hidden" p={4} boxShadow="md" bgColor={'primary.500'} w={'64'} textColor={'white'} textAlign={'center'} m={5}>
      <Image borderRadius={'md'} src={productImage} alt={title} maxH="200px" objectFit="cover" mb={4} />

      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>

      <Text fontSize="lg" mb={2}>
        ${price}
      </Text>

    
    </Card>
  );
};

export default ProductCard;
