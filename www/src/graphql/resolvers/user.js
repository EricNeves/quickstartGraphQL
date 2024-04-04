const { UserRepository } = require("../../repositories/userRepository");
const { User } = require("../../models/User");

const userRepository = new UserRepository({ User });

function getUser({ userRepository }) {
  return function (parent, { id }, context) {
    return userRepository.find({ id });
  };
}

module.exports = {
  getUser: getUser({ userRepository }),
  pure: {
    getUser,
  },
};
