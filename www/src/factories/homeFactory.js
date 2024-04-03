/**
 * Repositories
 */
const { HomeRepository } = require('../repositories/homeRepository')

/**
 * Services
 */
const { HomeService } = require('../services/homeService')

function generateInstance() {
  const homeRepository = new HomeRepository()
  const homeService    = new HomeService({ homeRepository })

  return homeService
}

module.exports = {
  generateInstance
}