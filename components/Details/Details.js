import React from "react";
import Layout from "components/Layout";
import Link from "next/link";
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
        // border="2px solid green"
        width="100%"
      >
        <Flex width="100%" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            color="darkGray"
            textTransform="uppercase"
            pt="1.5rem"
          >
            {poke.name}
          </Heading>
        </Flex>

        <Flex
          // border="2px solid purple"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ xs: "column", sm: "row" }}
        >
          <Flex
            alignItems="center"
            flexDirection="column"
            // border="2px solid black"
            w={{ xs: "100%", sm: "10%" }}
            pl={{ sm: "2rem" }}
            ml={{ sm: "2rem" }}
          >
            <Text color="textGray">
              <span>Weight:</span>
              {"  "}
              {poke.weight}g
            </Text>

            <Text color="textGray">
              <span>Height:</span>
              {"  "}
              {poke.height}u
            </Text>

            <Text color="textGray">
              <Flex w="20%">
                Type:
                <Flex justifyContent="space-between" w="20%">
                  {poke.types.map((type, index) => (
                    <Text key={index} textTransform="capitalize">
                      {type.type.name} {"  "}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            flexDirection="column"
            // border="2px solid orange"
            justifyContent="center"
            pr={{ sm: "5rem" }}
            w={{ xs: "100%", sm: "50%" }}
          >
            <Image
              src={poke.image}
              alt={poke.name}
              boxSize={{ xs: "auto", sm: "500px" }}
            />
          </Flex>
          <Flex
            alignItems="center"
            flexDirection="column"
            // border="2px solid black"
            pr={{ sm: "2rem" }}
            mr={{ sm: "2rem" }}
            w={{ xs: "100%", sm: "10%" }}
          >
            Stats
          </Flex>
        </Flex>
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
