// import React from "react";
// import Layout from "components/Layout";
// import Link from "next/Link";
// import { Flex, Heading, Image, Text } from "@chakra-ui/react";

// function pokemon({ poke }) {
//   console.log(poke);
//   return (
//     <>
//       <Layout title={poke.name}>
//         <Flex
//           alignItems="center"
//           justifyContent="center"
//           flexDirection="column"
//           border="2px solid green"
//         >
//           <Heading as="h1" textTransform="capitalize">
//             {poke.name}
//           </Heading>
//           <Image src={poke.image} alt={poke.name} boxSize="500px" />
//           <Text>
//             <span>Weight:</span>
//             {poke.weight}
//           </Text>
//           <Text>
//             <span>Height:</span>
//             {poke.height}
//           </Text>
//           <Heading as="h2">
//             Types
//           </Heading>

//           {poke.types.map((type, index) => (
//             <Text key={index} textTransform="capitalize">{type.type.name}</Text>
//           ))}

//           <Text>
//             <Link href="/">
//               <a>Home</a>
//             </Link>
//           </Text>
//         </Flex>
//       </Layout>
//     </>
//   );
// }

// export default pokemon;

// export async function getServerSideProps({ query }) {
//   const id = query.id;
//   try {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const poke = await res.json();
//     const paddedIndex = ("00" + id).slice(-3);
//     const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
//     poke.image = image;

//     return {
//       props: { poke },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// }

import React from "react";
import Layout from "components/Layout";
import Link from "next/Link";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Details from "@/components/Details/Details";

function pokemon({ poke }) {
  return (
    <>
      <Layout title={poke.name}>
        <Details poke={poke}/>
      </Layout>
    </>
  );
}

export default pokemon;

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const poke = await res.json();
      const paddedIndex = ("00" + id).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
      poke.image = image;
  
      return {
        props: { poke },
      };
    } catch (err) {
      console.log(err);
    }
  }
