const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const LaunchAPI = require('./datasources/launch');
const { paginateResults } = require('./utils');

const typeDefs = gql`
  extend type Query {
    launches(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      pageSize: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      after: String
      anotherArg: String
    ): LaunchConnection!
    launch(id: ID!): Launch
  }

  """
  Simple wrapper around our list of launches that contains a cursor to the
  last item in the list. Pass this cursor to the launches query to fetch results
  after these.
  """
  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Launch @key(fields: "id") {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;
const resolvers = {
  Query: {
    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      // we want these in reverse chronological order
      allLaunches.reverse();

      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches,
      });

      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: launches.length
          ? launches[launches.length - 1].cursor !==
            allLaunches[allLaunches.length - 1].cursor
          : false,
      };
    },
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
  },
  Launch: {
    __resolveReference: async (reference, { dataSources }) => {
      return dataSources.launchAPI.getLaunchById({
        launchId: reference.id,
      });
    },
  },
  Mission: {
    // make sure the default size is 'large' in case user doesn't specify
    missionPatch: (mission, { size } = { size: 'LARGE' }) => {
      return size === 'SMALL'
        ? mission.missionPatchSmall
        : mission.missionPatchLarge;
    },
  },
};

// Set up Apollo Server
const schema = buildFederatedSchema([{ typeDefs, resolvers }]);
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
  }),
});

server
  .listen({ port: 4011 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
