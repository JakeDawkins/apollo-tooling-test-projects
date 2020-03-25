String gql(String x) => x;

var query = gql(r"""
  query getPeople {
    allPeople {
      people {
        id
        name
        birthYear
      }
    }
  }
""");
