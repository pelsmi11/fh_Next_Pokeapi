import React, { FC, useEffect, useState } from "react";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { pokemonDex, Pokemon } from "../../interfaces";
import { getPokemonDexInfo, getPokemonInfo } from "../../utils";

interface Props {
  pokemonDex: Pokemon;
}

export const PokedexDescription: FC<Props> = ({ pokemonDex }) => {
  const [descriptionPokemon, setdescriptionPokemon] =
    useState<pokemonDex | null>(null);

  useEffect(() => {
    getPokedexDescription();
  }, []);

  const getPokedexDescription = async () => {
    const info = await getPokemonDexInfo(`${pokemonDex.id}`);

    if (info) {
      const dex: pokemonDex = info;
      setdescriptionPokemon(dex);
    }
  };

  return (
    <>
      <Card hoverable css={{ padding: "30px" }}>
        <Card.Body>
          <Text h2 transform="capitalize">
            Pokedex
          </Text>
          {descriptionPokemon && (
            <Text h3>{descriptionPokemon.DexDescription}</Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
