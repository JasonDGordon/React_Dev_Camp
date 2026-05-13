import { type Pokemon } from "../types/pokemon";

type PartyListProps = {
  party: Pokemon[];
};

export default function PartyList({
  party,
}: PartyListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        My Party ({party.length}/6)
      </h2>

      {party.length === 0 && (
        <p className="text-gray-500">
          No Pokémon added yet.
        </p>
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
  );
}