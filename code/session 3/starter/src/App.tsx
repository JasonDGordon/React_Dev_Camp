import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
};

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [party, setParty] = useState<Pokemon[]>([]);

  async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

    const data = await response.json();

    setPokemon(data.results);
  }

  fetchPokemon();

  function addToParty(selectedPokemon: Pokemon) {
    if (party.length >= 6) {
      alert("Your party is full!");
      return;
    }

    const alreadyAdded = party.some(
      (pokemon) => pokemon.name === selectedPokemon.name,
    );

    if (alreadyAdded) {
      alert("Pokemon already added!");
      return;
    }

    setParty([...party, selectedPokemon]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">React Pokédex</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pokemon List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Pokédex</h2>

          <ul className="space-y-2">
            {pokemon.map((pokemon) => (
              <li
                key={pokemon.name}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
              >
                <span className="capitalize">{pokemon.name}</span>

                <button
                  onClick={() => addToParty(pokemon)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Add to party
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Party List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            My Party ({party.length}/6)
          </h2>

          {party.length === 0 && (
            <p className="text-gray-500">No Pokémon added yet.</p>
          )}

          <ul className="space-y-2">
            {party.map((pokemon) => (
              <li
                key={pokemon.name}
                className="bg-gray-100 p-3 rounded-lg capitalize"
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
