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
          <Heading as="h1" textTransform="capitalize">
            {poke.name}
          </Heading>
          <Image src={poke.image} alt={poke.name} boxSize="500px" />
          <Text>
            <span>Weight:</span>
            {poke.weight}
          </Text>
          <Text>
            <span>Height:</span>
            {poke.height}
          </Text>
          <Heading as="h2">
            Types
          </Heading>

          {poke.types.map((type, index) => (
            <Text key={index} textTransform="capitalize">{type.type.name}</Text>
          ))}

          <Text>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Text>
        </Flex>
     
    </>
  );
}

export default Details;


