import { pokeApi } from "../api";
import { FlavorTextEntry, PokemonSpecies } from "../interfaces";
import { pokemonDex } from "../interfaces";

export const getPokemonDexInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonSpecies>(
      `/pokemon-species/${nameOrId}`
    );

    const flawor: FlavorTextEntry[] = data.flavor_text_entries.filter(
      (d) => d.language.name === "es"
    );

    return {
      id: data.id,
      name: data.name,
      DexDescription: flawor[0].flavor_text,
    };
  } catch (error) {
    return null;
  }
};
