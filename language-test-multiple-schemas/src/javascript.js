var gql = x => x;

var query = gql`
  query GetCharactersJS($anArg: [Float!]!) {
    characters {
      results {
        id
        name
        test2(anArg: $anArg)
      }
    }
  }
`;
