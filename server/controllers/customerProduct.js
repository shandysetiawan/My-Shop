const { Product } = require('../models')

class customerProductController {
    static fetchProducts(req, res, next) {

        Product.findAll()
            .then((data) => {

                res.status(200).json(data)

            })
            .catch((err) => {
                next(err)
            })

    }

    static searchProduct(req, res, next) {

        let productId = req.params.id


        Product.findOne({ where: { id: productId } })
            .then((data) => {

                res.status(200).json(data)

            })
            .catch((err) => {
                next(err)
            })


    }
}

module.exports = customerProductController