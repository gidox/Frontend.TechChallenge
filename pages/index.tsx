/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";

import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { Fragment, useEffect } from "react";

import MainLayout from "../components/MainLayout";
import PokemonCard from "../components/PokemonCard";
import usePokemons from "../hooks/usePokemons";
import Button from "../components/Button";

const Home: NextPage = () => {
  const { ref, inView } = useInView();
  const {
    data: pokemonData,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
    status,
  } = usePokemons();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <h4 className="mt-8 mb-12 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-4xl">
        Pokemons
      </h4>

      {status === "loading" ? (
        <p className="text-muted text-lg font-bold">Loading...</p>
      ) : status === "error" ? (
        <span>Error: {JSON.stringify(error)}</span>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pokemonData?.pages.map((group, i) => (
              <Fragment key={i}>
                {group?.results.map((pokemon) => (
                  <PokemonCard key={pokemon.name} name={pokemon.name} />
                ))}
              </Fragment>
            ))}
          </div>
          <div>
            <button
              ref={ref}
              className={
                "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-8"
              }
              disabled={!hasNextPage || isFetchingNextPage}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load Newer"
                : "Nothing more to load"}
            </button>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default Home;
