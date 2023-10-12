import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { header } from "../../utils/constant";
import { Link } from "react-router-dom";
import { FaUser, HiMenu } from "../../utils/assets";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box p={5}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"4xl"}>Logo</Text>
        </Box>
        <HStack>
          <HStack gap={5} display={{ base: "none", lg: "flex" }}>
            {header.map((item) => (
              <Link to={item.link}>{item.title}</Link>
            ))}
          </HStack>
          <Box mx={5}>
            <Link to={"/login"}>
              <FaUser fontSize={"20"} />
            </Link>
          </Box>
          <Button
            onClick={() => setShowMenu(!showMenu)}
            variant={"unstyled"}
            display={{ base: "block", lg: "none" }}
          >
            <HiMenu fontSize={"20"} />
          </Button>
        </HStack>
      </HStack>
      {showMenu && (
        <VStack display={{ base: "flex", lg: "none" }} my={5} gap={5}>
          {header.map((item) => (
            <Link to={item.link}>{item.title}</Link>
          ))}
        </VStack>
      )}
    </Box>
  );
}
