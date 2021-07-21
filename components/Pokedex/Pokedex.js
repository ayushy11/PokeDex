import React, { useState } from "react";
import Layout from "components/Layout";
// import Pokedex from "@/components/Pokedex/Pokedex.js";
import Link from "next/Link";
import { Flex, Image, List, ListItem } from "@chakra-ui/react";

export default function Pokedex({ data }) {
  console.log(data);

  return (
    <>
     
        <List>
          <Flex flexWrap="wrap">
            {data.map((poke, index) => (
              <Flex justifyContent="center" border="1px solid gray" width="25%">
                <ListItem key={index}>
                  <Link href={`/pokemon?id=${index + 1}`}>
                    <a>
                      <Image src={poke.image} alt={poke.name} boxSize="100px" />
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
