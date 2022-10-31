const Cart = require('../models/cart');
const User = require('../models/user');
const Product = require('../models/product');
const { response } = require('express');

const getCarts = async (req, res = response) => {
    const carts = await Cart.find({}).populate('user');

    if (!carts) {
        return res.status(404).json({
            ok: false,
            msg: 'No carts were founded'
        })
    }

    res.status(200).json({
        ok: true,
        carts
    })

}

const getCartbyId = async (req, res) => {
    const cartOwner = req.params.uid

    const cart = await User.findById({ cartOwner });

    if (!cart) {
        return res.status(404).json({
            ok: false,
            msg: 'Cart not found.'
        })
    }

    res.status(200).json({
        ok: true,
        cart
    });
}


const postCart = async (req, res) => {
    const owner = req.user.uid;
    const { productID, quantity } = req.body;

    try {
        const cart = Cart.findOne({ owner });
        const product = Product.findOne({ productID });

        if (!product) {
            return res.status(404).json({
                ok: false,
                msg: 'Product not found'
            })
        }

        const price = product.salePrice;
        const name = product.name;

        if (cart) {
            const prodIndex = cart.products.findIndex(prod => prod._id === productID)


            if (prodIndex > -1) {
                let cartProduct = cart.products[prodIndex];
            }
        }



    } catch (error) {

    }



}


module.exports = {
    getCarts,
    getCartbyId,
    postCart
}


