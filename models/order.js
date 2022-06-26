const {Schema, model} = require('mongoose');


const OrderSchema = Schema({
    client:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref:'Product',
        required: true,
        quantity:{
            type:Number,
            default: 1
        }
    }],
    price:{
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