def gql(x): return x


query = gql('''
  query getPeople2 {
    allPeople {
      people {
        id
        name
        birthYear
      }
    }
  }
''')
