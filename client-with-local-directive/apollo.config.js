module.exports = {
  client: {
    name: 'My Client Project',
    includes: ['src/**/*.graphql', './directives.graphql'],
    service: {
      name: 'my-project',
      localSchemaFile: './schema.graphql',
    },
  },
};

// module.exports = {
//   client: {
//     name: 'test',
//     service: {
//       name: 'JakeDawkins-8347',
//     },
//   },
// };
