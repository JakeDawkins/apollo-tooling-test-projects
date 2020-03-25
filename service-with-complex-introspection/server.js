const { ApolloServer, gql } = require('apollo-server');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    # my comment
    hello(a: String): String
    test: String
    me: User
    wow: String
  }

  type User {
    firstName: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  // resolvers,
  mocks: true,
  context: ({ req: { headers } }) => {
    console.log({ headers });
    if (!headers || !headers.authorization) throw new Error('No auth');
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
