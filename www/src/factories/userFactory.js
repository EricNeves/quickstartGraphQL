/**
 * Repositories
 */
const { UserRepository } = require('../repositories/userRepository')

/**
 * Services
 */
const { UserService } = require('../services/userService')

/**
 * Models
 */
const { User } = require('../models/User')

function generateInstance() {
  const userRepository = new UserRepository({ User })
  const userService    = new UserService({ userRepository })

  return userService
}

module.exports = {
  generateInstance
}