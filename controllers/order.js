const { request, response } = require('express');
const Order = require('../models/order');
const User = require('../models/user');
const Cart = require('../models/cart');

const Product = require('../models/product');


const postOrder = async(req=request, res=response)=>{
   // const userID = req.user.id;
    const {userID,products,bill} = req.body;
    const user = await User.findById(userID);
    try {
        
        if(!user){
            res.status(404).json({
                ok:false,
                msg: 'Usuario sin autorización'
            })
        }

        const order = new Order({user:user._id,products,bill});

        user.order = user.order.concat(order._id);
        user.save();

        await order.save();

        res.status(200).json({
            ok:true,
            order
        })

    } catch (error) {
        res.status(400).json(error)
    }
    
}

const getOrders = async (req=request, res=response)=>{
    const [orders] = await Order.find({}).populate('user',{
        products:1,
        name:1,
        _id:0
    });
    res.status(200).json({
        ok:true,
        orders
    })
}





//const orderCreate = async(req=request, res=response)=>{
//     const{clientID, product, quantity} = req.body;
//     const client = await Client.findById(clientID);
    


//     const order = new Order ({
//          client:client._id,
//          product,
//          quantity
//     })

//     client.orders = client.orders.concat(order._id);
//     client.save()

//     await order.save()

//     res.status(201).json({
//         ok:true,
//         order
//     })

// }

// const orderGet = async(req=request, res= response)=>{
//     const [orders] = await Promise.all([
//         Order.find({}).populate('client',{
//             product: 1,
//             company: 1,
//             _id: 0
//         })
//     ])

//     res.status(200).json({
//         ok:true,
//         orders
//     })
// }

// const orderGetbyId =async(req= request, res= response)=>{
//     const {id} = req.params

//     const order = await Order.findById(id).populate('client',{
//         product:1,
//         company:1,
//         _id:0
//     })
//     if(!order){
//         return res.status(404).json({
//             ok:false,
//             msg:'La orden/pedido no se encuentra en la base de datos'
//         })
//     }

//     res.status(200).json(order);
// }





module.exports ={
    postOrder,
    getOrders,
}