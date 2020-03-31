## Basic server

This is a simple `apollo-server` project with a schema defined in a `.js` file.
Since there isn't a local schema file, the schema must be introspected against
a local running server to do things like `service:push` and `service:check`.

- 💻 Service project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript
- ✅ Runnable with `npm i && npm start`

## Sample Commands

_Note: to run `push` and `check`, you must have an `APOLLO_KEY` defined in either the environment or a `.env` file. See `.env.example` for the format of the `.env` file._

- `npm i`: installs all dependencies needed to run the server.
- `npm start`: starts a local server running at port 4000 for introspection.
- `npm run push`: publishes service schema to apollo graph manager.
- `npm run check`: checks service schema against the previously pushed version.
