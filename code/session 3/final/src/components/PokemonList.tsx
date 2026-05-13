import { type Pokemon } from "../types/pokemon";

type PokemonListProps = {
  pokemonList: Pokemon[];
  onAdd: (pokemon: Pokemon) => void;
};

export default function PokemonList({
  pokemonList,
  onAdd,
}: PokemonListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Pokédex
      </h2>

      <ul className="space-y-2">
        {pokemonList.map((pokemon) => (
          <li
            key={pokemon.name}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
          >
            <span className="capitalize">
              {pokemon.name}
            </span>

            <button
              onClick={() => onAdd(pokemon)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
            >
              Add to party
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}