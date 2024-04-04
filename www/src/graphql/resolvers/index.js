const { getUser } = require('./user')

const resolvers = {
  Query: {
    getUser
  },
};

module.exports = {
  resolvers
}