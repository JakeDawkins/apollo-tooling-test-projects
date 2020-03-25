import { gql } from 'apollo-boost';


export const POKEMON_ALL = gql`
query PokemonAll ($name: String)  {
  pokemon(name: $name) {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`;
;