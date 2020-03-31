const characters = gql`
  query testQuery2 {
    characters {
      results {
        id
        name
        gender
        image
        origin {
          id
        }
      }
    }
  }
`;
