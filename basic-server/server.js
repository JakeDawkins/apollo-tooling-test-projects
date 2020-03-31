const { ApolloServer, gql } = require('apollo-server');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    characters: CharacterList
  }

  type CharacterList {
    results: [Character]
  }

  type Character {
    id: ID
    name: String
    gender: String
    image: String
    origin: Origin
    test2(anArg: [Float]!): [Float!]!
    tester: [Float!]!
  }

  type Origin {
    id: ID
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
