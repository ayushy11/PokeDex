import React, { useState } from "react";
import Layout from "components/Layout";
// import Pokedex from "@/components/Pokedex/Pokedex.js";
import Link from "next/Link";
import { Flex, Image, List, ListItem } from "@chakra-ui/react";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { css, useTheme } from "@emotion/react";

// export async function getStaticProps(context) {
//   try {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
//     const { results } = await res.json();

//     const pokemon = results.map((result, index) => {
//       const paddedIndex = ("00" + (index + 1)).slice(-3);
//       const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
//       return {
//         ...result,
//         image,
//       };
//     });
//     return {
//       props: { pokemon },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }

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
