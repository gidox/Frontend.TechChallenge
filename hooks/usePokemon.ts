import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import fetchClient from "../services/fetchClient";

type ResultData = {
  types: PokemonType[];
  weight: number;
  height: number;
  sprites: {
    front_default: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

async function fetchPokemon(pokemonName: string): Promise<ResultData> {
  const request = await fetchClient.get<ResultData>(`pokemon/${pokemonName}`);

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
