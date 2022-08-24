import { useQuery } from "@tanstack/react-query";

import fetchClient from "../services/fetchClient";

export type PokemonDataType = {
  types: PokemonType[];
  name: string;
  weight: number;
  base_experience: string;
  height: number;
  stats: Stat[];
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

async function fetchPokemon(pokemonName: string): Promise<PokemonDataType> {
  const request = await fetchClient.get<PokemonDataType>(
    `pokemon/${pokemonName}`
  );

  return request.data;
}
function usePokemon(pokemonName: string) {
  return useQuery(["pokemon", pokemonName], async () => {
    const a = await fetchPokemon(pokemonName);

    return {
      image: a.sprites.front_default,
      height: a.height,
      weight: a.weight,
      type: a.types.map((t) => t.type.name).join(", "),
    };
  });
}

export default usePokemon;
