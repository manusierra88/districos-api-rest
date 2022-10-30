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


module.exports={
    getCarts
}


