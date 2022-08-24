import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import MainLayout from "../../components/MainLayout";
import PokemonStats from "../../components/PokemonStats";
import { PokemonDataType } from "../../hooks/usePokemon";

type PokemonDetailType = {
  pokemon: PokemonDataType;
};

const PokemonDetail = ({ pokemon }: PokemonDetailType) => {
  const type = pokemon.types.map((t) => t.type.name).join(", ");

  return (
    <MainLayout>
      <Head>
        <title>{pokemon.name} Pokemon detail page</title>
      </Head>
      <div className="h-80 bg-white mt-20 relative flex flex-col items-center shadow-sm rounded-md dark:bg-slate-800">
        <div className=" h-40 w-40  bg-sky-400 rounded-full p-4 absolute -top-20">
          <Image
            alt={pokemon.name}
            className="rounded-full"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            src={pokemon.sprites.other["official-artwork"].front_default} // just an example
          />
        </div>
        <div className="p-6">
          <h1 className="mt-20 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-5xl capitalize dark:text-white">
            {pokemon.name}
          </h1>
        </div>
        <hr />
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center border-r-2 border-r-gray-200 px-7">
            <p className="leading-relaxed text-gray-500 dark:text-white capitalize text-lg">
              {pokemon.height}
            </p>
            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-white font-bold">
              Height
            </p>
          </div>
          <div className="flex flex-col items-center border-r-2 border-r-gray-200 px-7">
            <p className="leading-relaxed text-gray-500 dark:text-white capitalize text-lg">
              {type}
            </p>
            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-white font-bold">
              Type
            </p>
          </div>

          <div className="flex flex-col items-center px-7">
            <p className="leading-relaxed text-gray-500 dark:text-white capitalize text-lg">
              {pokemon.base_experience}
            </p>
            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-white font-bold">
              XP
            </p>
          </div>
        </div>
      </div>

      <PokemonStats stats={pokemon.stats} />
    </MainLayout>
  );
};

export default PokemonDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.NEXT_API_BASE_URL || "localhost";

  const res = await fetch(`${url}/pokemon/${context?.params?.name}`);
  const data = await res.json();

  return { props: { pokemon: data } };
};
