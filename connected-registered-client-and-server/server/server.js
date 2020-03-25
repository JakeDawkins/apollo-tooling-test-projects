const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const schema = fs.readFileSync('./schema.graphql').toString();
const typeDefs = gql(schema);

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    me: () => ({
      firstName: 'Jake',
      lastName: 'Dawkins',
      name: 'Jake Dawkins',
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  resolvers,
  engine: {
    apiKey: 'service:nyc-tooling-meetup:qVi73uH4sr3XgPkdbSpdqg',
    schemaTag: 'current',
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
