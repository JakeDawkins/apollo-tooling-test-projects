String gql(String x) => x;

var query = gql(r"""
  query GetCharactersDart($anArg: [Float!]!) {
    characters {
      results {
        id
        name
        test2(anArg: $anArg)
      }
    }
  }
""");
