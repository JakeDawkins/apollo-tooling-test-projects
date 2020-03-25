var gql = x => x;

var query = gql`
  query MyQuery {
    allFilms {
      pageInfo {
        startCursor
        # endCursor
      }
    }
  }
`;
