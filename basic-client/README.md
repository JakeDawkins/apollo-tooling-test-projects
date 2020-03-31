# Basic Client

This is a sample basic client project, no bells or whistles. It uses a local
schema file (`schema.json`) to generate code against a few `.graphql` and `.js`
files in `src`.

This is not a runnable project, it isn't meant to have a working UI. It's just
to show extraction and type generation for operations defined in a client project.

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 💪 JavaScript
- ❌ Not Runnable

## Sample Commands

- `npm run codegen`: runs codegen with an output in typescript
  - There should be two `__generated__` folders created, one at the root and one under `src/`
