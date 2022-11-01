import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
