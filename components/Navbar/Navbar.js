import React, { useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

function Navbar() {
  const [search, setSearch] = useState();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      background="#00F260" /* fallback for old browsers */
      background="-webkit-linear-gradient(to right, #141e30, #243b55)" /* Chrome 10-25, Safari 5.1-6 */
      background="linear-gradient(to right, #141e30, #243b55)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    >
      <Flex alignItems="center" justifyContent="center" mr={5} color="white">
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="white" w={6} h={6} pt={1.5} />}
          />
          <Input
            placeholder="Search..."
            size="lg"
            borderRadius="2rem"
            color="white"
            onChange={(e)=> setSearch(e.target.value)}
          />
        </InputGroup>
      </Flex>

      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Pokedex
        </Heading>
      </Flex>

      {/* <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack> */}

      {/* <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box> */}
    </Flex>
  );
}

export default Navbar;
