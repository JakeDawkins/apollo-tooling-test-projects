let gql = x => x;

/**
 * If this is included, it will error :)
 */

var otherQuery = gql`
  query MyQuery {
    allPeople {
      people
  }
`;
