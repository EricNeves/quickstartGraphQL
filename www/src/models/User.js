const mongoose = require("mongoose");
const bcrypt   = require('bcrypt')
const jwt      = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const hash = await bcrypt.hash(this.password, 10)

  this.password = hash 

  next()
});

UserSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    const matchPassword = bcrypt.compare(password, this.password)

    resolve(matchPassword)
  })
}

UserSchema.methods.generateJWT = function (payload) {
  return new Promise(async function (resolve, reject) {
    jwt.sign(payload, SECRET_KEY, (err, token) => {
      if (err) {
        reject(err)
      }

      resolve(token)
    })
  })
}

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
