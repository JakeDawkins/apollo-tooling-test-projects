def gql(x): return x

query = gql('''
  query GetCharactersPython($anArg: [Float!]!) {
    characters {
      results {
        id
        name
        test2(anArg: $anArg)
      }
    }
  }
''')
