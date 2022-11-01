import type { NextPage, GetStaticProps } from "next";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts/Layout";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <>
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            // <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            //   <Card hoverable clickable>
            //     <Card.Body css={{ p: 1 }}>
            //       <Card.Image src={img} width="100%" height={140} />
            //     </Card.Body>
            //     <Card.Footer>
            //       <Row justify="space-between">
            //         <Text transform="capitalize">{name}</Text>
            //         <Text>#{id}</Text>
            //       </Row>
            //     </Card.Footer>
            //   </Card>
            // </Grid>
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=898");
  // const pokemons: SmallPokemon[] = data.results.map<SmallPokemon>((pokemon) => {
  //   const id = pokemon.url.split("/")[6];

  //   return {
  //     ...pokemon,
  //     id: +id,
  //     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
  //   };
  // });
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        i + 1
      }.png`,
      // img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      //   i + 1
      // }.svg`,
    };
  });
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
};

export default Home;
