class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async create(data) {
    try {
      const user = await this.userRepository.save(data);

      return user;
    } catch (err) {
      return { error: err.message };
    }
  }

  async authenticate(data) {
    try {
      const user = await this.userRepository.auth(data);

      if (!user) {
        return { unauthorized: "Sorry, email/password is incorrect." };
      }

      return user;
    } catch (err) {
      return { error: err.message };
    }
  }

  async fetchInfo(data) {
    try {
      const user = await this.userRepository.find(data);

      if (!user) {
        return { unauthorized: "Sorry, user not found." };
      }

      return user;
    } catch (err) {
      return { error: err.message };
    }
  }
}

module.exports = {
  UserService,
};
