const { request, response } = require('express');
const Order = require('../models/order');
const Client = require('../models/client');
const Product = require('../models/product');
const product = require('../models/product');




const orderCreate = async(req=request, res=response)=>{
    const{clientID, product, quantity} = req.body;
    const client = await Client.findById(clientID);
    


    const order = new Order ({
         client:client._id,
         product,
         quantity
    })

    client.orders = client.orders.concat(order._id);
    client.save()

    await order.save()

    res.status(201).json({
        ok:true,
        order
    })

}

const orderGet = async(req=request, res= response)=>{
    const [orders] = await Promise.all([
        Order.find({}).populate('client',{
            product: 1,
            company: 1,
            _id: 0
        })
    ])

    res.status(200).json({
        ok:true,
        orders
    })
}





module.exports ={
    orderCreate,
    orderGet,
}