import React from "react";
import Layout from "components/Layout";
import Link from "next/Link";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import NavbarDetails from "../NavbarDetails/NavbarDetails";

function Details({ poke }) {
  console.log(poke);
  return (
    <>      
        <NavbarDetails />
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          border="2px solid green"
        >
          <Heading as="h1" color="darkGray" textTransform="uppercase" pt="1.5rem">
            {poke.name}
          </Heading>
          <Image src={poke.image} alt={poke.name} boxSize="500px" />
          <Text color="textGray">
            <span>Weight:</span>{"  "}
            {poke.weight}g
          </Text>
          <Text color="textGray">
            <span>Height:</span>{"  "}
            {poke.height}u
          </Text>
          <Heading as="h3" textTransform="uppercase">
            Typing
          </Heading>

          {poke.types.map((type, index) => (
            <Text key={index} textTransform="capitalize">{type.type.name}</Text>
          ))}

          <Text color="darkGray" textTransform="uppercase">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Text>
        </Flex>
     
    </>
  );
}

export default Details;


