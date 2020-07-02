const routes = require('express').Router()
const cartController = require('../controllers/cartController')
const { authentication, authorization } = require('../middlewares/auth')

routes.use(authentication)

routes.get('/', cartController.fetchCart)

routes.post('/', cartController.addCart)

routes.get('/checkout', cartController.checkOut)

// routes.get('/:id', cartController.searchCart)

routes.delete('/:id', cartController.removeCart)



module.exports = routes