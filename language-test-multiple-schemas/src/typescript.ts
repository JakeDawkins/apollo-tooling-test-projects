// this is just stubbed out so we don't get any errors from ts highlighting :)
let gql = (x: any) => x;

var query = gql`
  query GetCharactersTS($anArg: [Float!]!) {
    characters {
      results {
        id
        name
        test2(anArg: $anArg)
      }
    }
  }
`;
