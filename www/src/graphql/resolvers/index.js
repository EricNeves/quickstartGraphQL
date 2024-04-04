const { getUser, updateUser } = require('./user')

const resolvers = {
  Query: {
    getUser
  },
  Mutation: {
    updateUser
  }
};

module.exports = {
  resolvers
}