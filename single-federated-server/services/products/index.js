const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('apollo-federation');

const typeDefs = gql`
  type Query {
    _service: _Service
    topProducts: [Product]!
  }

type _Service {
  sdl: String!
}

  type Product @key(fields: "upc") {
    upc: ID!
  }
`;

const resolvers = {
  Query: {
    topProducts: () => {
      return [{}, {}, {}];
    },
  },
  Product: {
    __resolveReference: ({ upc }) => {
      console.log({ upc });
      return {
        upc,
      };
    },
    upc: ({ upc }) =>
      upc ||
      Math.random()
        .toString()
        .replace(/.*\./, ''),
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
