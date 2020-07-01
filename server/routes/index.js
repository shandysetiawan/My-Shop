const routes = require('express').Router()
const userRoutes = require('./user')
const productRoutes = require('./product')
const cartRoutes = require('./cart')
const customerProductRoutes = require('./customerProduct')
const errorHandler = require('../middlewares/errorHandler')

routes.use('/', userRoutes)

routes.use('/customer/products', customerProductRoutes)

routes.use('/products', productRoutes)

routes.use('/carts', cartRoutes)

routes.use(errorHandler)

module.exports = routes