const { UserRepository } = require("../../repositories/userRepository");
const { User } = require("../../models/User");

const userRepository = new UserRepository({ User });

function getUser({ userRepository }) {
  return async function (parent, { }, context) {
    const { id } = context
    return await userRepository.find({ id });
  };
}

function updateUser({ userRepository }) {
  return async function (parent, { input: { name, email } }, context) {
    const { id } = context

    const user = await userRepository.change({ id, name, email })

    return user;
  };
}

module.exports = {
  getUser: getUser({ userRepository }),
  updateUser: updateUser({ userRepository }),
  pure: {
    getUser,
    updateUser,
  },
};
