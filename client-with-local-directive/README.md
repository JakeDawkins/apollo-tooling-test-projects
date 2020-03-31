# Basic Client

This is a variant of the basic client project with a few changes:

- It includes a local schema extension in `src/extendedSchema.graphql`
- It includes a directive definition that is only valid on the client in `./directives.graphql`
- It includes usage of the extended schema & directive in `./src/directiveTest.graphql`

This is not a runnable project, it isn't meant to have a working UI. It's just
to show extraction and type generation for operations defined in a client project.

- 🏃‍♀ Client project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript
- ❌ Not Runnable

## Sample Commands

- `npm run check`: Checks the operations against the published schema.
  - The client-only directive should be stripped automatically before checking. If not, this command will fail.
- `npm run codegen`: runs codegen with an output in typescript
  - There should be a single `__generated__` folder created at the root (because of `--outputFlat`)
