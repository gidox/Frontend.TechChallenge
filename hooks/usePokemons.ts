import { useInfiniteQuery } from "@tanstack/react-query";

import fetchClient from "../services/fetchClient";

type ResultData = {
  count: number;
  next: string;
  previous: number | null;
  results: Pokemon[];
};
export type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemons({
  pageParam,
  pokemonNameFilter,
}: {
  pageParam?: string;
  pokemonNameFilter?: string;
}): Promise<ResultData> {
  const url = pageParam && pageParam !== "" ? pageParam : `pokemon`;
  const request = await fetchClient.get<ResultData>(url);

  return request.data;
}
function usePokemons() {
  return useInfiniteQuery(
    ["pokemons"],
    async ({ pageParam }) => {
      const data = await fetchPokemons({ pageParam });

      return data;
    },
    {
      getNextPageParam: (lastPage) => lastPage?.next,
      getPreviousPageParam: (firstPage) => firstPage?.previous,
    }
  );
}

export default usePokemons;
