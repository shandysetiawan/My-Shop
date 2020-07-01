const routes = require('express').Router()
const userController = require('../controllers/userController')

routes.post('/login', userController.loginUser)

routes.post('/registerCustomer', userController.registerCustomer)

routes.post('/loginCustomer', userController.loginCustomer)


module.exports = routes