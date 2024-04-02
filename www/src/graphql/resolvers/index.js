const { getAll } = require('./user')

const resolvers = {
  Query: {
    getAll
  },
};

module.exports = {
  resolvers
}