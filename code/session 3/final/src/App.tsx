import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import PartyList from "./components/PartyList";
import { type Pokemon } from "./types/pokemon";
import type { PokemonListItem, PokemonListResult } from "./types/pokemon-list-result";

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [party, setParty] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
      );

      const pokemonListData: PokemonListResult = await response.json();

      const pokemonList: Pokemon[] = pokemonListData.results.map(
        (pokemon: PokemonListItem) => ({
          name: pokemon.name,
        }),
      );
      console.log("Got my pokemon list");
      setPokemon(pokemonList);
    };

    fetchPokemon();
    
    console.log(
      "This executes before the pokemonList is set because `fetchPokemon` is an async call",
    );
  }, []);

  function addToParty(selectedPokemon: Pokemon) {
    if (party.length >= 6) {
      alert("Your party is full!");
      return;
    }

    // Right now we don't have a unique identifier, so we're not adding the same pokemon to the list
    const alreadyAdded = party.some(
      (pokemon) => pokemon.name === selectedPokemon.name,
    );

    if (alreadyAdded) {
      alert("Pokemon already in your party!");
      return;
    }

    setParty([...party, selectedPokemon]);
  }

return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        React Pokédex
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <PokemonList
            pokemonList={pokemon}
            onAdd={addToParty}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <PartyList party={party} />
        </div>
      </div>
    </div>
  );
}