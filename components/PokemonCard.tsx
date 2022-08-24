import Image from "next/image";
import { ReactNode } from "react";

import usePokemon from "../hooks/usePokemon";

import Card from "./Card";

type PokemonCardProps = {
  name: string;
};
export type PokemonType = "fire" | "water" | "grass";

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data } = usePokemon(name);

  return (
    <Card>
      <div className="flex-shrink-0 object-cover object-center w-20 h-20 mx-auto -mt-8 rounded-full shadow-xl aboslute bg-white">
        {data?.image && (
          <Image
            alt={name}
            className="rounded-full"
            height="200"
            src={data.image}
            width="200"
          />
        )}
      </div>
      <div className="p-6 lg:text-center">
        <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          {" "}
          {data?.type}
        </span>
        <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl capitalize">
          {name}
        </h4>
        <p className="mt-3 text-base leading-relaxed text-gray-500">
          Height: {data?.height}, Weight: {data?.weight}
        </p>
        <div className="mt-6">
          <a
            className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            href="#"
          >
            View more{" "}
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
