var gql = x => x;

var otherQuery = gql`
  query MyQuery {
    allPeople {
      people {
        birthYear
        id
        boo
      }
    }
  }
`;
