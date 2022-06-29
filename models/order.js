const {Schema, model} = require('mongoose');


const OrderSchema = Schema({
    client:{
        type:Schema.Types.ObjectId,
        ref: 'Client'
    },
    product:[{
       name:String,
       quantity: Number
    }],
    totalPrice:{
        type:Number
    },
    payed:{
        type: Boolean,
        default: false,
    },
    orderDate:{
        type:Date,
        default: Date.now()
    }
})

module.exports = model('Order', OrderSchema)