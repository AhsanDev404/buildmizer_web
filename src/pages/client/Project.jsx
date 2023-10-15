import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  IconButton,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { projects as initialProjects } from "../../utils/constant";
import { FaPlus } from "../../utils/assets";
import { Link, useNavigate } from "react-router-dom";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Handle form submission logic here, e.g., updating the projects state
    const newProject = {
      id: projects.length + 1,
      name: data.name,
      description: data.description,
      type: data.type,
    };
    setProjects([...projects, newProject]);
    setIsOpen(false);
    reset();
  };

  const handleDelete = (projectId) => {
    // Handle project deletion logic here, e.g., filter out the project from the projects state
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
  };

  return (
    <div>
      {projects.length === 0 ? (
        <Heading textAlign={'center'} my={5}>No projects available</Heading>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Project Description</Th>
              <Th>Project Type</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => (
              <Tr key={project.id} _hover={{ cursor: "pointer" }}>
                <Td>{project.name}</Td>
                <Td>{project.description}</Td>
                <Td>{project.type}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    mr={2}
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    Details
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                  <Button colorScheme="blue" size="sm" ml={2}>
                    Update
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}

      <Flex justifyContent={"flex-end"} m={5}>
        <IconButton
          borderRadius={"full"}
          onClick={() => setIsOpen(true)}
          colorScheme="teal"
          size="md"
          mt={4}
        >
          <FaPlus />
        </IconButton>
      </Flex>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Project Name</FormLabel>
                  <Input
                    {...register("name")}
                    placeholder="Enter project name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Project Description</FormLabel>
                  <Input
                    {...register("description")}
                    placeholder="Enter project description"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Project Type</FormLabel>
                  <Input
                    {...register("type")}
                    placeholder="Enter project type"
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Project;
