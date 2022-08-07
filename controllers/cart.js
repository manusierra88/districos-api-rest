const Cart = require('../models/cart');
const User = require('../models/user');



const cartPost = async (req, res)=>{
    const newCart = req.body
    res.send('conectado');
}


module.exports = {
    cartPost
}