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
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import Link from "next/link";

function NavbarDetails() {
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
      <Flex alignItems="center" justifyContent="center" mr={5}>
        <Link href="/">
          <a>
            <ArrowBackIcon />
          </a>
        </Link>
      </Flex>

      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Pokedex
        </Heading>
      </Flex>
    </Flex>
  );
}

export default NavbarDetails;
