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
- ❌ Not Runnable
- ✅ Runnable with `npm i && npm start`

For a more detailed explanation of a project and available commands to run for
testing, see each project's `README.md`. The following sample projects are in
this repository:

## Monorepo setup

Surprise! This repository _is_ a monorepo containing multiple projects. Note
how each project listed has _its own_ `apollo.config.js` file. This may seem
a bit cumbersome (and it is), but it is the correct way right now to set up a
monorepo. Commands on a specific project should be run from that project's directory.

For example, for running codegen on the `ts-client` project, you should first be
`cd`ed into that project.

Currently, the Apollo VS Code extension does _not_ support the multi-root workspace
feature in VS Code. You must open the monorepo at the root or separately for a
single project.

## Basic client

This is a sample basic client project, no bells or whistles. It uses a local
schema file (`schema.json`) to generate code against a few `.graphql` and `.js`
files in `src`.

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 💪 JavaScript
- ❌ Not Runnable

## Basic server

This is a simple `apollo-server` project with a schema defined in a `.js` file.

- 💻 Service project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript
- ✅ Runnable with `npm i && npm start`

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

## Federated fullstack tutorial

This is a modified version of Apollo's [fullstack tutorial app](https://www.apollographql.com/docs/tutorial/introduction/)
that uses apollo federation to build a graph. This is a collection of a few
federated services, a gateway, and a client that consumes it. More details about
these services can be found in this directory's `README.md`.

- 🕸 Federated Service Project
- 🏃‍♀ Client project
- 🚀 Requires an Apollo Graph Manager Service & api key
- 💪 JavaScript

## Typescript client

This is similar to the `basic-client` project except it uses TypeScript and generated
types instead of JavaScript.

- 🏃‍♀ Client project
- 📄 Uses a local schema file
- 📐 TypeScript
