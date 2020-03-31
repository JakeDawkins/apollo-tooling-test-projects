module.exports = {
  client: {
    name: 'My Client Project',
    // make sure the directives file is picked up, since it's not under src/
    includes: ['src/**/*.graphql', './directives.graphql'],
    // todo: see why service.name doesn't work
    service: 'tooling-test-projects',
    // directives that are handled on the client that shouldn't be sent to
    // AGM to be checked, because they're not part of the published schema
    clientOnlyDirectives: ['myClientOnlyDirective'],
  },
};
