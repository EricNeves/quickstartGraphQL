const router = require("express").Router();

/**
 * Controllers
 */
const userController = require("../controllers/userController");

/**
 * Factories
 */
const userFactory = require('../factories/userFactory')

/**
 * Services
 */
const userService = userFactory.generateInstance()

/**
 * Middlewares
 */
const { isAuthenticated } = require('../middlewares/authenticateMiddleware')

/**
 * Endpoints
 */
router.post('/',      userController.store.bind({}, { userService }))
router.post('/login', userController.login.bind({}, { userService }))
router.get('/info',   isAuthenticated, userController.info.bind({},  { userService }))

module.exports = router