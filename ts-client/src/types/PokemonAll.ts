/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonAll
// ====================================================

export interface PokemonAll_pokemon_attacks_special {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface PokemonAll_pokemon_attacks {
  __typename: "PokemonAttack";
  /**
   * The special attacks of this Pokémon
   */
  special: (PokemonAll_pokemon_attacks_special | null)[] | null;
}

export interface PokemonAll_pokemon_evolutions_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface PokemonAll_pokemon_evolutions_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
  /**
   * The type of this Pokémon attack
   */
  type: string | null;
  /**
   * The damage of this Pokémon attack
   */
  damage: number | null;
}

export interface PokemonAll_pokemon_evolutions_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (PokemonAll_pokemon_evolutions_attacks_fast | null)[] | null;
}

export interface PokemonAll_pokemon_evolutions {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: PokemonAll_pokemon_evolutions_weight | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: PokemonAll_pokemon_evolutions_attacks | null;
}

export interface PokemonAll_pokemon {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: PokemonAll_pokemon_attacks | null;
  /**
   * The evolutions of this Pokémon
   */
  evolutions: (PokemonAll_pokemon_evolutions | null)[] | null;
}

export interface PokemonAll {
  pokemon: PokemonAll_pokemon | null;
}

export interface PokemonAllVariables {
  name?: string | null;
}
