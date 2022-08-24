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

async function fetchPokemons(): Promise<ResultData> {
  const request = await fetchClient.get<ResultData>(`pokemon/`);

  return request.data;
}
function usePokemons() {
  return useInfiniteQuery(
    ["pokemons"],
    async () => {
      const data = await fetchPokemons();

      return data;
    },
    {
      // getNextPageParam: (lastPage) =>
      //   lastPage.paging.current < lastPage.paging.total ? lastPage.paging.current + 1 : undefined,
    }
  );
}

export default usePokemons;
