class UserRepository {
  constructor({ User }) {
    this.User = User;
  }

  async save(data) {
    const user = new this.User(data);

    await user.save();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  async auth(data) {
    const { email, password } = data;

    const user = await this.User.findOne({ email });

    if (!user) {
      return false;
    }

    const matchPassword = await user.comparePassword(password);

    if (!matchPassword) {
      return false;
    }

    const payload = {
      id:    user._id,
      name:  user.name,
      email: user.email,
    };

    const jwt = await user.generateJWT(payload)

    return jwt
  }
}

module.exports = {
  UserRepository,
};
