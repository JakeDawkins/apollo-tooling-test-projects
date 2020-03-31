const { ApolloServer } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4000/graphql' },
    { name: 'launches', url: 'http://localhost:4001/graphql' },
  ],
  buildService({ name, url }) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        request.http.headers.set('authorization', context.authorization);
      },
    });
  },
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({
    schema,
    executor,
    context: ({ req }) => {
      // get the authorization token from the headers
      const authorization = req.headers.authorization || '';
      // return the authorization token in the context
      return { authorization };
    },
  });

  server.listen({ port: 4444 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
