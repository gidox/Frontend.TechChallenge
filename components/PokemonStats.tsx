import { Stat } from "../hooks/usePokemon";

import Title from "./Title";

const PokemonStats = ({ stats }: { stats: Stat[] }) => {
  return (
    <div className="mb-9">
      <Title text="Stats" />
      <div className=" bg-white mt-20 relative flex flex-col items-center shadow-sm rounded-md p-8 dark:bg-slate-800">
        <div className="w-full">
          <table className="table-auto hover:table-fixed min-w-full ">
            <thead className="border-b">
              <tr>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left dark:text-white">
                  Name
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left dark:text-white ">
                  Base
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left dark:text-white">
                  Effort
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map((v, i) => (
                <tr key={i} className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {v.stat.name}
                  </td>

                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-white">
                    {v.base_stat}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap dark:text-white">
                    {v.effort}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
