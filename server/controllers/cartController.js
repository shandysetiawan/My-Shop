const { Cart, Product } = require('../models')

class CartController {

    static fetchCart(req, res, next) {

        Cart.findAll({ where: { UserId: req.userData.id }, include: [Product] })
            .then((data) => {

                res.status(200).json(data)

            })
            .catch((err) => {

                next(err)

            })


    }

    static addCart(req, res, next) {

        console.log()

        let newCart = { ProductId: req.body.product, UserId: req.userData.id, amount: req.body.amount }

        console.log(newCart)

        Cart.findOne({ where: { UserId: newCart.UserId, ProductId: newCart.ProductId } })
            .then((data) => {

                if (data) {

                    let newCart = { ProductId: req.body.product, UserId: req.userData.id, amount: (Number(data.amount) + Number(req.body.amount)) }

                    return Cart.update(newCart, { where: { id: data.id }, returning: true })
                } else {
                    return Cart.create(newCart)
                }

            })
            .then((data) => {

                res.status(200).json(data)
            })
            .catch((err) => {
                next(err)
            })


    }

    static searchCart(req, res, next) {



    }


    static removeCart(req, res, next) {

        let idCart = req.params.id

        console.log(idCart)

        Cart.destroy({ where: { id: idCart } })
            .then((data) => {

                res.status(200).json({ message: 'successfully delete cart!' })
            })
            .catch((err) => {
                next(err)
            })
    }


    static checkOut(req, res, next) {

        // cari semua cart yang UserId nya berdasarkan authentication
        // looping cart hasilnya dapat id barang, find dan update product stock nya
        // id cart dipake untuk ngedestroy

        Cart.findAll({ where: { UserId: req.userData.id } })
            .then((data) => {
                console.log('>>>>>>>first', data)
                data.forEach((cart) => {
                    console.log('>>>>>>>>>second', cart)
                    return Product.findByPk(cart.ProductId)
                })
                    .then((data) => {
                        console.log('>>>>>>>third', data)
                        let updateStock = (Number(data.stock) - Number(cart.amount))
                        console.log('>>>>>>>fourth', updateStock)
                        Product.update(({ stock: updateStock }, { where: { id: data.id } }))
                    })

                Cart.destroy({ where: { UserId: req.userData.id } })
                    .then((data) => {

                        res.status(200).json({ message: "Successfully empty cart!" })
                    })

            })
            .catch((err) => {
                next(err)
            })






    }

}

module.exports = CartController