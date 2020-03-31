# Language Tests with Multiple Schemas

This is a project with a couple files containing graphql operations in files of
different languages (js, dart, and python). This uses multiple local schema files,
each containing a portion of the schema.

- 🏃‍♀ Client project
- 📄 Uses multiple local schema files
- 🎉 Multiple Languages
- ❌ Not Runnable

## Sample Commands

- `npm run codegen`: generates types for all the supported filetypes in `src`.
  - should produce a single `types.json` file at the root with 4 `operations`, one for each file
- `npm run extract`: extracts operations, hashes them, and dumps them in a `manifest.json` at the root.
