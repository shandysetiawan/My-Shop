const routes = require('express').Router()
const customerProductController = require('../controllers/customerProduct')


routes.get('/', customerProductController.fetchProducts)


routes.get('/:id', customerProductController.searchProduct)


module.exports = routes