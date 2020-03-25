const { ApolloServer, gql } = require('apollo-server');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    # my comment
    hello(a: String): String
    test: String
    me: User
  }

  type User {
    firstName: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return '123456';
    },
    me: () => ({}),
  },
};

const mocks = {
  Query: () => ({
    hello: (_, args) => {
      console.log({ args });
      return 'Wow!';
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  // engine: {
  //   apiKey: 'service:JakeDawkins-9920:akNJyuvLRBNXRvqLLlVjNg',
  //   endpointUrl: 'https://engine-staging-graphql.apollographql.com/api/graphql',
  //   debugPrintReports: true,
  //   schemaTag: 'current',
  // },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
