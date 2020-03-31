module.exports = {
  client: {
    includes: ['src/**/*.js', 'src/**/*.py', 'src/**/*.dart'],
    excludes: ['src/excluded.js'],
    service: {
      name: 'local-schema',
      localSchemaFile: ['./schema.graphql', './schema2.graphql'],
    },
  },
};
