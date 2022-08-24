/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog, Transition } from "@headlessui/react";
import { ChangeEvent, Fragment, useEffect, useState } from "react";

import { Pokemon } from "../hooks/usePokemons";
import useRawPokemons from "../hooks/useRawPokemons";

type PokemonSearchDialogProps = {
  isOpen: boolean;
  onClose: (pokemon?: Pokemon) => void;
};

export default function PokemonSearchDialog({
  isOpen,
  onClose,
}: PokemonSearchDialogProps) {
  const [pokemonQuery, setPokemonQuery] = useState("");
  const { data, refetch } = useRawPokemons(pokemonQuery);

  useEffect(() => {
    return () => {
      setPokemonQuery("");
      refetch();
    };
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();

    if (value.length > 2) {
      setPokemonQuery(event.target.value.toLowerCase());
      refetch();
    }
  };
  const handleClickPokemon = (pokemon: Pokemon) => {
    onClose(pokemon);
  };

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Search a Pokemon
                </Dialog.Title>
                <div className="mt-2">
                  <div className="mb-8 xl:w-96">
                    <input
                      className="form-control block w-full px-4 py-2 text-xl font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:bg-sky-900 dark:text-white"
                      id="exampleFormControlInput2"
                      placeholder="Type a pokemon name"
                      type="text"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center h-48  relative overflow-auto mt-8">
                  {data &&
                    data.map((pokemon) => (
                      <div
                        key={pokemon.name}
                        className="bg-white dark:bg-sky-900 rounded-lg border border-gray-200 w-96 text-gray-900"
                      >
                        <button
                          className="text-left px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer dark:text-white"
                          type="button"
                          onClick={() => handleClickPokemon(pokemon)}
                        >
                          {pokemon.name}
                        </button>
                      </div>
                    ))}
                </div>

                <div className="mt-4">
                  <button
                    className="my-4inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
