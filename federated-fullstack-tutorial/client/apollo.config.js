module.exports = {
  client: {
    name: 'Space Explorer [web]',
    service: 'JakeDawkins-1503',
    excludes: ['**/__tests__/**/*'],
    includes: ['./src/**/*.js'],
  },
  engine: {
    frontend: 'https://engine-staging.apollographql.com',
    endpoint: 'https://engine-staging-graphql.apollographql.com/api/graphql',
  },
};
