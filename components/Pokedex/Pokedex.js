import React, { useState } from "react";
import Layout from "components/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

import {
  Flex,
  Heading,
  Image,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  List,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function Pokedex({ data }) {
  // console.log('!!!!!!!!!!!', data)

  const [search, setSearch] = useState("");

  const filteredPoke = data.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      <Flex
        as="nav"
        align="center"
        flexDir={{ xs: "column-reverse", sm: "row" }}
        justify={"space-between"}
        wrap="wrap"
        padding={2}
        bg="teal.500"
        color="white"
        background="#00F260" /* fallback for old browsers */
        background="-webkit-linear-gradient(to right, #141e30, #243b55)" /* Chrome 10-25, Safari 5.1-6 */
        background="linear-gradient(to right, #141e30, #243b55)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          ml={{ sm: "1.5rem" }}
          color="white"
        >
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

        <Flex align="center" mr={{ sm: "2rem" }}>
          <Image src="icon-file.png" h="5rem" w="5rem" />
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Pokedex
          </Heading>
        </Flex>
      </Flex>

      <List ref={observe}>
        {inView && (
          <Grid
            templateColumns={{ xs: "repeat(3,1fr)", sm: "repeat(9, 1fr)" }}
            gap={6}
            mt="1rem"
            mr={{ xs: "0.5rem", sm: "1rem" }}
            ml={{ xs: "0.5rem", sm: "1rem" }}
          >
            {search != null
              ? filteredPoke.map((poke) => (
                <GridItem
                  boxShadow="lg"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                      boxShadow: "0 0 40px #a6fffb",
                      animation: "textColor 10s ease infinite",
                    },
                  }}
                >
                  <ListItem key={poke.id}>
                    <Link href={`/pokemon?id=${poke.id}`}>
                      <a>
                        <Flex flexDirection="column" alignItems="center">
                          <Flex justifyContent="space-between" width="100%">
                            <span>{poke.id}</span>
                            {/* <Text>Type</Text> */}
                          </Flex>
                          <Image
                            src={poke.image}
                            alt={poke.name}
                            boxSize="100px"
                          />
                          <Text
                            // color="darkGray"
                            textTransform="capitalize"
                          >
                            {poke.name}
                          </Text>
                        </Flex>
                      </a>
                    </Link>
                  </ListItem>
                </GridItem>
              ))
              : data.map((poke, index) => (
                <GridItem
                  boxShadow="lg"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                      boxShadow: "0 0 40px #a6fffb",
                      animation: "textColor 10s ease infinite",
                    },
                  }}
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
                </GridItem>
              ))}
          </Grid>
        )}
      </List>
    </>
  );
}
