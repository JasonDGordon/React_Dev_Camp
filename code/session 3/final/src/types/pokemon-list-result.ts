export type PokemonListResult = {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonListItem[];
};

export type PokemonListItem = {
    name: string;
    url: string;
};