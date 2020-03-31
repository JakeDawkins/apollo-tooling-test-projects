## Basic server

This is a variant of the simple `basic-server` project with a schema defined in
a `.js` file. Since there isn't a local schema file, the schema must be introspected
against a local running server to do things like `service:push` and `service:check`.

This server requires an `authorization` header to be passed in order to query or
instrospect against. In the `apollo.config.js` file, we define that header info
so the CLI knows what to pass to the server. Try removing the header and see
what happens!

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
