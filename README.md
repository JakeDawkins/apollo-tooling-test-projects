# Apollo Tooling Test Projects

This project is a sandbox of a few sample projects that use GraphQL. It's meant
to act as a repository for multiple simple and more complicated setups of GraphQL
projects along with accompanying `apollo.config.js` files and some sample commands
to run.

These projects can be used for reference in setting up your own projects or for
manual testing of Apollo's own tooling (like the CLI and VS Code extension).

Below is a list of projects included and a summary of each. I've included a quick
reference of the features of each project in the following format:

- 🏃‍♀ Client project
- 💻 Service project
- 🕸 Federated Service Project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 📄 Uses a local schema file
- 📐 TypeScript
- 💪 JavaScript
- 🎉 Multiple Languages

For a more detailed explanation of a project and available commands to run for
testing, see each project's `README.md`. The following sample projects are in
this repository:

## Basic client

This is a simple apollo client project, no bells or whistles. It uses a local
schema file (`schema.json`) to generate code against a few `.graphql` and `.js`
files in `src`.

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 💪 JavaScript

## Basic server

This is a simple `apollo-server` project with a schema defined in a `.js` file.

- 💻 Service project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript

## Client with local directives

This is a client that leverages local state and client-only directives. It extends
the remote schema with its own schema.

- 🏃‍♀ Client project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript

## Languages

This is a very simple project with a couple files containing graphql operations
in files of different languages (js, dart, and python).

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 🎉 Multiple Languages

## Service with complex introspection

This is an apollo-server project which requires an auth header to run introspection.

- 💻 Service project
- 📄 Uses a local schema file
- 💪 JavaScript

## Federated services

This is a collection of a few federated services and a gateway. More details about
these services can be found in this directory's `README.md`.

- 🕸 Federated Service Project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript

## Typescript client

This is similar to the `basic-client` project except it uses TypeScript and generated
types instead of JavaScript.

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 📐 TypeScript
