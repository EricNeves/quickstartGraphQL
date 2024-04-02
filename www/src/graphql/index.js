const { resolve } = require("node:path");
const { readFileSync } = require('node:fs')

const { resolvers } = require('./resolvers/index.js')

const schema = readFileSync(resolve(__dirname, "schema.graphql"));

const typeDefs = `#graphql
  ${schema}
`;

module.exports = { typeDefs, resolvers };
