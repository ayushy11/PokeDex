import React from "react";
import { Flex, Heading, Image, Text, Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex alignItems="center" justifyContent="center" mr={5}>
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" w={6} h={6} pt={1.5}  />}
          />
          <Input placeholder="Search . . ." size="lg" borderRadius="2rem"/>
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
