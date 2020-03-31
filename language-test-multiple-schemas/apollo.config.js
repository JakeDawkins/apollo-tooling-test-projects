module.exports = {
  client: {
    name: 'language-test',
    includes: ['src/**/*.js', 'src/**/*.py', 'src/**/*.dart', 'src/**/*.ts'],
    excludes: ['src/excluded.js'],
    service: {
      name: 'local-schema',
      localSchemaFile: ['./schema.graphql', './schema2.graphql'],
    },
    // replace the above service with the following line to run client:check
    // service: "tooling-test-projects"
  },
};
