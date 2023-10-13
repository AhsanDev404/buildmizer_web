import React, { useState } from "react";
import {
  Box,
  Select,
  Input,
  Button,
  FormControl,
  FormLabel,
  Table,
  Text,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const Calculator = () => {
  const [formData, setFormData] = useState(null);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Box p={6} maxWidth="400px" margin="auto">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Marla Information
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <FormLabel>Number of Marla</FormLabel>
          <Controller
            name="marlaCount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="Enter number of marla"
              />
            )}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Type of Marla</FormLabel>
          <Controller
            name="marlaType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select {...field} placeholder="Select type of marla">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </Select>
            )}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Number of Stories</FormLabel>
          <Controller
            name="numberOfStories"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <Select {...field} placeholder="Select number of stories">
                {[...Array(5)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <Button colorScheme="primary" type="submit">
          Submit
        </Button>
      </form>

      {formData && (
        <Box mt={6}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Submitted Data
          </Text>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th>Quantity</Th>
                <Th> A+- Category</Th>
                <Th>A- Category</Th>
                <Th> B Category</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight={"bold"}>{formData.marlaCount}</Td>
                <Td>{formData.marlaType}</Td>
                <Td>{formData.numberOfStories}</Td>
                <Td>Cell 4 Data</Td>
                <Td>Cell 5 Data</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default Calculator;
