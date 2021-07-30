import React, { useState } from "react";
import Layout from "components/Layout";
import Link from "next/Link";
import {
  Flex,
  Heading,
  Image,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  List, ListItem
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function Pokedex({ data }) {
  // console.log(data);
  const [search, setSearch] = useState("");
   
  const filteredPoke = data.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Flex>

      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Pokedex
        </Heading>
      </Flex>
    </Flex>

      <List>
        <Flex flexWrap="wrap">
          {( search != null )
            ? filteredPoke.map((poke, index) => (
                <Flex
                  justifyContent="center"
                  border="1px solid gray"
                  width="25%"
                >
                  <ListItem key={index}>
                    <Link href={`/pokemon?id=${index + 1}`}>
                      <a>
                        <Image
                          src={poke.image}
                          alt={poke.name}
                          boxSize="100px"
                        />
                        <span>{index + 1}</span>
                        {poke.name}
                      </a>
                    </Link>
                  </ListItem>
                </Flex>
              ))
            : data.map((poke, index) => (
                <Flex
                  justifyContent="center"
                  border="1px solid gray"
                  width="25%"
                >
                  <ListItem key={index}>
                    <Link href={`/pokemon?id=${index + 1}`}>
                      <a>
                        <Image
                          src={poke.image}
                          alt={poke.name}
                          boxSize="100px"
                        />
                        <span>{index + 1}</span>
                        {poke.name}
                      </a>
                    </Link>
                  </ListItem>
                </Flex>
              ))}
        </Flex>
      </List>
    </>
  );
}
