const Cart = require('../models/cart');
const User = require('../models/user');
const Product = require('../models/product');
const { response } = require('express');

const getCarts = async(req, res=response)=>{
    const carts = await Cart.find({}).populate('user');

    if(!carts){
        return res.status(404).json({
            ok:false,
            msg:'No carts were founded'
        })
    }

    res.status(200).json({
        ok:true,
        carts
    })
    
}

const getCartbyId = async(req, res)=>{
    const cartOwner = req.params.uid

    const cart = await User.findById({cartOwner});

    if(!cart){
        return res.status(404).json({
            ok:false,
            msg: 'Cart not found.'
        })
    }

    res.status(200).json({
        ok:true,
        cart
    });
}


module.exports={
    getCarts,
    getCartbyId
}


