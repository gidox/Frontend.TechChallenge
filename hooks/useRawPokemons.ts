import { useQuery } from "@tanstack/react-query";

import fetchClient from "../services/fetchClient";

type ResultData = {
  count: number;
  next: string;
  previous: number | null;
  results: Pokemon[];
};
type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemons(): Promise<ResultData> {
  const url = `pokemon?limit=99999999`;
  const request = await fetchClient.get<ResultData>(url);

  return request.data;
}
function useRawPokemons(str: string) {
  return useQuery(
    ["pokemonsFiltered"],
    async () => {
      console.log({ str });
      const data = await fetchPokemons();

      const filtered = data.results.filter((pokemon) =>
        pokemon.name.includes(str)
      );

      return filtered;
    },
    { enabled: str.length > 2 }
  );
}

export default useRawPokemons;
